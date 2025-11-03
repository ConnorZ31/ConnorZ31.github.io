
    // --- Utility functions for localStorage ---
    function getFavorites() {
      return JSON.parse(localStorage.getItem('favorites') || '[]');
    }

    function saveFavorites(favorites) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    function isFavorited(key) {
      const favorites = getFavorites();
      return favorites.some(book => book.key === key);
    }

    function toggleFavorite(book) {
      let favorites = getFavorites();
      if (isFavorited(book.key)) {
        favorites = favorites.filter(b => b.key !== book.key);
      } else {
        favorites.push(book);
      }
      saveFavorites(favorites);
    }

    // --- Display search results ---
    async function searchBooks() {
      const query = document.getElementById('searchBox').value;
      const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
      const data = await response.json();

      renderBooks(data.docs.slice(0, 10));
    }
    function renderBooks(books) {
      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = '';

      books.forEach(book => {
        const coverUrl = book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : 'https://via.placeholder.com/150x200?text=No+Cover';

        const div = document.createElement('div');
        div.className = 'book';

        const favorited = isFavorited(book.key);

        div.innerHTML = `
          <img src="${coverUrl}" alt="Cover">
          <div>
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
            <p><strong>First Published:</strong> ${book.first_publish_year || 'N/A'}</p>
          </div>
          <button class="favorite ${favorited ? 'favorited' : ''}" title="Toggle Favorite">
            ${favorited ? '✮' : '★'}
          </button>
        `;

        const favBtn = div.querySelector('.favorite');
        favBtn.addEventListener('click', () => {
          toggleFavorite(book);
          renderBooks(books); 
        });

        resultsDiv.appendChild(div);
      });
    }

    function showFavorites() {
      const favorites = getFavorites();
      if (favorites.length === 0) {
        document.getElementById('results').innerHTML = '<p>No favorites yet!</p>';
      } else {
        renderBooks(favorites);
      }
    }

    document.getElementById('searchBtn').addEventListener('click', searchBooks);
    document.getElementById('showFavoritesBtn').addEventListener('click', showFavorites);