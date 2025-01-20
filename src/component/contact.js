import React from 'react'
import ContactForm from '../small_component/contact_form'


export default function Contact() {


  return (
        <section id="contact" className="contact section display-height my-0 py-0 pt-2">
            {/* <Preloader/> */}
            <div className="container section-title pb-2">
                <h2>Contact</h2>
            </div>
            <div className="container"  data-aos-delay="100">
                <div className="row gy-4">
                    <div className="col-lg-5">
                        <div className="info-wrap">
                        <div className="info-item d-flex mb-2"  data-aos-delay="200">
                            <i className="bi bi-geo-alt flex-shrink-0"></i>
                            <div>
                                <h3>Address</h3>
                                <p>Puba Gopinathpur(Chapatala More), Contai, East Midnapore, West Bengal, 721442</p>
                            </div>
                        </div>
                        <div className="info-item d-flex"  data-aos-delay="300">
                            <i className="bi bi-telephone flex-shrink-0"></i>
                            <div>
                                <h3>Call Us</h3>
                                <p>+91 7501137266</p>
                            </div>
                        </div>
                        <div className="info-item d-flex"  data-aos-delay="400">
                            <i className="bi bi-envelope flex-shrink-0"></i>
                            <div>
                                <h3>Email Us</h3>
                                <p>help@mahadevjana.dev</p>
                            </div>
                        </div>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.739885806277!2d87.83219137541813!3d21.790325880056457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0321006d8ecd39%3A0x5c224341e799e18d!2sMahadev%20Jana!5e0!3m2!1sen!2sin!4v1736667177629!5m2!1sen!2sin" 
                            frameBorder="0" 
                            style={{ border: "0", width: "100%", height: "270px" }} 
                            title="Mahadev Jana Home Location" 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        </div>
                    </div>
                    <ContactForm/>
                </div>
            </div>
        </section>
    )
}
