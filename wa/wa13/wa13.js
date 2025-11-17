 let players = [];

    function generatePlayers() {
      players = [];
      for (let i = 0; i < 20; i++) {
        players.push({
          id: i + 1,
          mmr: Math.floor(Math.random() * 4000) + 500
        });
      }
      displayPlayers();
      document.getElementById("matches").innerHTML = "";
    }

    function displayPlayers() {
      const container = document.getElementById("players");
      container.innerHTML = "";

      players.forEach(p => {
        const div = document.createElement("div");
        div.className = "player";
        div.innerHTML = `Player ${p.id}<br>MMR: <span>${p.mmr}</span>`;
        container.appendChild(div);
      });
    }

    function runMatchmaking() {
      const tolerance = parseInt(document.getElementById("tolerance").value);

      // Sort players by MMR
      const sorted = [...players].sort((a, b) => a.mmr - b.mmr);
      const matches = [];

      // Iterate through sorted players and match them
      for (let i = 0; i < sorted.length - 1; i++) {
        const p1 = sorted[i];
        const p2 = sorted[i + 1];

        if (Math.abs(p1.mmr - p2.mmr) <= tolerance) {
          matches.push([p1, p2]);
          i++; // Skip next since it's paired
        }
      }

      displayMatches(matches);
    }

    function displayMatches(matches) {
      const container = document.getElementById("matches");
      container.innerHTML = "";

      if (matches.length === 0) {
        container.innerHTML = "<p>No matches formed with current tolerance.</p>";
        return;
      }

      matches.forEach((pair, index) => {
        const div = document.createElement("div");
        div.className = "match";
        div.innerHTML = `
          <strong>Match ${index + 1}</strong><br>
          P${pair[0].id} (${pair[0].mmr})<br>
          vs<br>
          P${pair[1].id} (${pair[1].mmr})
        `;
        container.appendChild(div);
      });
    }

    // Slider value update
    const slider = document.getElementById("tolerance");
    slider.addEventListener("input", () => {
      document.getElementById("tolValue").innerText = slider.value;
    });

    // Initial player generation
    generatePlayers();