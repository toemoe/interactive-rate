function showWindow(id) {
    const main = document.querySelector('.main');
    main.style.display = 'none';

    const result = document.getElementById(id);
    result.style.display = 'block';
}