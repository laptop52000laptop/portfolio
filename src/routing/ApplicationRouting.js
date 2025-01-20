import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../small_component/header";
import Fotter from "../small_component/fotter"; // Ensure correct import
import Home from "../component/home";
import About from "../component/about";
import Education from "../component/education";
import NotFound404 from "../component/404";
import Contact from "../component/contact";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Skill from "../component/skill";

function ApplicationRouting() {
  return (
    <>
      <Header />
      <GoogleOAuthProvider clientId="145006491057-6l7q3ng35i88mr3v93f3c36oq8v027f8.apps.googleusercontent.com">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/skills" element={<Skill/>}/>
          <Route path="*" element={<NotFound404/>}/>
        </Routes>
        </GoogleOAuthProvider>
      <Fotter />
    </>
  );
}

export default ApplicationRouting;
