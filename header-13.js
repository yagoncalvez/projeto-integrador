let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");
let searchToggle = document.querySelector(".search__toggle");
let searchForm = document.querySelector(".search__form");

// Função para alternar o menu
navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
    searchForm.classList.remove("active");
    searchToggle.classList.remove("active");
  }
});

// Função para alternar a barra de pesquisa
searchToggle.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  searchToggle.classList.toggle("active");

  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "menu");
  navWrapper.classList.remove("active");

  if (searchToggle.classList.contains("active")) {
    searchToggle.setAttribute("aria-label", "Close search");
  } else {
    searchToggle.setAttribute("aria-label", "Open search");
  }
});

// Função que fecha o menu ao clicar fora dele
document.addEventListener("click", function (event) {
  // Verifica se o clique foi fora do menu ou do botão de abrir/fechar
  if (!navWrapper.contains(event.target) && !navToggle.contains(event.target)) {
    closeMenu();
  }
});

// Função para fechar o menu
function closeMenu() {
  navWrapper.classList.remove("active");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "menu");
}
