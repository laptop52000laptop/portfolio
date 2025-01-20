import React from 'react'
import '../assets/css/media_query.css'
import '../assets/css/style.css'
import AboutImage from '../assets/images/mahadev_jana1.jpg'

export default function About() {
return (
<section id="about" className="about section display-height my-0 py-0 pt-4">
   <div className="container section-title p-0 text-center mb-2">
      <h2><i className="bi bi-person-circle"></i> About</h2>
      <h3 className='m-0'>I'm Mahadev Jana</h3>
      <p className='mb-2'>Full Stack Web Developer</p>
      <p style={{textAlign: 'justify'}} className='p-2 px-3'>I am Mahadev Jana. I am a Full-Stack developer based in Contai,East Midnapore,West Bengal, India. I have Runing my Bachelor of Computer Applicatio from Contai Collage And Learning & Management Science. I am very passionate about improving my coding skills & websites. I build WebApps and Websites using Laravel,PHP,JavaScript. Working for myself to improve my skills. I Like to Coding And build Full-Stack Web and Android Application.</p>
   </div>
   <div className="container" data-aos-delay="100">
      <div className="row gy-4 justify-content-center">
         <div className="col-lg-4 about-profile-image">
            <img src={AboutImage} className="img-fluid" alt=""/>
         </div>
         <div className="col-lg-8 content">
            <h2>Web Developer &amp; Applicatio Developer.</h2>
            <p className="fst-italic py-3">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
               magna aliqua.
            </p>
            <div className="row">
               <div className="col-lg-6">
                  <ul>
                     <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>13 Oct</span></li>
                     <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>https://www.mahadevjana.dev</span></li>
                     <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 7501137266</span></li>
                     <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Contai</span></li>
                  </ul>
               </div>
               <div className="col-lg-6">
                  <ul>
                     <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>20</span></li>
                     <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Runing Gradution</span></li>
                     <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>help@mahadevjana.dev</span></li>
                     <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
               </div>
            </div>
            <p className="py-3">
                My short term goal to get a job in MNC company. and my long term goal I will started my own startup and become a successfull person in my life
            </p>
         </div>
      </div>
   </div>
</section>
)
}