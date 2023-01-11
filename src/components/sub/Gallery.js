import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Layout from '../common/Layout';
import Masonry from 'react-masonry-component';
import { useSelector } from 'react-redux';
import * as types from '../../redux/actionType';
function Gallery(props) {
  const [photos, setPhotos] = useState({});
  const [loading, setLoading] = useState(false);
  // const key = '45c970bc3ee3b60b35d021e520358df0';
  // const secret = '341183f9b84def36';

  const masonryOptions = {
    transitionDuration: '0.5s'
  };
  const images = useSelector((store) => store.flickrReducer.flickr);

  useEffect(() => {
    setPhotos({ type: types.FLICKR.start });
  }, []);

  return (
    <Layout name={'Gallery'}>
      <Masonry options={masonryOptions} className='masonry_container'>
        {images.map((photo) => {
          const title = photo.title.length > 20 ? photo.title.substring(0, 21) + '..' : photo.title;
          const date = photo.datetaken.split(' ')[0];
          return (
            <article key={photo.secret}>
              <div className='flickr_box'>
                <img
                  src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
                  alt={photo.title}
                />
                <p>
                  <span>{date}</span>
                  <span>{title}</span>
                </p>
              </div>
            </article>
          );
        })}
      </Masonry>
    </Layout>
  );
}

export default Gallery;
