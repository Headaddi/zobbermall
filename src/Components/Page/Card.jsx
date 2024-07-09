import React from 'react'
import './Card.css'


function Card(props) {
  return (
    <div className='card'>
        <img src={props.image} alt="" />
        <div className="details">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div className="price">
                <p className='mainPrice'>{props.price1}</p>
                <p className='slashedPrice'>{props.price2}</p>
                <p className='percentage'><span>{props.slash}</span></p>                
            </div>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default Card