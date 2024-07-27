fetch('https://jdn24.com/underconstruction/overlay.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.error('Error loading the overlay:', error));