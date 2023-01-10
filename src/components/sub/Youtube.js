import { faArrowRight, faChevronDown, faL } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../common/Layout';
import * as types from '../../redux/actionType';

function About(props) {
  const [videos, setVideos] = useState({ type: 'interest', count: 6 });
  const [button, setButton] = useState('interest');
  const [show, setShow] = useState(false);
  const btnRefList = useRef(null);
  const count = useRef(6);
  const dispatch = useDispatch();

  const maxResult = {
    interest: 18,
    attraction: 24,
    food: 15
  };

  const data = useSelector((store) => store.youtubeReducer.youtube);
  const clickBtn = (e) => {
    if (e.target === e.currentTarget) return;
    if (e.target.dataset.type === button) return;
    setShow(false);
    setButton(e.target.dataset.type);
    count.current = 6;
    setVideos({ ...videos, type: e.target.dataset.type, count: count.current });
  };

  const moreLoad = () => {
    count.current += 6;
    setVideos({ ...videos, count: count.current });
  };

  useEffect(() => {
    dispatch({ type: types.YOUTUBE.start, Info: videos });
  }, [dispatch, videos, show]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShow(true);
      return clearTimeout(delay);
    }, 500);
  }, [videos]);

  return (
    <Layout name={'Youtube'}>
      <ul className='button' ref={btnRefList} onClick={clickBtn}>
        <li data-type='interest' className={button === 'interest' ? 'on' : 'off'}>
          Hotel
        </li>
        <li data-type='attraction' className={button === 'attraction' ? 'on' : 'off'}>
          Attraction
        </li>
        <li data-type='food' className={button === 'food' ? 'on' : 'off'}>
          Food
        </li>
      </ul>

      <ul className={`youtube_container ${show === true ? 'on' : 'off'}`}>
        {data.map((video) => {
          let des =
            video.snippet.description.length > 400
              ? video.snippet.description.substring(0, 400) + '...'
              : video.snippet.description;
          des.length === 0 &&
            (des =
              'Welcome to Details in Luxury and in this video we are going to give you guys an in depth look inside the vipp Hotel.');
          return (
            <li key={video.snippet.resourceId.videoId}>
              <article>
                <div className='thumbnail'>
                  <img src={video.snippet.thumbnails.medium.url} alt='videoThumbnail' />
                </div>
              </article>
              <article>
                <div className='video_info'>
                  <p className='video_title'>{video.snippet.title}</p>
                  <p className='video_des'>{des}</p>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
      {count.current < maxResult[button] && (
        <div className='btnBox'>
          <FontAwesomeIcon onClick={moreLoad} icon={faChevronDown} className='moreBtn' />
        </div>
      )}
    </Layout>
  );
}

export default About;
