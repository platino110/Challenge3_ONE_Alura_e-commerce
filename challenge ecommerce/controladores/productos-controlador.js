import {productoServicios} from "../servicios/productos-servicios.js";


const nuevoProducto = (nombre, precio, imagenUrl) => {
    const tarjeta = document.createElement("div");
    const contenido = `
    <div>
        <img src="${imagenUrl}" alt="">
        <p>${nombre}</p>
        <p>${precio}</p>
    </div>
    `;

    tarjeta.innerHTML = contenido;
    tarjeta.classList.add(tarjeta);
    return card;
}

const producto = document.querySelector("[datos-productos]");
const renderizar = async () => {
    try {
        const listaproductos = await productoServicios.listaProductos();
        listaproductos.array.forEach(elemento => {
            producto.appendChild(nuevoProducto(elemento.nombre, elemento.precio, elemento.imagenUrl))
        });

    } 
    catch(error) {
        console.log(error);
    }
}

renderizar();