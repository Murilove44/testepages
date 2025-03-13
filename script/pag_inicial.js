document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('logemail').value;
    const senha = document.getElementById('logpass').value;
    if (email && senha) {
        window.location.href = 'LoveFlix.html';
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});

