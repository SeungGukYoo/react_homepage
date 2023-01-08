import { faChevronDown, faL } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  const [show, setShow] = useState(false);
  const btnInfo = useRef([
    {
      playId: 'PL8Yp2hhTedFZOl_wbDTw7Pmx9iAxk6A48',
      maxResult: 18
    },
    {
      playId: 'PL8Yp2hhTedFaB2O-x07LTTeScBKQkkKSb',
      maxResult: 24
    },
    {
      playId: 'PL8Yp2hhTedFYamvuIbGJjdF_YI_nZ2vf-',
      maxResult: 15
    }
  ]);
  const count = useRef(6);

  const getPlayList = async (btnInfo) => {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${btnInfo.playId}&maxResults=${count.current}&key=AIzaSyCzFsvPUv4oQBwHeCsYH1FxMueWv-GAiY8`;
    const json = await axios.get(url);
    setVideos(json.data.items);
    setTimeout(() => {
      setShow(true);
    }, 500);
  };

  const clickBtn = (e) => {
    if (e.target === e.currentTarget) return;
    if (button !== e.target.dataset.index) {
      console.log('clickBtn');
      count.current = 6;
      setButton(e.target.dataset.index);
      setShow(false);
      getPlayList(btnInfo.current[parseInt(e.target.dataset.index - 1)]);
    }
  };

  const moreLoad = () => {
    if (count === btnInfo.current[parseInt(button) - 1].maxResult) return;
    console.log('moreload');
    count.current += 6;
    getPlayList(btnInfo.current[parseInt(button) - 1]);
  };

  useEffect(() => {
    setShow(false);
    getPlayList(btnInfo.current[parseInt(button) - 1]);
  }, [btnInfo]);
  return (
    <Layout name={'Youtube'}>
      <ul className='button' ref={btnRefList} onClick={clickBtn}>
        <li data-index='1' className={button === '1' ? 'on' : 'off'}>
          Hotel
        </li>
        <li data-index='2' className={button === '2' ? 'on' : 'off'}>
          Attraction
        </li>
        <li data-index='3' className={button === '3' ? 'on' : 'off'}>
          Food
        </li>
      </ul>

      <ul className={`youtube_container ${show === true ? 'on' : 'off'}`}>
        {videos.map((video) => {
          const title =
            video.snippet.title.length > 25
              ? video.snippet.title.substring(0, 25) + '...'
              : video.snippet.title;
          let des =
            video.snippet.description.length > 200
              ? video.snippet.description.substring(0, 200) + '...'
              : video.snippet.description;
          des.length === 0 &&
            (des =
              'Welcome to Details in Luxury and in this video we are going to give you guys an in depth look inside the vipp Hotel.');
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
      {count.current < btnInfo.current[parseInt(button) - 1].maxResult - 1 && (
        <div className='btnBox'>
          <FontAwesomeIcon onClick={moreLoad} icon={faChevronDown} className='moreBtn' />
        </div>
      )}
    </Layout>
  );
}

export default About;
