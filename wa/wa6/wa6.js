  const navToggle =document.querySelector('.nav-toggle');
    const navMenu =document.querySelector('.nav-menu2');
const burger = document.getElementById('burger');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

function cFunction(){
  alert("I am a Button");
}