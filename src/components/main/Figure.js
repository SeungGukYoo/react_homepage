import React from 'react';

function Figure(props) {
  return (
    <section className='figure'>
      <div className='background'></div>
      <div className='inner'>
        <div className='figure_sub_title'>
          <p>ABOUT THE VIPP HOTEL</p>
        </div>
        <div className='figure_title'>
          <h1>An untraditional hotel</h1>
        </div>
        <div className='figure_description'>
          <p>Our rooms are spread out at various locations, so we do not</p>
        </div>
        <div className='figure_description'>
          <p>have a reception or a concierge. You won't find a 24-hour</p>
        </div>
        <div className='figure_description'>
          <p>lobby, a gym, daily housekeeping or fitness facilities.</p>
        </div>
      </div>
    </section>
  );
}

export default Figure;
