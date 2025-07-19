import './Mens.css'
import new_collection from '../Components/Assets/new_collections'
import { Link, useLocation } from 'react-router-dom'
import Item from './Items/Item';

const Mens = () => {
  return (
      <div className="popular">
        <div className="popular-item">
          {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          })}
        </div>
      </div>
  )
}

export default Mens