import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Anime from '../../asset/anime';

function AboutMain() {
  const slider = useRef(null);
  const nextSlide = () => {
    const panel = slider.current.children[0];
    new Anime(panel, {
      prop: 'margin-left',
      value: '-200%',
      duration: 500,
      callback: () => {
        panel.append(panel.firstElementChild);
        panel.style.marginLeft = '-100%';
      }
    });
  };
  const prevSlide = () => {
    const panel = slider.current.children[0];
    new Anime(panel, {
      prop: 'margin-left',
      value: '0%',
      duration: 500,
      callback: () => {
        panel.prepend(panel.lastElementChild);
        panel.style.marginLeft = '-100%';
      }
    });
  };

  const init = () => {
    const panel = slider.current.children[0];
    const lis = panel.querySelectorAll('li');
    const len = lis.length;

    panel.style.width = 100 * len + '%';
    lis.forEach((el) => (el.style.width = 100 / len + '%'));
    panel.prepend(panel.lastElementChild);
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <section className='about_main scrollContent'>
      <div className='inner'>
        <article className='about_description'>
          <div>
            <h1>
              About the <br />
              Vipp Hotel
            </h1>
            <p>
              At the Vipp Hotel, we invite you to experience our <br />
              philosophy of design in places out of the ordinary. <br />
              Out hotel is not like many others. Instead of having <br />
              all our rooms in one place, we offer a curated <br />
              selection of destinations for unique experiences.
            </p>
            <Link className='globalButton' to='/'>
              Book a Room
            </Link>
          </div>
        </article>
        <article className='about_image' ref={slider}>
          <ul className='slider'>
            <li className='imgBox'>
              <img src={`${process.env.PUBLIC_URL}/images/about_image1.jpg`} alt='room_Picture' />
            </li>
            <li className='imgBox'>
              <img src={`${process.env.PUBLIC_URL}/images/about_image2.jpg`} alt='room_Picture' />
            </li>
            <li className='imgBox'>
              <img src={`${process.env.PUBLIC_URL}/images/about_image3.jpg`} alt='room_Picture' />
            </li>
          </ul>
          <FontAwesomeIcon onClick={nextSlide} className='nextSlide' icon={faChevronLeft} />
          <FontAwesomeIcon onClick={prevSlide} className='rightSlide' icon={faChevronRight} />
        </article>
      </div>
    </section>
  );
}

export default AboutMain;
