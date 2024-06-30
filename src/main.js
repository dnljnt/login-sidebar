const nav = document.getElementById("nav-menu");
const navOpen = document.getElementById("icon-open");
const navClose = document.getElementById("icon-close");
const loginLink = document.getElementById("login");
const loginPage = document.getElementById("login-page");
const loginClose = document.getElementById("login-close");
const menuLinks = document.querySelectorAll('.menu-link');
const homeTitle = document.querySelector('.home-title h1');

if (navOpen) {
  navOpen.addEventListener("click", () => {
    nav.classList.add("show-menu");
  });
}

if (loginLink) {
  loginLink.addEventListener("click", () => {
    loginPage.classList.add("show-login");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    nav.classList.remove("show-menu");
  });
}

if (loginClose) {
  loginClose.addEventListener("click", () => {
    loginPage.classList.remove("show-login");
  });
}

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const linkText = e.target.getAttribute('data-title');
    homeTitle.textContent = linkText;
  });
});