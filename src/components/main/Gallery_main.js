import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

function GalleryMain() {
  const flickr = useRef(null);
  const ref = useRef(null);
  const articleRef = useRef(null);
  const articleWidth = useRef(null);

  const containerWidth = useRef(null);
  const [container, setContainer] = useState(0);

  const moveLeftArrow = () => {
    let num = container;
    if (num + articleWidth.current > 0) return;
    ref.current.style.transform = `translateX(${num + articleWidth.current}px)`;
    setContainer((prev) => (prev += articleWidth.current));
  };
  const moveRightArrow = () => {
    let num = container;

    console.log(containerWidth.current);
    if (num + articleWidth.current < -containerWidth.current) return;
    ref.current.style.transform = `translateX(${num - articleWidth.current}px)`;
    setContainer((prev) => (prev -= articleWidth.current));
  };

  const resizeWidth = () => {
    if (1179 < window.innerWidth) {
      containerWidth.current = parseInt(getComputedStyle(ref.current)['width']);
      articleWidth.current = 450;
    }
    if (570 < window.innerWidth && 1179 > window.innerWidth) {
      containerWidth.current = parseInt(getComputedStyle(ref.current)['width']);
      articleWidth.current = 250;
    }
    if (window.innerWidth < 570) {
      containerWidth.current = parseInt(getComputedStyle(ref.current)['width']) + 150;
      articleWidth.current = 150;
    }
  };

  flickr.current = useSelector((store) => store.flickrReducer.flickr);

  useEffect(() => {
    resizeWidth();
    window.addEventListener('resize', resizeWidth);
    return () => {
      window.removeEventListener('resize', resizeWidth);
    };
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
            {flickr.current.map((img, idx) => {
              if (idx > 7) return null;
              return (
                <article key={idx} ref={articleRef}>
                  <img
                    src={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_m.jpg`}
                    alt=''
                  />
                </article>
              );
            })}
          </div>
        </div>

        <FontAwesomeIcon className='leftArrow off' icon={faCaretLeft} onClick={moveLeftArrow} />

        <FontAwesomeIcon className='rightArrow on' icon={faCaretRight} onClick={moveRightArrow} />
      </div>
    </section>
  );
}

export default GalleryMain;
