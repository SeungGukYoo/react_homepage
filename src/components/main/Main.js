import React, { useEffect, useRef } from 'react';
import { Scroll } from '../common/Scroll';
import Header from '../common/Header';
import AboutMain from './About_main';
import BannelMain from './Bannel_main';
import Figure from './Figure';
import GalleryMain from './Gallery_main';
import InfoMain from './Info_main';

function Main() {
  const itemHeigthArr = useRef([]);
  const mainRef = useRef(null);

  useEffect(() => {
    itemHeigthArr.current = Scroll(mainRef);
    window.addEventListener('resize', () => (itemHeigthArr.current = Scroll(mainRef)));
    return () => {
      window.removeEventListener('resize', Scroll);
    };
  }, []);

  return (
    <main ref={mainRef}>
      <Header type='main' />
      <Figure />
      <AboutMain />
      <BannelMain />
      <InfoMain />
      <GalleryMain />
    </main>
  );
}

export default Main;
