import React from 'react';

function GalleryMain(props) {
  return (
    <section className='gallery_main scrollContent'>
      <div className='inner'>
        <h1>
          <span>Our latest </span>
          <span>Instagrams</span>
        </h1>
        <p>Go to Instagram</p>
        <div className='wrap'>
          <article>
            <img src={`${process.env.PUBLIC_URL}/images/gallery_image1.jpg`} alt='' />
          </article>
          <article>
            <img src={`${process.env.PUBLIC_URL}/images/gallery_image2.jpg`} alt='' />
          </article>
          <article>
            <img src={`${process.env.PUBLIC_URL}/images/gallery_image3.jpg`} alt='' />
          </article>
          <article>
            <img src={`${process.env.PUBLIC_URL}/images/gallery_image4.jpg`} alt='' />
          </article>
          <article>
            <img src={`${process.env.PUBLIC_URL}/images/gallery_image5.jpg`} alt='' />
          </article>
          <article>
            <img src={`${process.env.PUBLIC_URL}/images/gallery_image6.jpg`} alt='' />
          </article>
        </div>
      </div>
    </section>
  );
}

export default GalleryMain;
