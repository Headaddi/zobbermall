import React from 'react'
import texts from './texts'

function Links(props) {
  return (
    <div className={props.className}>
        <p className="head">{props.title}</p>
        <p><a href="">{props.first}</a></p>
        <p><a href="">{props.second}</a></p>
        <p><a href="">{props.third}</a></p>
        <p><a href="">{props.fourth}</a></p>
    </div>
  )
}

export default Links