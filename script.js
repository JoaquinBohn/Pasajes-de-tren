//Precios de pasajes
const PRECIO_LAPLATA = 200
const PRECIO_ROSARIO = 800
const PRECIO_PIGUE = 700
const PRECIO_CORDOBA = 950
const PRECIO_TUCUMAN = 1240

function main(){
    alert("Bienvenido a ventas de pasajes de tren.")
    alert("Que accion desea realizar?")
    let opcion = pedirOpcion()
    
    while (opcion!=0){

        if(opcion==1){
            mostrarPrecios()
        }
        else if(opcion==2){
            alert("Los destinos disponibles en el momento son los siguientes")
            comprarPasajes()
        }
        else{
            alert("Opcion invalida!")
        }
        alert("Que accion desea realizar?")
        opcion = pedirOpcion()
    }
    alert("Gracias por utilizar nuestro servicio!")
}

function pedirDestino(){
    let destino
    destino = parseInt(prompt("Elija una opción de destino:\n1-La Plata\n2-Rosario\n3-Pigüé\n4-Cordoba\n5-Tucuman\n0-Salir"))
    while (destino!=0 && destino!=1 && destino!=2 && destino!=3 && destino!=4 && destino!=5){
        destino = parseInt(prompt("Opcion inválida, recuerde las opciones son:\n1-La Plata\n2-Rosario\n3-Pigüé\n4-Cordoba\n5-Tucuman\n0-Salir"))
    }
    return destino
}

function pedirOpcion(){
    let opcion
    opcion = parseInt(prompt("Elija una opcion\n1-Ver precios\n2-Comprar pasajes\n0-Salir"))
    while (opcion<0 || opcion>2){
        opcion = parseInt(prompt("Opcion inválida, recuerde las opciones son:\n1-Ver precios\n2-Comprar pasajes\n0-Salir"))
    }
    return opcion
}

function mostrarPrecios(){
    let la_plata = "Buenos Aires - La Plata: $" + PRECIO_LAPLATA
    let rosario = "\nBuenos Aires - Rosario: $" + PRECIO_ROSARIO
    let pigue = "\nBuenos Aires - Pigüé: $" + PRECIO_PIGUE
    let cordoba = "\nBuenos Aires - Cordoba: $" + PRECIO_CORDOBA
    let tucuman = "\nBuenos Aires - Tucuman: $" + PRECIO_TUCUMAN
    alert(la_plata + rosario + pigue + cordoba + tucuman)
}

function comprarPasajes(){
    let opcion = pedirDestino()
    if(opcion!=0){
        let cantidadPasajeros = pedirCantidadPasajeros()
        let precioFinal = calcularPrecio(opcion, cantidadPasajeros)
        alert("El precio final es: $" + precioFinal)
        alert("Gracias por su compra, disfrute de su viaje!")
    }
}


function calcularPrecio(opcion, pasajeros){
    let precio = obtenerPrecio(opcion)
    alert("El precio del pasaje al destino seleccionado es de: $" + precio)
    let precioFinal = precio*pasajeros
    return precioFinal
}

function pedirCantidadPasajeros(){
    let cantidadPasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros: "))
    return cantidadPasajeros
}

function obtenerPrecio(opcion){
    let precio
    if(opcion==1){
        precio = PRECIO_LAPLATA
    }
    else if(opcion==2){
        precio = PRECIO_ROSARIO
    }
    else if(opcion==3){
        precio = PRECIO_PIGUE
    }
    else if(opcion==4){
        precio = PRECIO_CORDOBA
    }
    else{
        precio = PRECIO_TUCUMAN
    }
    return precio
}

main()