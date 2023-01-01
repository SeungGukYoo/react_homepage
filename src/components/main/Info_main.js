import React from 'react';

function InfoMain() {
  return (
    <section className='info_main scrollContent'>
      <div className='inner'>
        <article className='info_description'>
          <div>
            <div className='info_list'>
              <span className='on'>Vipp Chimney</span>
              <span>Vipp Shetter</span>
              <span>Vipp Loft</span>
            </div>
            <h1>
              <span>Take a look&nbsp;</span>
              <span>at out rooms</span>
            </h1>
            <p>
              <span>The hotel is small with just three locations, but </span>
              <span>more are in the making. Treat yourself to a </span>
              <span>getaway in the Vipp Shelter surrounded by </span>
              <span>Swedish nature, go for maximized urbanity at the </span>
              <span>Vipp Loft in Copenhagen, or check into a hisoric </span>
              <span>Copenhagen landmark at Vipp Chimney House.</span>
            </p>
            <button className='globalButton'>Read all facts</button>
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
