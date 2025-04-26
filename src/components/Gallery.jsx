// components/Gallery.jsx
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryImages = [
    {
      id: 1,
    //   src: '/images/gallery/gallery-1.jpg',
      alt: 'Classic car exhibition',
      caption: 'Classic car exhibition from our 2023 event'
    },
    {
      id: 2,
    //   src: '/images/gallery/gallery-2.jpg',
      alt: 'Car modification showcase',
      caption: 'Stunning modified vehicles on display'
    },
    {
      id: 3,
    //   src: '/images/gallery/gallery-3.jpg',
      alt: 'Award ceremony',
      caption: 'Best in Show award ceremony'
    },
    {
      id: 4,
    //   src: '/images/gallery/gallery-4.jpg',
      alt: 'Nighttime car display',
      caption: 'Evening showcase with dramatic lighting'
    },
    {
      id: 5,
    //   src: '/images/gallery/gallery-5.jpg',
      alt: 'Family activities',
      caption: 'Fun activities for the whole family'
    },
    {
      id: 6,
    //   src: '/images/gallery/gallery-6.jpg',
      alt: 'Charity presentation',
      caption: 'Presenting our charity donation from last years event'
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <h2 className="section-title">Event Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <p>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        {selectedImage && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-modal" onClick={closeModal}>&times;</span>
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <p>{selectedImage.caption}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;