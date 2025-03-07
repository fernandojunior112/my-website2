document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");

    // Select the menu icon and navigation menu
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.createElement("div");
    navMenu.classList.add("mobile-menu");

    // Menu content (for demonstration)
    navMenu.innerHTML = `
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    `;

    document.body.appendChild(navMenu);

    // Toggle menu visibility
    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });

    // Search Functionality
    const searchIcon = document.querySelector(".search-icon");
    searchIcon.addEventListener("click", function () {
        let query = prompt("Enter search term:");
        if (query) {
            alert("Searching for: " + query);
            // You can add real search functionality later.
        }
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
            navMenu.classList.remove("active"); // Close menu after clicking
        });
    });
});

