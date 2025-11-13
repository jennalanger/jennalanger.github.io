/*
===================================
WAYPOINT LOGIC WEBSITE JAVASCRIPT
===================================
This file handles interactive features:
- Smooth scrolling
- Navbar scroll effects
- Mobile menu (if you add one later)
*/

// Wait for the page to fully load before running scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // ================================
    // SMOOTH SCROLLING FOR NAV LINKS
    // Makes clicking navigation links scroll smoothly to sections
    // ================================
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevents default jump behavior
            
            // Get the target section ID from the link's href
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate offset for fixed navbar (so content isn't hidden behind it)
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                // Smooth scroll to the target position
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    // ================================
    // NAVBAR BACKGROUND ON SCROLL
    // Changes navbar appearance when scrolling
    // ================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        // Check if page is scrolled more than 100 pixels
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    
    // ================================
    // FADE IN ANIMATION ON SCROLL
    // Optional: Animate elements as they come into view
    // Uncomment the code below to enable this feature
    // ================================
    
    /*
    // Create an Intersection Observer to watch for elements entering viewport
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    */
    
    
    // ================================
    // LOG MESSAGE (for learning)
    // Shows that JavaScript is working
    // ================================
    console.log('Waypoint Logic website loaded successfully! 🏔️');
    console.log('Current scroll position:', window.scrollY);
    
    // Log when user scrolls (helpful for debugging)
    window.addEventListener('scroll', function() {
        // Uncomment the line below to see scroll position in console
        // console.log('Scroll Y:', window.scrollY);
    });
    
});


// ================================
// ADDITIONAL FUNCTIONS
// Add your own custom JavaScript functions below
// ================================

/**
 * Example: Get current year for copyright
 * You can use this in your footer by adding:
 * <span id="current-year"></span> in your HTML
 */
function updateCopyrightYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Call the function when page loads
// updateCopyrightYear();


/**
 * Example: Form submission handler
 * Use this if you add a contact form later
 */
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    
    // You would typically send this data to a server here
    // For now, just show a success message
    alert('Thank you for your message! (This is a demo)');
}


/**
 * Example: Toggle mobile menu
 * Use this if you want to add a hamburger menu for mobile
 */
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}


// ================================
// HELPFUL TIPS FOR LEARNING
// ================================

/*
COMMON JAVASCRIPT CONCEPTS USED HERE:

1. document.querySelector() - Selects ONE element from the page
   Example: document.querySelector('.navbar')
   
2. document.querySelectorAll() - Selects ALL matching elements
   Example: document.querySelectorAll('a[href^="#"]')
   
3. addEventListener() - Listens for events (clicks, scrolls, etc.)
   Example: element.addEventListener('click', function() { ... })
   
4. classList - Adds/removes CSS classes
   Example: element.classList.add('scrolled')
   
5. Arrow functions - Modern way to write functions
   Example: () => { ... } instead of function() { ... }

WANT TO LEARN MORE?
- MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- JavaScript.info: https://javascript.info/
- Practice in browser console (F12 or right-click > Inspect)
*/
