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
                `<div id="productos" class="card" style="width: 18rem;">
                <img src= "${data.productos[i].imagen}" class="card-img-top">
                <div class="card-body">
                  <h2 class="card-title">${data.productos[i].nombre}</h2>
                  <p class="card-text">${data.productos[i].descripcion}</p>
                  <h3 class="card-text">$${data.productos[i].precio}</h3>
                  <button id= "button${i}" class="btn btn-primary" onclick=obtenerCant()>AGREGAR AL CARRITO</button>
                </div>
              </div>`
            )
            guardarProductosEnCarrito(i)
    }

}).fail(()=> {
    console.log("error")
    swal("ERROR 404", "Error en la base de datos, por favor contacte a soporte tecnico", "error");

});

const obtenerCant = () => {
    var numerito = document.getElementsByTagName('span')[0];
    var cartEvent= parseFloat(numerito.innerHTML) + 1;
    numerito.innerHTML= cartEvent;
}

