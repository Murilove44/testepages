document.addEventListener('DOMContentLoaded', () => {
    const myList = JSON.parse(localStorage.getItem('myList')) || [];
    const listContainer = document.getElementById('movie-list');

    if (myList.length > 0) {
        myList.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.innerHTML = `
                <a href="${movie.link}">
                    <p id="nomeFilme">${movie.title}</p>
                    <img src="${movie.image}" alt="${movie.title}" style="width: 450px; height: auto;">
                </a>
            `;
            listContainer.appendChild(movieElement);
        });
    } else {
        listContainer.innerHTML = '<p>Sua lista está vazia.</p>';
    }
});
