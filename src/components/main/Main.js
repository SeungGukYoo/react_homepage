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

  // const print = () => {
  //   console.log(mainRef.current);
  // };
  // useEffect(() => {
  //   window.addEventListener('resize', print);
  //   return () => {
  //     window.removeEventListener('resize', print);
  //   };
  // }, []);

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
