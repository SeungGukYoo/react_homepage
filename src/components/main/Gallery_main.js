import React from 'react';

function GalleryMain(props) {
  const images = [
    {
      source: '/images/gallery_image1.jpg'
    },
    {
      source: '/images/gallery_image2.jpg'
    },
    {
      source: '/images/gallery_image3.jpg'
    },
    {
      source: '/images/gallery_image4.jpg'
    },
    {
      source: '/images/gallery_image5.jpg'
    },
    {
      source: '/images/gallery_image6.jpg'
    }
  ];
  return (
    <section className='gallery_main scrollContent'>
      <div className='inner'>
        <h1>
          <span>Our latest </span>
          <span>Instagrams</span>
        </h1>
        <p>Go to Instagram</p>
        <div className='wrap'>
          {images.map((img, idx) => (
            <article key={idx}>
              <img src={process.env.PUBLIC_URL + img.source} alt='' />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryMain;
