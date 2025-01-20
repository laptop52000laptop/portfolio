import React from 'react'
import '../assets/js/script';

export default function Fotter() {
  return (
    <>
        <footer id="footer" className="footer position-relative light-background p-0 py-2" style={{height: "60px"}}>
          <div className="container-fluit m-0 p-0" style={{width: "100% !important"}}>
          <div className="copyright text-center">
              <p>© <span>Copyright</span> <strong className="px-1 sitename">2025</strong> <span>All Rights Reserved</span></p>
          </div>
          <div className="credits p-0">
            <p className='m-0'>Designed With <i className="fa-solid fa-heart text-danger"></i> By <span className='text-warning'>Mahadev Jana</span></p> 
          </div>
          </div>
        </footer>
    </>
  )
}
