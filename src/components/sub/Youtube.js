import axios from 'axios';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Layout from '../common/Layout';

function About(props) {
  const [videos, setVideos] = useState([]);
  const [button, setButton] = useState('1');
  const btnRefList = useRef(null);

  const playId = 'PL8Yp2hhTedFZOl_wbDTw7Pmx9iAxk6A48';
  const url =
    'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL8Yp2hhTedFZOl_wbDTw7Pmx9iAxk6A48&maxResults=5&key=AIzaSyCzFsvPUv4oQBwHeCsYH1FxMueWv-GAiY8';

  const getPlayList = async () => {
    const json = await axios.get(url);
    setVideos(json.data.items);
  };

  const clickBtn = (e) => {
    if (e.target === e.currentTarget) return;
    if (button !== e.target.dataset.index) {
      setButton(e.target.dataset.index);
    }
  };

  useEffect(() => {
    console.log('ssss');
    getPlayList();
  }, []);
  return (
    <Layout name={'Youtube'}>
      <ul className='button' ref={btnRefList} onClick={clickBtn}>
        <li data-index='1' className={button === '1' ? 'on' : 'off'}>
          PART 1
        </li>
        <li data-index='2' className={button === '2' ? 'on' : 'off'}>
          PART 2
        </li>
        <li data-index='3' className={button === '3' ? 'on' : 'off'}>
          PART 3
        </li>
      </ul>

      <ul className='youtube_container'>
        {videos.map((video, idx) => {
          const title =
            video.snippet.title.length > 25
              ? video.snippet.title.substring(0, 25) + '...'
              : video.snippet.title;
          const des =
            video.snippet.description.length > 200
              ? video.snippet.description.substring(0, 200) + '...'
              : video.snippet.description;
          return (
            <li key={video.snippet.resourceId.videoId}>
              <p className='video_title'>{title}</p>
              <div className='thumbnail'>
                <img src={video.snippet.thumbnails.medium.url} alt='videoThumbnail' />
              </div>
              <div className='video_info'>
                <p className='video_des'>{des}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export default About;
