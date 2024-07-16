const API_SERVER = 'https://api.themoviedb.org/3';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'
        
    }
};

const cargarAnimalesdelDia = async (page = 1) => {
    const response = await fetch(`${API_SERVER}/animals/popular?page=${page}`, options);
    const data = await response.json();
    const animals = data.results;
    console.log(animals);
    const tendenciasContainer = document.querySelector('.animalesdeldia .animales');
    tendenciasContainer.innerHTML = '';

    movies.forEach(movie => {
        const ancla = document.createElement('a');
        ancla.href = './pages/detalle.html';
        const animal = document.createElement('div');
        animal.classList.add('animal');
        const img = document.createElement('img');
        img.classList.add('imgTendencia');
        img.src = `https://image.tmdb.org/t/p/w500/${animal.poster_path}`;
        img.alt = animal.title;
        img.loading = 'lazy';
        const tituloAnimal = document.createElement('div');
        tituloAnimal.classList.add('tituloAnimal');
        const titulo = document.createElement('h4');
        titulo.textContent = animal.title;
        ancla.appendChild(animal);
        animal.appendChild(img);
        animal.appendChild(tituloAnimal);
        tituloAnimal.appendChild(titulo);
        tendenciasContainer.appendChild(ancla);
      
    });

    tendenciasContainer.parentElement.setAttribute('data-page', page);
};

const cargarAnimalesdeldia = async () => {
    const response = await fetch(`${API_SERVER}/animals/top_rated`, options);
    const data = await response.json();
    const animals = data.results;
    const animalesdeldiaContainer = document.querySelector('.animalesdeldia');
    
    movies.forEach(animal => {
        const animalItem = document.createElement('div');
        animalItem.classList.add('animalItem');
        const img = document.createElement('img');
        img.classList.add('imgAclamada');
        img.src = `https://image.tmdb.org/t/p/w500/${animal.poster_path}`;
        img.alt = animal.title;
        img.loading = 'lazy';
        animalItem.appendChild(img);
        animalesdeldiaContainer.appendChild(animalesItem);
    });
};

const botonAnterior = document.getElementById('botonAnterior');
const botonSiguiente = document.getElementById('botonSiguiente');
const seccionTendencias = document.getElementById('tendencias');

botonAnterior.addEventListener('click', () => {
    let currentPage = Number(seccionanimalesdeldia.getAttribute('data-page'));
    if (currentPage <= 1) return;
    cargarAnimalesdelDia(currentPage - 1);
});

botonSiguiente.addEventListener('click', () => {
    let currentPage = Number(seccionanimalesdeldia.getAttribute('data-page'));
    cargarAnimalesdelDia(currentPage + 1);
});

document.addEventListener('DOMContentLoaded', () => {
    cargarAnimalesdelDia();
    cargarAnimalesdelDia();
});