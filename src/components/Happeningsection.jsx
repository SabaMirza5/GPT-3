import React from 'react'
import blog01 from '../assets/blog01.png'
import blog02 from '../assets/blog02.png'
import blog03 from '../assets/blog03.png'
import blog04 from '../assets/blog04.png'
import blog05 from '../assets/blog05.png'
function Happeningsection() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-10">
            <div className="happening-main-heading">
              <h1>A lot is happening,We are blogging about it.</h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-2"></div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card1-img">
              <img src={blog01} alt="" className='img-fluid' />
            </div>
            <div className="text-card1-img">
              <p>Sep 26, 2021</p>
              <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
              <button className="btn" type="submit">Read Full Article</button>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row mt-4 mt-md-0">
              <div className="col-md-6 col-6">
                <div className="card2-img">
                  <img src={blog02} alt="" className='img-fluid' />
                </div>
                <div className="card2 text-card1-img">
                <p>Sep 26, 2021</p>
              <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
              <button className="btn" type="submit">Read Full Article</button>
                </div>
              </div>
              <div className="col-md-6 col-6">
                <div className="card3-img">
                  <img src={blog03} alt="" className='img-fluid' />
                </div>
                <div className="card2 text-card1-img">
                <p>Sep 26, 2021</p>
              <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
              <button className="btn" type="submit">Read Full Article</button>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6 col-6">
                <div className="card4-img">
                  <img src={blog04} alt="" className='img-fluid' />
                </div>
                <div className="card2 text-card1-img">
                <p>Sep 26, 2021</p>
              <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
              <button className="btn" type="submit">Read Full Article</button>
                </div>
              </div>
              <div className="col-md-6 col-6">
                <div className="card5-img">
                  <img src={blog05} alt="" className='img-fluid' />
                </div>
                <div className="card2 text-card1-img">
                <p>Sep 26, 2021</p>
              <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
              <button className="btn" type="submit">Read Full Article</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Happeningsection
