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
    const modalImageDisplay = document.getElementById('fullImageDisplay'); // The <img> element inside the modal

    // Selectors for elements that open the modal:
    const logoModalTriggers = document.querySelectorAll('.js-modal-trigger'); // For the header/footer logos
    const imageZoomTriggers = document.querySelectorAll('.js-zoom-trigger'); // For all the new proof images

    if (modal && closeButton && modalImageDisplay) {

        // --- A. Handle logo/static triggers (.js-modal-trigger) ---
        // These always show the default logo.png
        logoModalTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                modalImageDisplay.src = 'logo.png'; // Set default image
                modal.style.display = 'flex';
            });
        });

        // --- B. Handle proof image triggers (.js-zoom-trigger) ---
        // These dynamically set the image source
        imageZoomTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                // Get the source (src) of the image that was clicked
                const imageSource = trigger.getAttribute('src');

                // Set the modal's image source to the clicked image's source
                if (imageSource) {
                    modalImageDisplay.src = imageSource;
                    modal.style.display = 'flex'; // Show the modal
                }
            });
        });


        // Function to close the modal via the 'X' button
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Function to close the modal if the user clicks outside the image
        modal.addEventListener('click', (e) => {
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