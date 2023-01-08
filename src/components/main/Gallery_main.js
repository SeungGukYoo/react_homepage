import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

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
  const ref = useRef(null);
  const articleRef = useRef(null);
  const [container, setContainer] = useState(0);
  const moveLeftArrow = () => {
    if (container > -1600) {
      ref.current.style.transform = `translateX(${container - articleRef.current}px)`;
      setContainer((prev) => (prev += -400));
    }
  };
  const moveRightArrow = () => {
    if (container < 0) {
      ref.current.style.transform = `translateX(${container + articleRef.current}px)`;
      setContainer((prev) => (prev += 400));
    }
  };
  useEffect(() => {
    const width = parseInt(getComputedStyle(articleRef.current)['width']);
    articleRef.current = width;
  }, []);
  return (
    <section className='gallery_main scrollContent'>
      <div className='inner'>
        <h1>
          <span>Our latest </span>
          <span>Instagrams</span>
        </h1>
        <p>Go to Instagram</p>
        <div className='wrap'>
          <div className='container' ref={ref}>
            {images.map((img, idx) => (
              <article key={idx} ref={articleRef}>
                <img src={process.env.PUBLIC_URL + img.source} alt='' />
              </article>
            ))}
          </div>
        </div>
        {container > -1600 && (
          <FontAwesomeIcon className='leftArrow' icon={faCaretLeft} onClick={moveLeftArrow} />
        )}
        {container < 0 && (
          <FontAwesomeIcon className='rightArrow' icon={faCaretRight} onClick={moveRightArrow} />
        )}
      </div>
    </section>
  );
}

export default GalleryMain;
