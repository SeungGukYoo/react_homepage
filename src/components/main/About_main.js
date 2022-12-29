import React from 'react';
import { Link } from 'react-router-dom';

function AboutMain() {
  return (
    <section className='about_main'>
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
            <Link to='/'>Book a Room</Link>
          </div>
        </article>
        <article className='about_image'>
          <img src={`${process.env.PUBLIC_URL}/images/about_image.jpg`} alt='room_Picture' />
          <ul>
            <li className='on'></li>
            <li></li>
            <li></li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default AboutMain;
