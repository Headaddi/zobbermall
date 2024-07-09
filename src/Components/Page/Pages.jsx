import React from 'react'
import './Pages.css'
import Card from './Card'
import {contents1, contents2} from '../Context/contents'

function Pages() {
  return (
    <div>
      <div className="newArrivals">
      <h2>NEW ARRIVALS</h2>
        <div className="cardGrid">
          {contents1.map(singleCard =>{
            return(
              <Card
            key={singleCard.id}
            image={singleCard.display}
            title={singleCard.title}
            description={singleCard.about}
            price1={singleCard.price1}
            price2={singleCard.price2}
            slash={singleCard.slash}
            button={singleCard.button}
          />
            )
          })}
          
        </div>

      </div>

      <div className="topSellers">
      <h2>TOP SELLERS</h2>
        <div className="cardGrid">
          {contents2.map(singleCard =>{
            return(
              <Card
            key={singleCard.id}
            image={singleCard.display}
            title={singleCard.title}
            description={singleCard.about}
            price1={singleCard.price1}
            price2={singleCard.price2}
            slash={singleCard.slash}
            button={singleCard.button}
          />
            )
          })}
          
        </div>
      </div>
        
        
    </div>
  )
}

export default Pages