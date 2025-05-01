const buttons = document.querySelectorAll('.rate_button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach((btn) => btn.classList.remove('selected'));

        button.classList.add('selected');
    });
});

function showWindow(id) {
    const main = document.querySelector('.main');
    main.style.display = 'none';

    const result = document.getElementById(id);
    result.style.display = 'block';
}

function checkScore(id) {
    const scoreText = document.getElementById('scoreText');
    scoreText.textContent = 'You selected ' + id + ' out of 5';
}

