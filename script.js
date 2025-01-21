// Show/Hide Payment Method Fields Based on Selected Payment Method
const paymentMethodSelect = document.getElementById('paymentMethod');
const creditCardFields = document.getElementById('creditCardFields');
const bankTransferFields = document.getElementById('bankTransferFields');

paymentMethodSelect.addEventListener('change', () => {
    if (paymentMethodSelect.value === 'creditCard') {
        creditCardFields.style.display = 'block';
        bankTransferFields.style.display = 'none';
    } else if (paymentMethodSelect.value === 'bankTransfer') {
        creditCardFields.style.display = 'none';
        bankTransferFields.style.display = 'block';
    }
});

// Initialize the payment method form (default to showing credit card)
paymentMethodSelect.dispatchEvent(new Event('change'));

// Show the custom payment form when the "Own It" or "Own Them" button is clicked
const simpleCartQuantity = document.querySelector('.simpleCart_quantity');

// Set the "Own It" or "Own Them" button text based on the number of items in the cart
const updateOwnButtonText = () => {
    const itemCount = parseInt(simpleCartQuantity.innerText) || 0;
};

// Update button text when the cart quantity changes (can be hooked to your cart system)
updateOwnButtonText();
