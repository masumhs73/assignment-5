document.getElementById('btn-dynamic')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        const randomColor = `rgb(${r}, ${g}, ${b})`;

        document.body.style.backgroundColor = randomColor;
    })