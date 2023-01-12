import { faComments, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';
import ContactForm from './Contact_form';

function ContactInfo() {
  return (
    <div className='contact_info'>
      <ContactForm />
      <article>
        <div>
          <h2>Call us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique doloremque placeat
            fuga voluptatum nemo iste impedit cupiditate error.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique doloremque placeat
              fuga voluptatum nemo iste impedit cupiditate error.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique doloremque placeat
              fuga voluptatum nemo iste impedit cupiditate error.
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
  );
}

export default memo(ContactInfo);
