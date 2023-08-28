document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const megaMenu = document.querySelector(".mega-menu");
  const menuCloseButton = document.querySelector(".menu-close-button");

  menuButton.addEventListener("click", function () {
    megaMenu.style.display = "block"; // Exibir o mega-menu
  });

  menuCloseButton.addEventListener("click", function () {
    megaMenu.style.display = "none"; // Fechar o mega-menu
  });
});
