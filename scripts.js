// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal for Developer Info
let modal = document.getElementById("developerModal");
let btns = document.querySelectorAll(".developer-card");

btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        modal.style.display = "block";
        document.getElementById("developerDetails").innerHTML = 
            "Contact: +91 XXXXX XXXX<br>Address: XXXXXXXX, XXXXXX, West Bengal, India<br>Instagram: @XXXX_XXXX";
    });
});


document.getElementsByClassName("close-btn")[0].onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Header Visibility on Scroll
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    let header = document.getElementById("header");
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        header.style.top = "-80px"; // Hide header when scrolling down
    } else {
        header.style.top = "0"; // Show header when scrolling up
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
});


// Notification
document.addEventListener("DOMContentLoaded", function () {
    const downloadButtons = document.querySelectorAll(".cta-btn"); // Select all download buttons
    const modal = document.getElementById("downloadModal"); // Get modal
    const closeModal = document.querySelector(".close-btn"); // Get close button

    downloadButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent any default behavior
            modal.style.display = "block"; // Show the modal
        });
    });

    // Close modal when clicking the close button
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
