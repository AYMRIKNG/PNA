document.getElementById('toggle-menu').addEventListener('click', function () {
    document.querySelector('.main-menu').classList.remove('show');
    document.querySelector('.sub-menu').classList.toggle('show');
});
document.getElementById('untoggle-menu').addEventListener('click', function () {
    document.querySelector('.sub-menu').classList.remove('show');
    document.querySelector('.main-menu').classList.toggle('show');
});