import React, { useRef, useState } from 'react';
import FirstInfo from './InfoPage/first_info';
import SecondInfo from './InfoPage/second_info';
import ThirdInfo from './InfoPage/third_info';

function InfoMain() {
  const [showBox, setShowBox] = useState(true);
  const listBox = useRef('1');

  const showInfo = (e) => {
    setShowBox(false);
    const delay = setTimeout(() => {
      listBox.current = e.target.dataset.type;
      setShowBox(true);
      return clearTimeout(delay);
    }, 500);
  };
  return (
    <section className='info_main scrollContent'>
      <div className='inner'>
        <article className='info_description'>
          <div>
            <div className='info_list'>
              <span
                data-type='1'
                className={`${listBox.current === '1' ? 'on' : 'off'}`}
                onClick={showInfo}
              >
                Vipp Chimney
              </span>
              <span
                data-type='2'
                className={`${listBox.current === '2' ? 'on' : 'off'}`}
                onClick={showInfo}
              >
                Vipp Shetter
              </span>
              <span
                data-type='3'
                className={`${listBox.current === '3' ? 'on' : 'off'}`}
                onClick={showInfo}
              >
                Vipp Loft
              </span>
            </div>
            <div className={`infoBox ${showBox ? 'on' : 'off'}`}>
              {listBox.current === '1' && <FirstInfo />}
              {listBox.current === '2' && <SecondInfo />}
              {listBox.current === '3' && <ThirdInfo />}
            </div>
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
