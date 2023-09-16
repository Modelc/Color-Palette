function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generatePalette() {
    const colors = document.querySelectorAll('.palette div');
    colors.forEach(colorDiv => {
        const randomColor = generateRandomColor();
        colorDiv.style.backgroundColor = randomColor;
        colorDiv.innerText = randomColor;
    });
}
