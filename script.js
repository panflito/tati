const currentPage = window.location.pathname;

// Definir imágenes según la página
let imageFiles = [];

if (currentPage.includes("index.html") || currentPage === "/" || currentPage === "") {  
    // Si estamos en el Home (index.html o en la raíz)
    imageFiles = [
        '9C947413-469D-488A-8BDC-5B39E567D33A.jpeg',
        '0A16FC33-3749-45FA-BCAA-E7C00819E7C6.jpeg',
        '0B7BB1E0-2CCD-4A25-B5EB-F21B9120E601.jpeg',
        '43D997C4-8B61-4EDE-955F-923B733AB068.jpeg',
    ];
} else if (currentPage.includes("neotribal.html")) {  
    // Si estamos en la página neotribal.html
    imageFiles = [
    '43D997C4-8B61-4EDE-955F-923B733AB068.jpeg',
    '0B7BB1E0-2CCD-4A25-B5EB-F21B9120E601.jpeg',
    ];
    
} else if (currentPage.includes("japones.html")) {  
    // Si estamos en la página japones.html
    imageFiles = [
        '0A16FC33-3749-45FA-BCAA-E7C00819E7C6.jpeg',
        '0A16FC33-3749-45FA-BCAA-E7C00819E7C6.jpeg'
    ];
}
else if (currentPage.includes("modonoche.html")) {  
    // Si estamos en la página neotribal.html
    imageFiles = [
        '9C947413-469D-488A-8BDC-5B39E567D33A.jpeg',
        '0A16FC33-3749-45FA-BCAA-E7C00819E7C6.jpeg',
        '0B7BB1E0-2CCD-4A25-B5EB-F21B9120E601.jpeg',
        '43D997C4-8B61-4EDE-955F-923B733AB068.jpeg',
    ];
    
}
else if (currentPage.includes("ilustrativo.html")) {  
    // Si estamos en la página japones.html
    imageFiles = [
        '0A16FC33-3749-45FA-BCAA-E7C00819E7C6.jpeg',
        '0B7BB1E0-2CCD-4A25-B5EB-F21B9120E601.jpeg'
    ];
}
else if (currentPage.includes("diseno.html")) {  
    // Si estamos en la página japones.html
    imageFiles = [
        '0B7BB1E0-2CCD-4A25-B5EB-F21B9120E601.jpeg',
        '0A16FC33-3749-45FA-BCAA-E7C00819E7C6.jpeg'
    ];
}
else if (currentPage.includes("joyeria.html")) {  
    // Si estamos en la página japones.html
    imageFiles = [
        '0A16FC33-3749-45FA-BCAA-E7C00819E7C6.jpeg',
        '0B7BB1E0-2CCD-4A25-B5EB-F21B9120E601.jpeg'
    ];
}
else if (currentPage.includes("pintura.html")) {  
    // Si estamos en la página japones.html
    imageFiles = [
        '0A16FC33-3749-45FA-BCAA-E7C00819E7C6.jpeg',
        '0B7BB1E0-2CCD-4A25-B5EB-F21B9120E601.jpeg'
    ];
}

// Verificar si imageFiles tiene elementos antes de proceder con la creación del carrusel
if (imageFiles.length > 0) {
    // Seleccionar el contenedor del carrusel
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    // Crear y añadir las imágenes al contenedor
    imageFiles.forEach((fileName, index) => {
        const img = document.createElement('img');
        img.src = `assets/${fileName}`;
        img.alt = `Imagen ${index + 1}`;
        if (index === 0) {
            img.classList.add('active');
        }
        carouselContainer.appendChild(img);
    });

    // Obtener todas las imágenes
    const images = carouselContainer.querySelectorAll('img');

    // Definir descripciones según la imagen
    const descriptions = {
        '9C947413-469D-488A-8BDC-5B39E567D33A.jpeg': {
            title: 'MEGATRON',
            text: "Oleo sobre pintura 70x50', 2022."
        },
        '0A16FC33-3749-45FA-BCAA-E7C00819E7C6.jpeg': {
            title: 'FLOR',
            text: "Acrilico sobre lienzo 120x80', 2021."
        },
        '0B7BB1E0-2CCD-4A25-B5EB-F21B9120E601.jpeg': {
            title: 'TÍTULO 3',
            text: "Descripción de la imagen 3."
        },
        '43D997C4-8B61-4EDE-955F-923B733AB068.jpeg': {
            title: 'TÍTULO 4',
            text: "Descripción de la imagen 4."
        }
    };

    // Seleccionar el div rectangle
    const rectangle = document.querySelector('.rectangle');

    // Función para actualizar el contenido del div rectangle
    function updateRectangleContent(imageSrc) {
        const fileName = imageSrc.split('/').pop();
        const description = descriptions[fileName];
        if (description) {
            rectangle.querySelector('.opaco').textContent = description.title;
            rectangle.querySelector('p').textContent = description.text;
        }
    }

    // Función para mostrar la imagen actual
    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
        updateRectangleContent(images[index].src); // Actualizar contenido del div rectangle
    }

    // Evento para el botón anterior
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    // Evento para el botón siguiente
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Opcional: Añadir navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevButton.click();
        } else if (e.key === 'ArrowRight') {
            nextButton.click();
        }
    });
} else {
    console.error('No hay imágenes disponibles para el carrusel.');
}
