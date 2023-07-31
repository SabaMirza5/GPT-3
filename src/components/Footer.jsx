import React from 'react'
import navbarlogo from '../assets/navbarlogo.png'


function Footer() {
  return (
    <>
      <div className="container-fluid request-section">
        <div className="row">
            <div className="col-md-12">
                <div className="request-main-heading text-center">
                    <h1>Do you want to step in to the future before others</h1>
                    <button className='btn'>Request Early Access</button>
                </div>
            </div>
        </div>
        <div className="row footer-row">
               <div className="col-md-1"></div>
                <div className="col-md-3 col-12">
                    <div className="footer-logo">
                    <img src={navbarlogo} alt="footer logo here"  className='img-fluid'/>
                    <h4>Crechterwoord K12 182 DK<br/> Alknjkcb, All Rights Reserved</h4>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2 col-6">
                    <div className="footer-heading">
                        <h6>Links</h6>
                        <ul className="list-unstyled mt-4">
                            <li  className='mt-4'><a href="">Overons</a></li>
                            <li  className='mt-4'><a href="">Social Media</a></li>
                            <li  className='mt-4'><a href="">Counters</a></li>
                            <li  className='mt-4'><a href="">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2 col-6">
                    <div className="footer-heading">
                        <h6>Company</h6>
                        <ul className="list-unstyled mt-4">
                            <li  className='mt-4'><a href="">Terms & Conditions</a></li>
                            <li  className='mt-4'><a href="">Privacy Policy</a></li>
                            <li  className='mt-4'><a href="">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2 col-6">
                    <div className="footer-heading">
                        <h6>Get in touch</h6>
                        <ul className="list-unstyled mt-4">
                            <li className='mt-4'><a href="">Crechterwoord K12 <br/>182 DK Alknjkcb</a></li>
                            <li className='mt-4'><a href="">085-132567</a></li>
                            <li className='mt-4'><a href="">info@payme.net</a></li>
                        </ul>
                    </div>
                </div>
        </div>
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="all-right-reserved-heading">
                    <h1>© 2021 GPT-3. All rights reserved.</h1>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
