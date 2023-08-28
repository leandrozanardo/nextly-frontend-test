document.addEventListener("DOMContentLoaded", function() {

  loadMegaMenu();

  loadSearchAction();

});

function loadMegaMenu(){
  const menuButton = document.querySelector(".menu-button");
  const megaMenu = document.querySelector(".mega-menu");
  const menuCloseButton = document.querySelector(".menu-close-button");

  menuButton.addEventListener("click", function() {
    megaMenu.style.display = "block";
  });

  menuCloseButton.addEventListener("click", function() {
    megaMenu.style.display = "none";
  });
};

function loadSearchAction(){
  const searchButton = document.querySelector('.jsSearch');
  const searchInput = document.querySelector('.search-input');

  searchButton.addEventListener('click', function(event) {
    event.preventDefault();

    searchInput.scrollIntoView({ behavior: 'smooth' });

    searchInput.focus();
  });
}