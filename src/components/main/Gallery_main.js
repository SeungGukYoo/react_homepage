import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function GalleryMain(props) {
  const flickr = useRef(null);
  const ref = useRef(null);
  const articleRef = useRef(null);
  const articleWidth = useRef(null);
  const containerWidth = useRef(null);
  const [container, setContainer] = useState(0);

  const moveLeftArrow = () => {
    let num = container;
    if (num + 410 > 0) return;
    ref.current.style.transform = `translateX(${num + 410}px)`;
    setContainer((prev) => (prev = prev + 410));
  };
  const moveRightArrow = () => {
    let num = container;
    if (num - 410 < -containerWidth.current * 4) return;
    ref.current.style.transform = `translateX(${num - 410}px)`;
    setContainer((prev) => (prev = prev - 410));
  };

  const resizeWidth = () => {
    containerWidth.current = parseInt(getComputedStyle(ref.current)['width']);

    console.log(containerWidth.current);
  };

  flickr.current = useSelector((store) => store.flickrReducer.flickr);
  if (flickr.current.length > 0) {
    // articleWidth.current = parseInt(getComputedStyle(articleRef.current)['width']);
  }

  useEffect(() => {
    resizeWidth();
    window.addEventListener('resize', resizeWidth);
    //
    return () => {
      window.removeEventListener('resize', resizeWidth);
    };
  }, []);
  useEffect(() => {
    if (articleWidth.current === null) return;
    articleWidth.current = getComputedStyle(articleRef.current)['width'];
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
            {flickr.current.map((img, idx) => (
              <article key={idx} ref={articleRef}>
                <img
                  src={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_m.jpg`}
                  alt=''
                />
              </article>
            ))}
          </div>
        </div>

        <FontAwesomeIcon className='leftArrow off' icon={faCaretLeft} onClick={moveLeftArrow} />

        <FontAwesomeIcon className='rightArrow on' icon={faCaretRight} onClick={moveRightArrow} />
      </div>
    </section>
  );
}

export default GalleryMain;
