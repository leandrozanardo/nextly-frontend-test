document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.querySelector(".menu-button");
  const megaMenu = document.querySelector(".mega-menu");
  const menuCloseButton = document.querySelector(".menu-close-button");

  menuButton.addEventListener("click", function() {
    megaMenu.style.display = "block";
  });

  menuCloseButton.addEventListener("click", function() {
    megaMenu.style.display = "none";
  });

  const searchButton = document.querySelector('.jsSearch');
  const searchInput = document.querySelector('.search-input');


  searchButton.addEventListener('click', function(event) {
    event.preventDefault();

    searchInput.scrollIntoView({ behavior: 'smooth' });

    searchInput.focus();
  });
});
