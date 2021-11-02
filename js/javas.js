function validar(){
    let usuario= document.getElementById("usuario").value;
    let pass= document.getElementById("pass").value;

    if(usuario != "" && pass != ""){
        alert("Usuario y contraseña valido")
    } else{
        alert("verifique sus datos");
    }
}

function agregar (){
    function Producto(nombre, categoria, origen){
        this.nombre= nombre;
        this.categoria= categoria;
        this.origen= origen;
    }
    let nombreUser= document.getElementById("nombre").value;
    let categoriaUser= document.getElementById("categoria").value;
    let origenUser=document.getElementById("origen").value;

    productoNuevo= new Producto (nombreUser, categoriaUser, origenUser);
    console.log(productoNuevo);
    imprimirLista();
};

const btn= document.getElementById("boton");
btn.addEventListener("click", agregar);

let array= [];
function imprimirLista(){
    array.push(productoNuevo);
    console.log(array);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+productoNuevo.nombre+'</td><td>'+productoNuevo.categoria+'</td><td>'+productoNuevo.origen+'</td></tbody>';
};






/* PRUEBA */

/*let elegir= prompt("Qué preferís... ¿Flash o Iron Man?");

if(elegir=="Flash"){
    console.log(producto1);
}else{
    console.log(Producto2);
}


const superheroe=[ ];
let cantidad= 3;

do{
    let ingreso= prompt("Ingresa tus 3 superheroes favoritos");
    superheroe.push(ingreso.toUpperCase());
    console.log(superheroe);
}while(superheroe.length !=cantidad);

const nuevoHeroe= superheroe.concat([]);
alert("Has ingresado: " + nuevoHeroe.join("/ ")); */
