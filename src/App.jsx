import Camisas from "./componentes/Camisas/Camisas"
import Remeras from "./componentes/Remeras/Remeras"
import Pantalones from "./componentes/Pantalones/Pantalones"
import Sweaters from "./componentes/Sweaters/Sweaters"
import Home from "./componentes/Home/Home"


import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element = {<ItemListContainer/>} />
          <Route path="/categoria/:idCategoria" element = {<ItemListContainer/>} />
          <Route path="/item/:idItem" element = {<ItemDetailContainer/>} />
          
          {/* <Route path="/Remeras/:id" element = {<Remeras/>} />
          <Route path="/Camisas" element = {<Camisas/>} />
          <Route path="/Pantalones" element = {<Pantalones/>} />
          <Route path="/Sweaters" element = {<Sweaters/>} /> */}
          


        {/* <ItemListContainer/> */}
        {/* <ItemDetailContainer/> */}


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App