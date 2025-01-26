// Modal functionality
const modal = document.getElementById("contactModal");
//const contactButtons = document.querySelectorAll(".cta-button.secondary");
const span = document.getElementsByClassName("close")[0];

// Open modal when contact button is clicked
// contactButtons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//         modal.display = "block";
//     });
// });

// Close modal when clicking the X
span.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Copy email function
function copyEmail() {
    const emailInput = document.getElementById("emailInput");
    const copyMessage = document.getElementById("copyMessage");
    const copyButton = document.getElementById("copyButton");
    
    emailInput.select();
    emailInput.setSelectionRange(0, 99999); // For mobile devices
    
    navigator.clipboard.writeText(emailInput.value)
        .then(() => {
            copyMessage.textContent = "Email copied to clipboard!";
            copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
            
            setTimeout(() => {
                copyMessage.textContent = "";
                copyButton.innerHTML = '<i class="far fa-copy"></i> Copy Email';
            }, 2000);
        })
        .catch(err => {
            copyMessage.textContent = "Failed to copy email. Please try again.";
        });
}
