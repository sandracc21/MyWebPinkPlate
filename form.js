function submitOrder() {
    const selectedRestaurant = document.querySelector('input[name="restaurant"]:checked');
    const selectedDish = document.querySelector('input[name="dish"]:checked');

    // Check if both a restaurant and a dish are selected
    if (!selectedRestaurant || !selectedDish) {
        alert("Please select both a restaurant and a dish.");
        return; // Exit the function if not both are selected
    }

    // Show the order submitted popup
    document.getElementById('orderPopup').classList.remove('hidden'); // Show the popup

    // Alert the user that the order has been submitted
    alert("Order Submitted");
}

// Function to close the popup
function closePopup() {
    document.getElementById('orderPopup').classList.add('hidden'); // Hide the popup
}

// Event listener for closing the popup
document.getElementById('closePopup').addEventListener('click', closePopup);