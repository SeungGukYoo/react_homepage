import React from 'react';
import Header from '../common/Header';
import AboutMain from './About_main';
import BannelMain from './Bannel_main';
import Figure from './Figure';
import GalleryMain from './Gallery_main';
import InfoMain from './Info_main';

function Main({ openState }) {
  return (
    <main>
      <Header type='main' openState={openState} />
      <Figure />
      <AboutMain />
      <BannelMain />
      <InfoMain />
      <GalleryMain />
    </main>
  );
}

export default Main;
