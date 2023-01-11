import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Layout from '../common/Layout';
import Masonry from 'react-masonry-component';
import { useSelector } from 'react-redux';
import * as types from '../../redux/actionType';
import Modal from '../common/Modal';
function Gallery(props) {
  const [photos, setPhotos] = useState({});
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState({});
  const modal = useRef(null);
  // const key = '45c970bc3ee3b60b35d021e520358df0';
  // const secret = '341183f9b84def36';

  const masonryOptions = {
    transitionDuration: '0.5s'
  };
  const images = useSelector((store) => store.flickrReducer.flickr);

  useEffect(() => {
    setPhotos({ type: types.FLICKR.start });
  }, []);
  console.log(img);

  return (
    <>
      <Layout name={'Gallery'}>
        <Masonry options={masonryOptions} className='masonry_container'>
          {images.map((photo) => {
            const title =
              photo.title.length > 20 ? photo.title.substring(0, 18) + '..' : photo.title;
            const date = photo.datetaken.split(' ')[0];
            const year = date.split('-')[0];
            const month = date.split('-')[1];
            let custom = '';
            if (month === '3' || month === '4' || month === '5') custom = 'SPRING';
            if (month === '6' || month === '7' || month === '8') custom = 'SUMMER';
            if (month === '9' || month === '10' || month === '11') custom = 'AUTUMN';
            if (month === '12' || month === '1' || month === '2') custom = 'WINTER';
            return (
              <article
                key={photo.secret}
                onClick={() => {
                  setImg(photo);
                  return modal.current.open();
                }}
              >
                <div className='flickr_box'>
                  <div className='flickr_des'>
                    <h3>{title.length === 0 ? 'DEFAULT' : title}</h3>
                    <p>
                      <span>
                        <strong>CALANDER </strong>
                        {custom}&nbsp;
                        {year}
                      </span>
                    </p>
                  </div>
                  <div className='flickr_img'>
                    <img
                      src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
                      alt={photo.title}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </Masonry>
      </Layout>
      <Modal ref={modal}>
        <img
          src={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_b.jpg`}
          alt={img.title}
        />
      </Modal>
    </>
  );
}

export default Gallery;
