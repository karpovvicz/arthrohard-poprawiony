document.addEventListener('DOMContentLoaded', function() {
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll('section[id]');
    
    // Get all nav items with hash links
    const navItems = document.querySelectorAll('.nav-item a[href^="#"]');
    
    // Add click event listeners to nav items for smooth scrolling
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Function to update active nav item
    function updateActiveNavItem() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; // Adjust offset as needed
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            const navItem = document.querySelector(`.nav-item a[href="#${sectionId}"]`);
            
            if (navItem) {
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    navItem.parentElement.classList.add('active');
                } else {
                    navItem.parentElement.classList.remove('active');
                }
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', updateActiveNavItem);
    
    // Initial call to set active nav item on page load
    updateActiveNavItem();
}); 