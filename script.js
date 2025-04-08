document.addEventListener("DOMContentLoaded", () => {
    const images = Array.from(document.querySelectorAll(".ilustrativas"));
    const imageUrls = images.map(img => img.src);

    images.forEach((img, index) => {
        img.addEventListener("click", () => openCarousel(index));
    });

    function openCarousel(startIndex) {
        const overlay = document.createElement("div");
        overlay.className = "carousel-overlay";

        const carousel = document.createElement("div");
        carousel.className = "carousel-inner";

        const img = document.createElement("img");
        img.src = imageUrls[startIndex];
        img.className = "carousel-img";

        const prev = document.createElement("button");
        prev.textContent = "<";
        prev.className = "carousel-btn prev";

        const next = document.createElement("button");
        next.textContent = ">";
        next.className = "carousel-btn next";

        const close = document.createElement("button");
        close.textContent = "X";
        close.className = "carousel-btn close";

        let currentIndex = startIndex;

        function updateImage() {
            img.src = imageUrls[currentIndex];
        }

        prev.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
            updateImage();
        });

        next.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % imageUrls.length;
            updateImage();
        });

        close.addEventListener("click", () => {
            overlay.remove();
        });

        carousel.appendChild(prev);
        carousel.appendChild(img);
        carousel.appendChild(next);
        carousel.appendChild(close);
        overlay.appendChild(carousel);
        document.body.appendChild(overlay);
    }
});
