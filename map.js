
document.getElementById('show-map').addEventListener('click', function() {
    const mapContainer = document.getElementById('map');
    mapContainer.style.display = 'block'; 
    initMap(); 
});


function initMap() {
    const mapOptions = {
        center: { lat: 41.3851, lng: 2.1734 },
        zoom: 10, 
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions); // Creation of map
}