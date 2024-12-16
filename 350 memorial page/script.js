document.addEventListener("DOMContentLoaded", function () {
    const scrollToQnAButton = document.getElementById("scrollToQnA");
    const qaButton = document.querySelector(".qa-button");
    const qaContent = document.querySelector(".qa-content");

    scrollToQnAButton.addEventListener("click", function () {
        // Scroll smoothly to the Q&A section
        qaButton.scrollIntoView({ behavior: "smooth" });

        // Open the Q&A content if it's not already open
        if (!qaContent.classList.contains("show")) {
            qaContent.classList.add("show");
        }
    });

    // Existing Q&A toggle functionality
    qaButton.addEventListener("click", function () {
        qaContent.classList.toggle("show");
    });
});
// Modal functionality
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".card img");
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");
  
    // Open modal when an image is clicked
    images.forEach((image) => {
      image.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImage.src = image.src; // Set the modal image source
      });
    });
  
    // Close modal when the close button is clicked
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Close modal when clicking outside the image
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  