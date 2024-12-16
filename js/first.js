// Add event listener for the 'Show More' / 'Show Less' button
document.getElementById('showMoreBtn').addEventListener('click', function() {
    // Get all the hidden images
    const moreImages = document.querySelectorAll('.more-images');
    
    // Toggle visibility of the hidden images
    moreImages.forEach(function(image) {
        if (image.style.display === 'none') {
            image.style.display = 'block';  // Show the image
        } else {
            image.style.display = 'none';  // Hide the image
        }
    });

    // Change the button text based on the visibility of the images
    if (this.textContent === 'Show More') {
        this.textContent = 'Show Less';  // Change to Show Less
    } else {
        this.textContent = 'Show More';  // Change back to Show More
    }
});
function openImage(src) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = src;

    // Add slow-motion effect (fade-in)
    modalImage.style.opacity = 0;
    setTimeout(() => {
        modalImage.style.transition = "opacity 1s ease-in-out";
        modalImage.style.opacity = 1;
    }, 10);
}

// Function to load more images
function loadMoreImages(galleryId) {
    const moreImages = document.querySelectorAll(`#imageGallery${galleryId} .more-btn`);
    moreImages.forEach(image => {
        image.style.display = 'block';
    });
    document.getElementById(`moreViewButton${galleryId}`).style.display = 'none';
    document.getElementById(`lessViewButton${galleryId}`).style.display = 'inline';
}

// Function to load less images
function loadLessImages(galleryId) {
    const moreImages = document.querySelectorAll(`#imageGallery${galleryId} .more-btn`);
    moreImages.forEach(image => {
        image.style.display = 'none';
    });
    document.getElementById(`moreViewButton${galleryId}`).style.display = 'inline';
    document.getElementById(`lessViewButton${galleryId}`).style.display = 'none';
}

// Function to handle next image in the modal (if needed)
function nextImage() {
    const modalImage = document.getElementById('modalImage');
    let currentIndex = parseInt(modalImage.src.split('/').pop().split('.')[0]);
    let nextIndex = (currentIndex % 30) + 1; // Loop back after image 30
    modalImage.src = `images/ag_icar_2023/${nextIndex}.JPG`;
}