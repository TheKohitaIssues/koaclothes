import { useParams } from "react-router-dom"

const Remeras = () => {
    const {id} = useParams()

  return (
    <div>
        <h2>Seccuib de Remeras</h2>
        <p>Id Producto: {id} </p>
    </div>
  )
}

export default Remeras