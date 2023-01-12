import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className='footer'>
      <div className='inner'>
        <h1>vipp</h1>
        <div className='wrap'>
          <article>
            <ul>
              <li>
                <span>The company</span>
              </li>
              <li>
                <span>About</span>
              </li>
              <li>
                <span>Stories</span>
              </li>
              <li>
                <span>Press</span>
              </li>
              <li>
                <span>Reservations</span>
              </li>
              <li>
                <span>Legal</span>
              </li>
              <li>
                <span>Legal Notice</span>
              </li>
              <li>
                <span>Work With Us</span>
              </li>
              <li>
                <span>Cancel reservation</span>
              </li>
              <li>
                <span>Lost and Found</span>
              </li>
              <li>
                <span>Support</span>
              </li>
              <li>
                <span>FAQ</span>
              </li>
              <li>
                <span>Reservations</span>
              </li>
              <li>
                <span>info@vipp.com</span>
              </li>
              <li>
                <span>+1 449 398 999</span>
              </li>
            </ul>
          </article>
          <article>
            <h2>Newsletter</h2>
            <input type='text' placeholder='Enter your e-mail address' />
            <button className='globalButton'>Sign up</button>
          </article>
        </div>
        <article className='terms'>
          <ul className='terms_left'>
            <li>Trems and Gontitions</li>
            <li>Privacy Policy</li>
            <li>Trademark and Copyright</li>
          </ul>
          <p>&copy; 2023 Vipp. All rights reserved.</p>
          <ul className='terms_right'>
            <li>Find us on</li>
            <li>
              <FontAwesomeIcon className='icon' icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon className='icon' icon={faFacebookF} />
            </li>
            <li>
              <FontAwesomeIcon className='icon' icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon className='icon' icon={faYoutube} />
            </li>
          </ul>
        </article>
      </div>
    </footer>
  );
}

export default Footer;
