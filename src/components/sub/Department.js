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
  }, []);
  return (
    <Layout name={'Department'}>
      <div className='company_description'>
        <article>
          <h2>
            Much like human well-being <br />
            the essence of vipp <br />
            Architects work is found in <br />
            <strong>
              <u>balance-between</u>
            </strong>
            &nbsp;richness <br />
            and restraint, between order <br /> and complexity
          </h2>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sapiente voluptates
            nam sint illum enim quod adipisci, nihil numquam maxime vitae dolore aut cupiditate
            animi nemo eligendi quia, sunt ipsa corporis? Esse et debitis, accusamus tempora fugit
            dolores blanditiis repellendus quidem reiciendis suscipit at mollitia? Veritatis
            deserunt, incidunt, repudiandae commodi quisquam tempora sed in aut fugit doloremque
            quibusdam, itaque iste at! Saepe dolor odio voluptatum debitis consectetur, aliquam nisi
            et assumenda amet esse? Obcaecati mollitia fugit vel voluptatibus dicta dolorem
            exercitationem nisi nulla maxime ipsam omnis, minus ea. Repudiandae inventore vero
            cupiditate rem, laborum accusamus accusantium harum dolorem aut ipsam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat harum hic quidem totam
            vitae esse dolores perferendis corrupti fugit similique? Expedita accusantium sint ipsam
            nisi repellendus autem nobis. Consectetur optio porro non hic totam provident placeat
            voluptate aliquid rerum beatae ab animi, aperiam sit, illum eum magnam culpa quibusdam.
            Aspernatur, repudiandae adipisci deleniti dicta facere quod velit ut voluptatem est
            fugiat possimus sapiente similique enim et aliquam veritatis iure reprehenderit.
          </p>
          <div>
            <ul>
              <li>
                <h3>
                  12 Years <br />
                  Experience
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, unde?</p>
              </li>
              <li>
                <h3>
                  145 <br />
                  Projects
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, unde?</p>
              </li>
              <li>
                <h3>
                  12 Awards <br />
                  Winning
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, unde?</p>
              </li>
              <li>
                <h3>
                  39 Great <br />
                  Clients
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, unde?</p>
              </li>
            </ul>
          </div>
        </article>
      </div>
      <h3>VIPP PEOPLE</h3>
      <ul>
        {members.map((member, idx) => {
          return (
            <li style={{ order: idx }}>
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
        <li className='department_description'>
          <h3>OUT CREATIVES AND BEST MEMBER</h3>
          <p>
            <span>
              They drive the rudder of creativity with precision, following their sixth sense that
            </span>
            <span>
              allows them to see the world in RAW and see what the others can't. To hear the sun
            </span>
            <span>
              sizzling behind the sea horizon, to swi, in the endless immensity of the clouds and
            </span>
            <span>
              smell the dandelions flowering in distant lands. They give birth to magical digital
              experiences.
            </span>
          </p>
        </li>
      </ul>
    </Layout>
  );
}

export default Department;
