import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProduct'>
      <img src={img} alt={nombre} />
      <h3> {nombre} </h3>
      <p> {precio} </p>
      <p> ID: {id} </p>
      <Link className='link' to= {`/item/${id}`} > Ver Detalles </Link>
    </div>
  )
}

export default Item