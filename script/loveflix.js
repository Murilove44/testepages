const checkbox = document.getElementById('cb3-8');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    document.body.style.backgroundColor = '#808980'; 
    document.body.style.color = 'black'; 
  } else {
    document.body.style.backgroundColor = '#0A0A0A'; 
    document.body.style.color = 'white'; 
  }
});

function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.scrollLeftButton').forEach(button => {
      button.addEventListener('click', function() {
          const containerId = this.getAttribute('data-container'); 
          const container = document.getElementById(containerId); 
          if (container) {
              container.scrollBy({
                  left: -400, // Rola para a esquerda
                  behavior: 'smooth' 
              });
          }
      });
  });

  
  document.querySelectorAll('.scrollRightButton').forEach(button => {
      button.addEventListener('click', function() {
          const containerId = this.getAttribute('data-container'); 
          const container = document.getElementById(containerId); 
          if (container) {
              container.scrollBy({
                  left: 400, // Rola para a direita
                  behavior: 'smooth' 
              });
          }
      });
  });
});  

// Script para a barra de pesquisa
document.querySelector('.input').addEventListener('input', function() {
  const termoPesquisa = this.value.toLowerCase(); // Obtém o termo de pesquisa em minúsculas
  const filmes = document.querySelectorAll('.filme'); // Seleciona todos os filmes

  filmes.forEach(filme => {
      const nomeFilme = filme.getAttribute('data-nome').toLowerCase(); // Obtém o nome do filme em minúsculas
      if (nomeFilme.includes(termoPesquisa)) {
          filme.style.display = 'block'; // Mostra o filme se corresponder à pesquisa
      } else {
          filme.style.display = 'none'; // Esconde o filme se não corresponder
      }
  });
});

// Script para a barra lateral
document.getElementById('barra').addEventListener('change', function() {
  var sidebar = document.getElementById('sidebar');
  if (this.checked) {
      sidebar.style.left = '0';
  } else {
      sidebar.style.left = '-250px';
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const barraCheckbox = document.getElementById('barra');
  const sidebar = document.querySelector('.sidebar');
  const navLinks = document.querySelectorAll('.sidebar a');

  function animateLinks() {
    navLinks.forEach((link, index) => {
      if (barraCheckbox.checked) {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      } else {
        link.style.animation = '';
      }
    });
  }

  document.querySelector('.barra').addEventListener('click', function () {
    animateLinks();
  });

  document.addEventListener('click', function (event) {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnButton = event.target.closest('.barra') !== null;

    if (!isClickInsideSidebar && !isClickOnButton) {
      barraCheckbox.checked = false;
      animateLinks();
    }
  });
});