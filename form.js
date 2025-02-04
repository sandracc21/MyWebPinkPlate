
document.querySelector('.submit-order-button').addEventListener('click', function() {
    const selectedRestaurant = document.querySelector('input[name="restaurant"]:checked');
    const selectedDish = document.querySelector('input[name="dish"]:checked');

    if (selectedRestaurant && selectedDish) {
        alert('Your order has been submitted!');
    } else {
        alert('Please select a restaurant and a dish.');
    }
});
