import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <h3>STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS</h3>
        <div className="form">
          <div className="entry">
             <span class="material-symbols-outlined">mail</span>
             <input type="text" className='entryInput' placeholder='Enter your email address'/>
          </div> 
          <button className='entryButton'>Subscribe to Newsletter</button>
        </div>
    </div>
  )
}

export default Contact