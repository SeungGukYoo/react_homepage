import React, { useMemo, useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Layout from '../common/Layout';
import ContactInfo from './contact/Contact_info';

function Contact(props) {
  const { kakao } = window;
  const [info] = useState([
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
  ]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const mapInstance = useRef(null);
  const mapContainer = useRef(null);
  const mapOption = useRef(null);
  const mapTypeControl = useRef(null);
  const zoomControl = useRef(null);
  const moveLatLon = info[currentIdx].position;
  const markerPosition = info[currentIdx].position;
  const marker = useMemo(
    () =>
      new kakao.maps.Marker({
        position: markerPosition
      }),
    [markerPosition, kakao]
  );

  mapOption.current = {
    center: info[currentIdx].position,
    level: 2
  };
  zoomControl.current = new kakao.maps.ZoomControl();

  useEffect(() => {
    mapContainer.current.innerHTML = '';
    mapInstance.current = new kakao.maps.Map(mapContainer.current, mapOption.current);
    mapInstance.current.addControl(zoomControl.current, kakao.maps.ControlPosition.BOTTOMRIGHT);
    mapInstance.current.setZoomable(false);
    mapTypeControl.current = new kakao.maps.MapTypeControl();

    const resizeMap = () => mapInstance.current.setCenter(moveLatLon);
    marker.setMap(mapInstance.current);
    window.addEventListener('resize', resizeMap);
    return () => {
      window.removeEventListener('resize', resizeMap);
    };
  }, [currentIdx, kakao, mapOption, marker, moveLatLon]);

  return (
    <Layout name={'Contact'}>
      <section className='container'>
        <ContactInfo />
        <section className='mapContainer'>
          <h2>Location</h2>
          <div id='map' className='kakaoMap' ref={mapContainer}></div>
          <ul>
            {info.map((el, idx) => {
              return (
                <li
                  key={idx}
                  className={idx === currentIdx ? 'on' : ''}
                  onClick={() => setCurrentIdx(idx)}
                >
                  {el.title}
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </Layout>
  );
}

export default Contact;
