function submitOrder() {
    const selectedRestaurant = document.querySelector('input[name="restaurant"]:checked');
    const selectedDish = document.querySelector('input[name="dish"]:checked');

    
    if (!selectedRestaurant || !selectedDish) {
        alert("Please select both a restaurant and a dish.");
        return; 
    }

    
    document.getElementById('orderPopup').classList.remove('hidden');

    
    alert("Order Submitted");
}