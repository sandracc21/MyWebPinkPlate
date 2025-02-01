// Event listener for the Show Map button
document.getElementById('show-map').addEventListener('click', function() {
    const mapContainer = document.getElementById('map');
    mapContainer.style.display = 'block'; // Show the map container
    initMap(); // Initialize the map
});

// Function to initialize the Google Map
function initMap() {
    const mapOptions = {
        center: { lat: 37.7749, lng: -122.4194 }, // Set the center of the map (San Francisco as an example)
        zoom: 10, // Set the zoom level
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions); // Create the map
}