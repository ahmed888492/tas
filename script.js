let menubar = document.querySelector('.menu');
let bar = document.getElementById('bar');
bar.addEventListener('click', () => {
    menubar.classList.toggle('hide');
});