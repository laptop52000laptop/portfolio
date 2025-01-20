import React from 'react'

export default function Skill() {
  return (
        <section id="skills" className="skills section light-background display-height my-0 py-0 pt-2 d-flex flex-column justify-content-center align-content-center">
        <div className="container section-title">
            <h2>Skills</h2>
        </div>
        <div className="container">
            <div className="row skills-content skills-animation">
                <div className="col-lg-6">
                    <div className="progress">
                        <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar" style={{width: "100%"}} role="progressbar" aria-valuenow="100" aria-valuemin="100" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill"><span>CSS</span> <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar" style={{width: "100%"}} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill"><span>JavaScript</span> <i className="val">90%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar" style={{width: "90%"}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill"><span>laravel</span> <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar" style={{width: "100%"}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill"><span>MYSQL</span> <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar" style={{width: "100%"}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill"><span>PYTHON</span> <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar" style={{width: "100%"}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="progress">
                        <span className="skill"><span>PHP</span> <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar" style={{width: "100%"}} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill"><span>WordPress/CMS</span> <i className="val">50%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar" style={{width: "50%"}} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill"><span>Photoshop</span> <i className="val">50%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar" style={{width: "50%"}} role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill"><span>React</span> <i className="val">90%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar" style={{width: "90%"}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="progress">
                        <span className="skill"><span>Flutter</span> <i className="val">90%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar" style={{width: "90%"}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
