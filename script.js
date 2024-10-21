function openEnvelope() {
    const flap = document.querySelector('.flap');
    const message = document.getElementById('message');

    flap.style.transform = 'rotateX(-180deg)';
    message.style.display = 'block';
}
