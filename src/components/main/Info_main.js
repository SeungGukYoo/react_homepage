import React from 'react';

function InfoMain() {
  return (
    <section className='info_main'>
      <div className='inner'>
        <article className='info_description'>
          <div>
            <div className='info_list'>
              <span className='on'>Vipp Chimney</span>
              <span>Vipp Shetter</span>
              <span>Vipp Loft</span>
            </div>
            <h1>
              Take a look <br /> at out rooms
            </h1>
            <p>
              The hotel is small with just three locations, but <br />
              more are in the making. Treat yourself to a <br />
              getaway in the Vipp Shelter surrounded by <br />
              Swedish nature, go for maximized urbanity at the <br />
              Vipp Loft in Copenhagen, or check into a hisoric <br />
              Copenhagen landmark at Vipp Chimney House.
            </p>
            <button>Read all facts</button>
          </div>
        </article>
        <article className='info_image'>
          <img src={`${process.env.PUBLIC_URL}/images/info_image.jpg`} alt='room_info' />
        </article>
      </div>
    </section>
  );
}

export default InfoMain;
