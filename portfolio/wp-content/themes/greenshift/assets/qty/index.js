"use strict";
function GSPB_quantityInput(documentobj = document) {
    let quantityContainers = documentobj.getElementsByClassName('quantity');

    for (let i = 0; i < quantityContainers.length; i++) {
        let quantityContainer = quantityContainers[i];
        let quantityInput = quantityContainer.querySelector('input[type="number"]');

        // Create minus button
        let minusButton = document.createElement('button');
        minusButton.setAttribute('type', 'button');
        minusButton.classList.add('sub');
        minusButton.setAttribute('title', 'Down');
        minusButton.textContent = '-';
        quantityContainer.insertBefore(minusButton, quantityInput);

        // Create plus button
        let plusButton = document.createElement('button');
        plusButton.setAttribute('type', 'button');
        plusButton.setAttribute('title', 'Up');
        plusButton.classList.add('add');
        plusButton.textContent = '+';
        quantityContainer.appendChild(plusButton);

        let quantitydata = quantityInput.closest('form').querySelector('[data-quantity]');

        // Event listener for plus button
        plusButton.addEventListener('click', function () {
            let currentValue = parseInt(quantityInput.value);
            if (isNaN(currentValue)) {
                currentValue = 0;
            }
            quantityInput.value = currentValue + 1;
            if(quantitydata) quantitydata.setAttribute("data-quantity", currentValue + 1);
            quantityInput.dispatchEvent(new Event('change')); // Trigger change event
        });

        // Event listener for minus button
        minusButton.addEventListener('click', function () {
            let currentValue = parseInt(quantityInput.value);
            let currentMin = parseInt(quantityInput.getAttribute('min'));
            if (isNaN(currentValue)) {
                currentValue = currentMin;
            }
            if (currentValue > currentMin) {
                quantityInput.value = currentValue - 1;
                if(quantitydata) quantitydata.setAttribute("data-quantity", currentValue - 1);
                quantityInput.dispatchEvent(new Event('change')); // Trigger change event
            }
        });
    }
}
GSPB_quantityInput();