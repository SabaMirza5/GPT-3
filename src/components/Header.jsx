import React from 'react'
import ai from '../assets/ai.png'
import people from '../assets/people.png'
import google from '../assets/google.png'
import slack from '../assets/slack.png'
import atlassian from '../assets/atlassian.png'
import dropbox from '../assets/dropbox.png'
import shopify from '../assets/shopify.png'

function Header() {
    const placeholder = 'Your Email Address';
  return (
    <>
      <div className="container header">
        <div className="row">
            <div className="col-md-6">
                <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className="input-group">
                <input type="text" className="form-control" placeholder={placeholder} />
                <span className="input-group-text" id="basic-addon2">Get Started</span>
             </div>
             <div className="people-section">
             <div className="people-img">
             <img src={people} alt="people image here"/>
             </div>
                <p>1,600 people requested access a visit in last 24 hours</p>
             </div>
            </div>
            <div className="col-md-6">
           <div className="header-image-div">
                <img src={ai} alt="image here" className='img-fluid' />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 col-12 header-img-section-tag me-5">
            <img src={google} alt="img here"  className='img-fluid'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={slack} alt="img here"  className='img-fluid'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={atlassian} alt="img here"  className='img-fluid'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={dropbox} alt="img here"  className='img-fluid'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={shopify} alt="img here"  className='img-fluid'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        </div>
      </div>
    </>
  )
}

export default Header
