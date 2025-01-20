import { useEffect } from 'react'
import React from 'react'
import '../assets/css/media_query.css'
import '../assets/css/style.css'
import HeroImage from '../assets/images/FB_IMG_1736439131744.jpg'
import Typed from 'typed.js';

function Home() {
    useEffect(() => {
        const typed = new Typed(".typing-text", {
            strings: ["Frontend Development",'SPA Developer',"Backend Developer","Web Designer", "Android Developer","Web Developer","IOS Developer"],
            loop: true,
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 500,
        });

        return () => {
            typed.destroy();
        };
    },[]);
  return (
        <section id="hero" className="hero display-height section dark-background">
            <img src={HeroImage} alt="Mahadev-Jana"/>
            <div className="container"  data-aos-delay="100">
                <h3 className='h2'>Hi There,<br/>
                I'm Mahadev Jana</h3>
                <p>I Am Into <span className="typing-text" data-typed-items="Designer, Developer, Freelancer, Photographer">Designer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
            </div>
        </section>
  )
}
export default Home;
