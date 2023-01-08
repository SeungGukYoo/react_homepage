import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Layout from '../common/Layout';
import Masonry from 'react-masonry-component';

function Gallery(props) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const key = '45c970bc3ee3b60b35d021e520358df0';
  const secret = '341183f9b84def36';
  const baseUrl = 'https://www.flickr.com/services/rest/?';
  const trand = 'flickr.interestingness.getList';
  const flickr = async () => {
    const json = await axios.get(
      `${baseUrl}method=${trand}&api_key=${key}&per_page=20&extras=date_taken&format=json&nojsoncallback=1`
    );
    console.log(json.data.photos.photo);
    setPhotos(json.data.photos.photo);
  };

  const masonryOptions = {
    transitionDuration: '0.5s'
  };
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  // const imagesLoadedOptions = { background: '.my-bg-image-el' };

  useEffect(() => {
    flickr();
  }, []);

  return (
    <Layout name={'Gallery'}>
      {/* <div className='masonry_container'></div> */}
      <Masonry
        options={masonryOptions} // default {}
        breakpointCols={4}
        className='masonry_container'
      >
        {photos.map((photo) => {
          const title = photo.title.length > 20 ? photo.title.substring(0, 21) + '..' : photo.title;
          const date = photo.datetaken.split(' ')[0];
          return (
            <article>
              <div key={photo.secret} className='flickr_box'>
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
