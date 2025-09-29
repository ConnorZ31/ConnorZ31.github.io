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
  alert("Follow our instagram for more timley updates");
}
//for the three size changing image boxes that have no images yet
const tripbs = document.querySelectorAll('.tripb');

  tripbs.forEach(tripb => {
    tripb.addEventListener('click', () => {
      tripbs.forEach(t => t.classList.remove('expanded'));
      tripb.classList.add('expanded');
    });
  });