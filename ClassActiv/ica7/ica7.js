const navToggle =document.querySelector('.nav-toggle');
const navMenu =document.querySelector('.nav-menu2');
const burger = document.getElementById('burger');
const deez = document.getElementById('deez');
const nuts = document.getElementById('nuts');
const slime = document.getElementById('slime');


burger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

function cFunction(){
  alert("Follow our instagram for more timley updates @Cubuffsrugby");
}
//for the three size changing image boxes that have no images yet
const tripbs = document.querySelectorAll('.tripb');

  tripbs.forEach(tripb => {
    tripb.addEventListener('click', () => {
      tripbs.forEach(t => t.classList.remove('expanded'));
      tripb.classList.add('expanded');
    });
  });
 
// let btn= document.querySelector('#theme').addEventListener('click', theme);
// function theme(){
//   // console.log("theme works");
//   setTheme("light");

// }
// function setTheme(theme) {
//   let inTheme='light';
//     if(inTheme == 'dark'){
//       theme= 'light';
//     }else{
//       theme= 'dark'
//     }
    
//     localStorage.setItem('userTheme', theme);
//     document.body.className = theme;

// }

// window.addEventListener('load', function() {
//     const savedTheme = localStorage.getItem('userTheme') || 'light';
//     document.body.className = savedTheme;
// });
let btn= document.querySelector('#theme').addEventListener('click', toggleTheme);

function toggleTheme() {
  // Chekcs the Local Storage for the theme, sets it to light for the first time someone visits
  const currentTheme = localStorage.getItem('userTheme') || 'light';
  // console.log("theme works");

  // Toggle between the themes with light as default
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  // Set the new theme to whatever the storage has or the default
  setTheme(newTheme);
}
//
function setTheme(theme) {
  localStorage.setItem('userTheme', theme);
  document.body.className = theme;
}

// when the page loads it loads the saved theme from local storage
window.addEventListener('load', function () {
  const savedTheme = localStorage.getItem('userTheme') || 'light';
  setTheme(savedTheme);
});