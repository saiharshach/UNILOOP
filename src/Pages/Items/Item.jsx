import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/Item/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
        <p>{props.name}</p>
        <div className="item-price-chat">
              <div className="item-price-new">
                  Rs.{props.new_price}
              </div>
              <div className="item-price-old">
                  Rs.{props.old_price}
              </div>
              <div className="items-prices">
              <Link to={`/chat/${props.uploaderId}`} className="chat-icon">
              💬
              </Link>
          </div>
        </div>
    </div>
  )
}

export default Item