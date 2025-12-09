const mediaItems = document.querySelectorAll(
  '.album-item img, .album-item video'
);

let currentIndex = 0;
const lightbox = document.getElementById('lightbox');
const content = document.querySelector('.lightbox-content');

function openLightbox(index) {
  currentIndex = index;
  renderMedia();
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  lightbox.style.display = 'none';
  content.innerHTML = '';
}

function renderMedia() {
  content.innerHTML = '';

  const element = mediaItems[currentIndex].cloneNode(true);
  element.controls = true;
  content.appendChild(element);
}

function nextMedia() {
  currentIndex = (currentIndex + 1) % mediaItems.length;
  renderMedia();
}

function prevMedia() {
  currentIndex =
    (currentIndex - 1 + mediaItems.length) % mediaItems.length;
  renderMedia();
}

/* Eventos */
mediaItems.forEach((item, index) => {
  item.addEventListener('click', () => openLightbox(index));
});

document.querySelector('.close').onclick = closeLightbox;
document.querySelector('.right').onclick = nextMedia;
document.querySelector('.left').onclick = prevMedia;

/* ESC fecha */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextMedia();
  if (e.key === 'ArrowLeft') prevMedia();
});


document.querySelectorAll('.btn-principal').forEach(btn => {
    btn.addEventListener('click', () => {
        const texto = btn.textContent;
        btn.textContent = '✅ Download iniciado';
        setTimeout(() => btn.textContent = texto, 1800);
    });
});
