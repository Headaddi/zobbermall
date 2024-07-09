import React from 'react';
import './Images.css';
import Cover from '../Assets/cover.png';
import Versace from '../Assets/versace.png';
import Zara from '../Assets/zara-logo-1 2.png';
import Gucci from '../Assets/gucci-logo-1 2.png';
import Prada from '../Assets/prada-logo-1 2.png'
import Calvin from '../Assets/Group (1).png'



function Images() {
  return (
    <div className='hero'>
      <img className='cover' src={Cover} alt="" />
      <div className="brands">
        <img src={Versace} alt="" />
        <img src={Zara} alt="" />
        <img src={Gucci} alt="" />
        <img src={Prada} alt="" />
        <img src={Calvin} alt="" />
      </div>
    </div>
  )
}

export default Images