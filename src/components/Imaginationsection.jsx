import React from 'react'
import possibility from '../assets/possibility.png'


function Imaginationsection() {
  return (
    <>
      <div className="container imagination-section">
        <div className="row">
            <div className="col-md-6">
                <img src={possibility} alt="image here"  className='img-fluid'/>
            </div>
            <div className="col-md-6">
                <div className="imagination-section-heading">
                    <h5>Request Early Access to Get Started</h5>
                    <h1>The possibilities are beyond your imagination</h1>
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <h4>Request Early Access to Get Started</h4>
                </div>
            </div>
        </div>
        <div className="row imagination-button-row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-8 col-lg-10">
                <div className="imagination-section-button-row-heading">
                  <p>Request Early Access to Get Started</p>
                  <h2>Register today & start exploring the endless possiblities.</h2>
                </div>
              </div>
              <div className="col-md-2 d-md-none"></div>
              <div className="col-md-4 col-lg-2">
                <div className="imagination-row-button-get-started">
                  <button className="btn get-started-button" type="submit">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Imaginationsection
