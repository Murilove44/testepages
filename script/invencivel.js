document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.animated-button');

    if (button) {
        const isAdded = localStorage.getItem('InvencivelAdded') === 'true';
        if (isAdded) {
            button.querySelector('.text').textContent = 'Remover da Minha Lista';
            button.setAttribute('data-added', 'true');
        }

        button.addEventListener('click', () => {
            const isAdded = button.getAttribute('data-added') === 'true';
            if (isAdded) {
                button.querySelector('.text').textContent = 'Adicionar à Minha Lista';
                button.setAttribute('data-added', 'false');
                localStorage.setItem('InvencivelAdded', 'false');

                let myList = JSON.parse(localStorage.getItem('myList')) || [];
                myList = myList.filter(movie => movie.title !== 'Invencivel'); 
                localStorage.setItem('myList', JSON.stringify(myList));
            } else {
                button.querySelector('.text').textContent = 'Remover da Minha Lista';
                button.setAttribute('data-added', 'true');
                localStorage.setItem('InvencivelAdded', 'true'); 

                const movie = {
                    title: 'Invencivel', 
                    image: 'imagens/invencivel.jpg',
                    link: 'invencivel.html'
                };
                let myList = JSON.parse(localStorage.getItem('myList')) || [];
                myList.push(movie);
                localStorage.setItem('myList', JSON.stringify(myList));
            }
        });
    } else {
        console.error('Botão não encontrado! Verifique o seletor.');
    }
});

function clickMenu() {
    if(lista.style.display == 'block') {
        lista.style.display = 'none';
    }
    else {
        lista.style.display = 'block';
    }
};