import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offer on your Email</h1>
      <p>SubScribe to our newLetter and stay Updated</p>
      <div>
        <input type="email" placeholder='your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
