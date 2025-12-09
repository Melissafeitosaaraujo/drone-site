console.log("Site carregado com sucesso!");

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.video-item');

let index = 0;

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % items.length;
    carousel.style.transform = `translateX(${-index * 100}%)`
);

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    carousel.style.transform = `translateX(${-index * 100}%)`;
});