import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';

import { useState } from 'react';
import Layout from '../common/Layout';

function Department(props) {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/DB/members.json`)
      .then((result) => setMembers(result.data.members));
    console.log(members);
  }, []);
  return (
    <Layout name={'department'} className='department'>
      <ul>
        {members.map((member, idx) => {
          return (
            <li>
              <div>
                <div className='imgBox'>
                  <img src={`${process.env.PUBLIC_URL}/images/department/${member.pic}`} alt='' />
                </div>
                <div className='img_description'>
                  <h1>{member.name}</h1>
                  <p>{member.position}</p>
                </div>
              </div>
            </li>
          );
        })}
        {/* <li>
          <div>
            <div className='imgBox'>
              <img src={`${process.env.PUBLIC_URL}/images/department/member1.jpg`} alt='' />
            </div>
            <div className='img_description'>
              <h1>Alex</h1>
              <p>Junior Engineer</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div className='imgBox'>
              <img src={`${process.env.PUBLIC_URL}/images/department/member2.jpg`} alt='' />
            </div>
            <div className='img_description'>
              <h1>Alex</h1>
              <p>Junior Engineer</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div className='imgBox'>
              <img src={`${process.env.PUBLIC_URL}/images/department/member3.jpg`} alt='' />
            </div>
            <div className='img_description'>
              <h1>Alex</h1>
              <p>Junior Engineer</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div className='imgBox'>
              <img src={`${process.env.PUBLIC_URL}/images/department/member4.jpg`} alt='' />
            </div>
            <div className='img_description'>
              <h1>Alex</h1>
              <p>Junior Engineer</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div className='imgBox'>
              <img src={`${process.env.PUBLIC_URL}/images/department/member5.jpg`} alt='' />
            </div>
            <div className='img_description'>
              <h1>Alex</h1>
              <p>Junior Engineer</p>
            </div>
          </div>
        </li> */}
      </ul>
    </Layout>
  );
}

export default Department;
