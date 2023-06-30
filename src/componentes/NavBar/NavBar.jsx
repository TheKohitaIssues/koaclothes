import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='NavBar'>
      <header>
        <Link to={"/"}>
        <h1> KoaClothes </h1>
        </Link>
{/* link se utiliza para el home y el carrito */}
        <div className='nav'>
          <ul>

            <li>
              <NavLink to={`/categoria/1`}> Remeras </NavLink>
            </li>
            <li>
              <NavLink to={`/categoria/2`}> Camisas </NavLink>
            </li>
            <li>
              <NavLink to={`/categoria/3`}> Pantalones </NavLink>
            </li>
            <li>
              <NavLink to={`/categoria/4`}> Sweaters </NavLink>
            </li>

            

          </ul>
        </div>
        <span>
          <CartWidget/>
        </span>
      </header>
    </div>
  )
}

export default NavBar