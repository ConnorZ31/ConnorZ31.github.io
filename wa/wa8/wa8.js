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

const emailInput = document.getElementById('emailInput');
    const saveBtn = document.getElementById('saveBtn');
    const clearBtn = document.getElementById('clearBtn');
    const displayEmail = document.getElementById('displayEmail');

    function showStoredEmail() {
      const storedEmail = localStorage.getItem('userEmail');
      if (storedEmail) {
        displayEmail.textContent = `Stored Email: ${storedEmail}`;
      } else {
        displayEmail.textContent = '';
      }
    }
    saveBtn.addEventListener('click', () => {
      const email = emailInput.value.trim();
      if (email) {
        localStorage.setItem('userEmail', email);
        showStoredEmail();
        emailInput.value = '';
      } else {
        alert('Please enter a valid email.');
      }
    });

    clearBtn.addEventListener('click', () => {
      localStorage.removeItem('userEmail');
      showStoredEmail();
    });

    window.addEventListener('DOMContentLoaded', showStoredEmail);

    const translations = {
  es: {
    mensrugb: "CU Boulder Rugby Masculino",
    meet: "Conoce al equipo",
    comm: "Recursos",
    events: "Eventos",
    cont: "Contactar",
    theme:"Tema",
    enter: "Introduce tu Email para recibir actualizaciones",
    save: "Ahorrar",
    clear: "Borrar Email"

  },
  en: {
    mensrugb: "CU Boulder Mens Rugby",
    meet: "Meet the Team",
    comm: "Resources",
    events: "Events",
    cont: "Contact",
    theme:"Theme",
    enter: "Enter your email for updates",
    save: "Save",
    clear: "Clear Email"
  },
};

let currentLang = "en";

document.getElementById("language-toggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "es" : "en";
  switchLanguage(currentLang);
});

function switchLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");

  elements.forEach((el) => {
    const key = el.getAttribute("data-translate");
    el.textContent = translations[lang][key];
  });

  // Update button label
  document.getElementById("language-toggle").textContent =
    lang === "en" ? "Español" : "English";
}