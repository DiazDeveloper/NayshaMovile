document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const btnOpen = document.getElementById('btn-open');
    const btnReset = document.getElementById('btn-reset');

    btnOpen.addEventListener('click', () => {
        envelope.classList.add('open');
    });

    btnReset.addEventListener('click', () => {
        envelope.classList.remove('open');
    });

    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
    });
});