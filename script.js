AOS.init({
    duration: 1000, // Duration of animation (in ms)
    once: true,     // Whether animation should happen only once
    easing: 'ease-in-out', // Default easing function
});

document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------------------
    // 1. CTA Pulse Animation
    // ------------------------------------------------
    const ctaButtonHeader = document.getElementById('ctaButtonHeader');
    if (ctaButtonHeader) {
        ctaButtonHeader.classList.add('pulsing');
    }

    // ------------------------------------------------
    // 2. Full Image Modal Functionality
    // ------------------------------------------------
    const modal = document.getElementById('fullImageModal');
    const closeButton = document.querySelector('.close-button');
    const modalTriggers = document.querySelectorAll('.js-modal-trigger'); // New selector

    if (modal && closeButton) {

        // --- NEW: Function to open the modal when clicking any element with the trigger class ---
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault(); // Stop the link from navigating anywhere
                modal.style.display = 'flex'; // Show the modal
            });
        });

        // Function to close the modal via the 'X' button
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Function to close the modal if the user clicks outside the image
        modal.addEventListener('click', (e) => {
            // Check if the click was directly on the modal background itself, not the image or button
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Function to close the modal via the Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                modal.style.display = 'none';
            }
        });
    }
});