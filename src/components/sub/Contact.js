import { faComments, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import Layout from '../common/Layout';

function Contact(props) {
  const { kakao } = window;

  const mapContainer = useRef(null);

  const mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3
  };

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, mapOption);
  }, []);

  return (
    <Layout name={'Contact'}>
      <section className='container'>
        <div className='contact_info'>
          <article>
            <h2>Send a Message</h2>
            <p>
              A place where rare and unexpected pleasures are artfully woven into every stay and
              guests unlock unique and enriching moments.
            </p>
            <form action='none'>
              <div className='vaild'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' required />
              </div>
              <div>
                <label htmlFor='emal'>Email</label>
                <input type='email' name='email' id='email' />
              </div>
              <div>
                <label htmlFor='room'>Choice Room</label>
                <select name='room' id='room'>
                  <option value='etc'>Choice</option>
                  <option value='loft'>Vipp Loft</option>
                  <option value='shelter'>Vipp Shelter</option>
                  <option value='chimney'>Vipp Chimney</option>
                </select>
              </div>
              <div>
                <label htmlFor='phone'>Phone Number</label>
                <input type='text' name='phone' id='phone' />
              </div>
              <div>
                <label htmlFor='message'>Message</label>
                <textarea name='message' id='message' cols='30' rows='40'></textarea>
              </div>
            </form>
            <button type='submit' className='globalButton'>
              Submit
            </button>
          </article>
          <article>
            <div>
              <h2>Call us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique doloremque
                placeat fuga voluptatum nemo iste impedit cupiditate error.
              </p>
              <div className='iconInfoBox'>
                <div className='iconBox'>
                  <FontAwesomeIcon className='icon' icon={faPhone} />
                </div>
                <div className='infoBox'>
                  <span>+1 449-398-999</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h2>Visit Us</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique doloremque
                  placeat fuga voluptatum nemo iste impedit cupiditate error.
                </p>
                <div className='iconInfoBox'>
                  <div className='iconBox'>
                    <FontAwesomeIcon className='icon' icon={faLocationDot} />
                  </div>
                  <div className='infoBox'>
                    <span>1234 Divi St. #111 San Francisco. CA</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h2>Live Chat</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique doloremque
                  placeat fuga voluptatum nemo iste impedit cupiditate error.
                </p>
                <div className='iconInfoBox'>
                  <div className='iconBox'>
                    <FontAwesomeIcon className='icon' icon={faComments} />
                  </div>
                  <div className='infoBox'>
                    <span>Start Chat</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div id='map' className='kakaoMap' ref={mapContainer}></div>
      </section>
    </Layout>
  );
}

export default Contact;
