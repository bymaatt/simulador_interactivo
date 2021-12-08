$.get( "./js/productos.json", data => {
    
    const guardarProductosEnCarrito =  i => {
        $(`#button${i}`).click( () => {
            /* console.log(data.productos) */
            const productoNombre = data.productos[i].nombre;
            const productoPrecio = data.productos[i].precio;

            let productosObject = {
                productoNombre,
                productoPrecio,
            }       
    
            if(localStorage.getItem('productos') === null){
                let productosArray = []
                productosArray.push(productosObject)
                localStorage.setItem('productos', JSON.stringify(productosArray))
            }else{ 
                let productosEnLocalStorage = JSON.parse(localStorage.getItem('productos'));
                productosEnLocalStorage.push(productosObject);
                localStorage.setItem('productos', JSON.stringify(productosEnLocalStorage))
            }             
        })
    }

        for (let i = 0; i < data.productos.length; i++) {
            $(".main__container").append(
                `<div class ="main__card m-5 p-3">
                <h1 class = "main__card--title main__card--element">${data.productos[i].nombre}</h1>
                <div class="container_product">
                    <img src = ${data.productos[i].imagen} class = "main__card--img main__card--element m-0 p-0">
                    <p class = "">${data.productos[i].descripcion}</p>
                    <h3 class = "main__card--h3 main__card--element">$${data.productos[i].precio}</h3>
                    <button class = "main__card--button main__card--element btn-primary" id= "button${i}">AGREGAR AL CARRITO</button>
                </div>
            </div>`
            )
            guardarProductosEnCarrito(i)
    }

}).fail(()=> {
    console.log("error")
    swal("ERROR 404", "Error en la base de datos, por favor contacte a soporte tecnico", "error");

});
