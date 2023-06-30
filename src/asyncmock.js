
    const productos = [
        {id:"1", nombre: "Remera 1", precio: 300, img: "../public/img/remera1.png", idCat:"Remeras"},
        {id:"2", nombre: "Remera 2", precio: 350, img: "../public/img/remera2.png", idCat:"Remeras"},
        {id:"3", nombre: "Remera 3", precio: 400, img: "../public/img/remera3.png", idCat:"Remeras"},
        {id:"4", nombre: "Camisa 1", precio: 450, img: "../public/img/camisa1.png", idCat:"Camisas"},
        {id:"5", nombre: "Camisa 2", precio: 500, img: "../public/img/camisa2.png", idCat:"Camisas"},
        {id:"6", nombre: "Camisa 3", precio: 550, img: "../public/img/camisa3.png", idCat:"Camisas"},
        {id:"7", nombre: "Pantalon 1", precio: 750, img: "../public/img/pantalon1.png", idCat:"Pantalones"},
        {id:"8", nombre: "Pantalon 2", precio: 800, img: "../public/img/pantalon2.png", idCat:"Pantalones"},
        {id:"9", nombre: "Pantalon 3", precio: 850, img: "../public/img/pantalon3.png", idCat:"Pantalones"},
        {id:"10", nombre: "Sweater 1", precio: 600, img: "../public/img/sweater1.png", idCat:"Sweaters"},
        {id:"11", nombre: "Sweater 2", precio: 650, img: "../public/img/sweater2.png", idCat:"Sweaters"},
        {id:"12", nombre: "Sweater 3", precio: 700, img: "../public/img/sweater3.png", idCat:"Sweaters"},
    ]

    export const getProductos = () => {
        return new Promise((res) => {
            setTimeout(() => {
                res(productos);
            }, 100)
        })
    }


    export const getUnProducto = (id) => {
        return new Promise ( resolve => {
            setTimeout ( () => {
                const producto = productos.find(prod => prod.id === id);
                resolve(producto);
            },100)
        })
    }

    export const getProductosPorCategoria = (idCategoria) => {
        return new Promise(resolve => {
            setTimeout( ()=> {
                const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
                resolve (productosCategoria);
            },100)
        })
    }