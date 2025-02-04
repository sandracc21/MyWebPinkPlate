// Function to toggle dropdown for menu sections
function toggleDropdown(section) {
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(s => {
        if (s !== section) {
            s.classList.remove('active');
        }
    });
    
    section.classList.toggle('active');
}

// Function to submit the registration form
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    alert("Registration Successful!");
});


document.getElementById("morePointsBtn").addEventListener("click", function() {
    alert("You can order a free meal! Go to the menu page!"); 
});

document.getElementById("lessPointsBtn").addEventListener("click", function() {
    alert("You don't have enough points."); 
});