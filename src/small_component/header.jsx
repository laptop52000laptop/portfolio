
import React, { useRef } from 'react'
import ProfileImage from '../assets/images/mahadev_jana.jpg'
import Resume from '../assets/resume/mahadevjana.pdf'
import { Link } from 'react-router-dom';

export default function Header() {
    const menu_bar = useRef();
    const menu_side_bar = useRef();

    let MenuBar = () =>{
        menu_bar.current.classList.toggle('bi-x')
        menu_side_bar.current.classList.toggle('header-show')
    }

  return (
    <>
        <header id="header" ref={menu_side_bar} className="header dark-background d-flex flex-column">
            <i className="header-toggle d-xl-none bi bi-list" ref={menu_bar} onClick={() => MenuBar()}></i>

            <div className="profile-img">
            <img src={ProfileImage} alt="Mahadev-Jana" className="img-fluid rounded-circle"/>
            </div>

            <a href="index.html" className="logo d-flex align-items-center justify-content-center">
            <h1 className="sitename">Mahadev Jana</h1>
            </a>

            <div className="social-links text-center">
            <span onClick={()=> alert("Don't have social media account")} style={{cursor: "pointer"}} className="p-2 rounded-circle border border-2 mx-1 twitter"><i className="bi bi-twitter-x"></i></span>
            <span onClick={()=> alert("Don't have social media account")} style={{cursor: "pointer"}} className="p-2 rounded-circle border border-2 mx-1 facebook"><i className="bi bi-facebook"></i></span>
            <span onClick={()=> alert("Don't have social media account")} style={{cursor: "pointer"}} className="p-2 rounded-circle border border-2 mx-1 instagram"><i className="bi bi-instagram"></i></span>
            <span onClick={()=> window.open("https://www.linkedin.com/in/mahadev-jana-software-developer")} style={{cursor: "pointer"}} className="p-2 rounded-circle border border-2 mx-1 linkedin"><i className="bi bi-linkedin"></i></span>
            </div>

            <nav id="navmenu" className="navmenu">
            <ul>
                <li><Link to='/' onClick={() => MenuBar()} className="active"><i className="bi bi-house navicon"></i>Home</Link></li>
                <li><Link to='/about' onClick={() => MenuBar()}><i className="bi bi-person navicon"></i> About</Link></li>
                <li><a href={Resume} download="Resume.pdf" onClick={() => MenuBar()}><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
                <li><Link to='/education' onClick={() => MenuBar()}><i className="fa-solid fa-graduation-cap" style={{marginRight: "10px"}}></i> Education</Link></li>
                <li><Link to='/skills'><i className="fa-solid fa-code" style={{marginRight: "8px",fontSize: "18px"}}></i> Skills & Abilities</Link></li>
                <li><Link ><i className="bi bi-file-earmark-code" style={{marginRight: "10px",fontSize: "20px"}}></i>Projects Made</Link></li>
                <li><Link to='/contact' onClick={() => MenuBar()}><i className="bi bi-envelope navicon"></i> Contact</Link></li>
                <li><Link onClick={()=> window.open("https://mahadevjana.dev/policy")}><i className="bi bi-file-earmark-code" style={{marginRight: "10px",fontSize: "20px"}}></i>Privacy Policy</Link></li>
            </ul>
            </nav>
        </header>
    </>
  )
}
