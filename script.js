// Adicionando animações aos elementos da página ao carregar
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
  
    sections.forEach(section => {
      section.style.animation = "fadein 1s ease, slideup 1s ease";
    });
  });
  