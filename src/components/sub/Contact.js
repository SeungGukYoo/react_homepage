import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Layout from '../common/Layout';
import ContactInfo from './Contact_info';

function Contact(props) {
  const { kakao } = window;
  const mapArray = [
    {
      title: 'VIPP SEOUL',
      position: new kakao.maps.LatLng(37.5716352, 126.9767435)
    },
    {
      title: 'VIPP DAEJEON',
      position: new kakao.maps.LatLng(36.3504119, 127.3845475)
    },
    {
      title: 'VIPP BUSAN',
      position: new kakao.maps.LatLng(35.1295178, 129.094151)
    }
  ];
  const [info] = useState(mapArray);

  const [currentIdx, setCurrentIdx] = useState(0);
  const mapContainer = useRef(null);
  console.log(currentIdx);
  const mapOption = {
    center: info[currentIdx].position,
    level: 2
  };

  const moveLatLon = info[currentIdx].position;

  const markerPosition = info[currentIdx].position;
  const marker = new kakao.maps.Marker({
    position: markerPosition
  });

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, mapOption);
    marker.setMap(map);
    window.addEventListener('resize', () => map.setCenter(moveLatLon));
    return () => {
      window.removeEventListener('resize', () => map.setCenter(moveLatLon));
    };
  }, [currentIdx]);

  return (
    <Layout name={'Contact'}>
      <section className='container'>
        <ContactInfo />
        <section className='mapContainer'>
          <h2>Location</h2>
          <div id='map' className='kakaoMap' ref={mapContainer}></div>
          <ul>
            {info.map((el, idx) => (
              <li key={idx} onClick={() => setCurrentIdx(idx)}>
                {el.title}
              </li>
            ))}
          </ul>
        </section>
      </section>
    </Layout>
  );
}

export default Contact;
