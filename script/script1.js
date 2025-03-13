document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.animated-button');

    if (button) {
        const isAdded = localStorage.getItem('LoganAdded') === 'true';
        if (isAdded) {
            button.querySelector('.text').textContent = 'Remover da Minha Lista';
            button.setAttribute('data-added', 'true');
        }

        button.addEventListener('click', () => {
            const isAdded = button.getAttribute('data-added') === 'true';
            if (isAdded) {
                button.querySelector('.text').textContent = 'Adicionar à Minha Lista';
                button.setAttribute('data-added', 'false');
                localStorage.setItem('LoganAdded', 'false'); 

                let myList = JSON.parse(localStorage.getItem('myList')) || [];
                myList = myList.filter(movie => movie.title !== 'Logan');
                localStorage.setItem('myList', JSON.stringify(myList));
            } else {
                button.querySelector('.text').textContent = 'Remover da Minha Lista';
                button.setAttribute('data-added', 'true');
                localStorage.setItem('LoganAdded', 'true'); 

                const movie = {
                    title: 'Logan',
                    image: 'imagens/logan.jpg',
                    link: 'Logan.html'
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