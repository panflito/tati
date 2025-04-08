// Configuración de galerías
const galleries = {
  ilustrativo_japones: [
    '8BA5576F-0CF5-49AE-A589-CC638523A1A6.jpeg',
    '9B93290E-A69F-4F66-B0EF-27336C3E83E.jpeg',
    '40B3EFD0-8CB7-49F4-A94C-A058B6EEA844.jpeg',
    '065EA403-AF71-42F5-8632-F0D5360FAEBC.jpeg',
    '15061CA9-16E0-4074-8B68-547FB86821E.jpeg',
    '1746066D-E334-431F-B123-D62D00153F10.jpeg',
    '1413752O-FC74-4B86-9DD5-AC93F0B4CB7F.jpeg',
    '20230327_173015.jpg',
    '20230414_144630.jpg',
    '20230608_181950.mp4',
    '20230616_214905.jpg',
    '20230704_182043.jpg',
    '20231023_182213.jpg',
    '20240701_201015.jpg',
    'B1A7C864-084B-49A2-8D7B-33024190875E.jpeg',
    'C8D92991-36A5-4286-A841-38DA175A5BAC.jpeg',
    'E60A0F07-428D-46BD-B503-C5425EBFDA02.jpeg',
    'F6C4B471-5867-4D86-B939-F9430B8553D.jpeg',
    'F74EBF2B-90B6-4B95-82C0-00CAB4A482FB.png'
  ],
  neotribal: [
    '20230313_183012.jpg',
    'A8F2F182-2EA9-4D3D-90FD-67DD7877D1BE.jpeg',
  ]
};

// Función para inicializar una galería
function initializeGallery(galleryName, gallerySelector) {
  const galleryFiles = galleries[galleryName];
  const gallerySection = document.querySelector(gallerySelector);

  galleryFiles.forEach(file => {
    const fileExtension = file.split('.').pop().toLowerCase();
    let element;

    if (fileExtension === 'mp4') {
      element = document.createElement('video');
      element.controls = true;
    } else {
      element = document.createElement('img');
    }

    element.src = `assets/tatuajes/${galleryName}/${file}`;
    element.alt = file;
    gallerySection.appendChild(element);
  });

  setupCarousel(galleryName, gallerySelector);
}

// Función para configurar el carrusel
function setupCarousel(galleryName, gallerySelector) {
  const galleryFiles = galleries[galleryName];
  const galleryItems = document.querySelectorAll(`${gallerySelector} img, ${gallerySelector} video`);
  let currentIndex = 0;

  const carouselOverlay = document.createElement('div');
  carouselOverlay.classList.add('carousel-overlay');
  carouselOverlay.innerHTML = `
    <div class="carousel-container">
      <button class="close-button">&times;</button>
      <button class="prev">&lt;</button>
      <div class="carousel-slide"></div>
      <button class="next">&gt;</button>
    </div>
  `;
  document.body.appendChild(carouselOverlay);

  const carouselSlide = carouselOverlay.querySelector('.carousel-slide');
  const closeButton = carouselOverlay.querySelector('.close-button');
  const prevButton = carouselOverlay.querySelector('.prev');
  const nextButton = carouselOverlay.querySelector('.next');

  // Agregar imágenes al carrusel
  galleryFiles.forEach(file => {
    const fileExtension = file.split('.').pop().toLowerCase();
    let element;

    if (fileExtension === 'mp4') {
      element = document.createElement('video');
      element.controls = true;
    } else {
      element = document.createElement('img');
    }

    element.src = `assets/tatuajes/${galleryName}/${file}`;
    element.alt = file;
    element.classList.add('carousel-item');
    carouselSlide.appendChild(element);
  });

  // Mostrar el carrusel al hacer clic en una imagen
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
      carouselOverlay.style.display = 'flex';
    });
  });

  // Actualizar el carrusel para mostrar la imagen/video actual
  function updateCarousel() {
    const items = carouselSlide.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
      item.style.display = index === currentIndex ? 'block' : 'none';
    });
  }

  // Navegar en el carrusel
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryFiles.length) % galleryFiles.length;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryFiles.length;
    updateCarousel();
  });

  // Cerrar el carrusel
  closeButton.addEventListener('click', () => {
    carouselOverlay.style.display = 'none';
  });
}

// Inicializar las galerías
initializeGallery('ilustrativo_japones', '.gallery-ilustrativo');
initializeGallery('neo_tribal', '.gallery-neo-tribal');