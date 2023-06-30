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
              <NavLink to={`/categoria/Remeras`}> Remeras </NavLink>
            </li>
            <li>
              <NavLink to={`/categoria/Camisas`}> Camisas </NavLink>
            </li>
            <li>
              <NavLink to={`/categoria/Pantalones`}> Pantalones </NavLink>
            </li>
            <li>
              <NavLink to={`/categoria/Sweaters`}> Sweaters </NavLink>
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