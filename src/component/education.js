import React from 'react';
import '../assets/css/media_query.css';
import '../assets/css/style.css';
import SchoolImage from '../assets/images/school.jpg';
import Collage from '../assets/images/collage.jpg';

export default function Education() {
  return (
    <section id="about" className="about section4 display-height my-0 py-0 pt-2 d-flex flex-column justify-content-center">
      <div className="section4_div1">
        <h2>
          <i className="fa-solid fa-graduation-cap"></i> My <span>Education</span>
        </h2>
        <p className='px-2'>
          Education is not the learning of facts, but the training of the mind to think.
        </p>
      </div>
      <div className="section4_div2">
        <div>
          <div className="section4_div2_img">
            <img src={Collage} alt="College" />
          </div>
          <div className="section4_div2_detils">
            <h3>Bachelor Of Computer Application</h3>
            <p>Contai College Of Learning & Management Science</p>
            <p>
              Vill-Padmapukuria, P.O + P.S- Contai, Dist-Purba Medinipur | West Bengal (721401)
            </p>
            <br />
            <h4>2023 | Running</h4>
          </div>
        </div>
      </div>
      <div className="section4_div2">
        <div>
          <div className="section4_div2_img">
            <img src={SchoolImage} alt="Champatala High School" />
          </div>
          <div className="section4_div2_detils">
            <h3>Class X | Class XII</h3>
            <p>Champatala High School (WBBSE)</p>
            <p>
              Vill-Bara Subarnanagar, P.O- Champatala + P.S- Junput Coastal, Dist-Purba Medinipur | 
              West Bengal (721442)
            </p>
            <br />
            <h4>2022 | Complete</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
