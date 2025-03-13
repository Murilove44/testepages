document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.animated-button');

    if (button) {
        const isAdded = localStorage.getItem('AranhaAdded') === 'true';
        if (isAdded) {
            button.querySelector('.text').textContent = 'Remover da Minha Lista';
            button.setAttribute('data-added', 'true');
        }

        button.addEventListener('click', () => {
            const isAdded = button.getAttribute('data-added') === 'true';
            if (isAdded) {
                button.querySelector('.text').textContent = 'Adicionar à Minha Lista';
                button.setAttribute('data-added', 'false');
                localStorage.setItem('AranhaAdded', 'false');

                let myList = JSON.parse(localStorage.getItem('myList')) || [];
                myList = myList.filter(movie => movie.title !== 'Homem Aranha'); 
                localStorage.setItem('myList', JSON.stringify(myList));
            } else {
                button.querySelector('.text').textContent = 'Remover da Minha Lista';
                button.setAttribute('data-added', 'true');
                localStorage.setItem('AranhaAdded', 'true'); 

                const movie = {
                    title: 'Homem Aranha', 
                    image: 'imagens/semvoltapracasa.jpg',
                    link: 'homem-aranha.html'
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