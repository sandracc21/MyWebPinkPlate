// Function to toggle dropdown for menu sections
function toggleDropdown(section) {
    // Close other dropdowns
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(s => {
        if (s !== section) {
            s.classList.remove('active');
        }
    });
    // Toggle the clicked section
    section.classList.toggle('active');
}

// Function to submit the registration form
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show an alert instead of a popup
    alert("Registration Successful!");
});

// Event listeners for points buttons
document.getElementById("morePointsBtn").addEventListener("click", function() {
    alert("You can order a free meal! Go to the menu page!"); // Alert for more points
});

document.getElementById("lessPointsBtn").addEventListener("click", function() {
    alert("You don't have enough points."); // Alert for less points
});

// Fetch trends when the reveal button is clicked
document.getElementById('reveal-trends').addEventListener('click', function() {
    const trendsInfo = document.getElementById('trends-info');
    
    // Example alert for trends (you can replace this with actual data fetching)
    alert("Fetching food trends..."); // Alert to indicate fetching trends
});