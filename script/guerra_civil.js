document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.animated-button');

    if (button) {
        const isAdded = localStorage.getItem('GCAdded') === 'true';
        if (isAdded) {
            button.querySelector('.text').textContent = 'Remover da Minha Lista';
            button.setAttribute('data-added', 'true');
        }

        button.addEventListener('click', () => {
            const isAdded = button.getAttribute('data-added') === 'true';
            if (isAdded) {
                button.querySelector('.text').textContent = 'Adicionar à Minha Lista';
                button.setAttribute('data-added', 'false');
                localStorage.setItem('GCAdded', 'false');

                let myList = JSON.parse(localStorage.getItem('myList')) || [];
                myList = myList.filter(movie => movie.title !== 'Guerra Civil'); 
                localStorage.setItem('myList', JSON.stringify(myList));
            } else {
                button.querySelector('.text').textContent = 'Remover da Minha Lista';
                button.setAttribute('data-added', 'true');
                localStorage.setItem('GCAdded', 'true'); 

                const movie = {
                    title: 'Guerra Civil', 
                    image: 'imagens/guerracivil.jpg',
                    link: 'guerra_civil.html'
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