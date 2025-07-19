import './Womens.css'
import data_product from '../Components/Assets/data'
import { Link, useLocation } from 'react-router-dom'
import Item from './Items/Item';

const Womens = () => {
  return (
      <div className="popular">
        <div className="popular-item">
          {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          })}
        </div>
      </div>
  )
}

export default Womens