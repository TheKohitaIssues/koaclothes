import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"

import { useParams } from "react-router-dom"
import { collection,getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/config"

const ItemListContainer = () => {
  const [productos, setProductos] = useState ([]);
  const {idCategoria} = useParams();

  useEffect( () => {
    const misProductos = idCategoria ? query(collection(db, "inventario"),where("idCat", "==", idCategoria)) : collection(db, "inventario");

    getDocs(misProductos)
        .then( res => {
            const nuevosProductos = res.docs.map(
              (doc) => ({...doc.data(), id: doc.id})
            );
            setProductos(nuevosProductos);
        })
        .catch(error => console.log(error))
}, [idCategoria])




  return (
    <>
      <h2>Productos de KoaClothes</h2>
      <ItemList productos={productos} />
      
    </>
  )
}

export default ItemListContainer