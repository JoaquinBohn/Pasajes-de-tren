let fechaHoy = "12/11/2022"

let viajes = [
    {idViaje : 0, destino : "La Plata", precio : 200 , fecha : "09/11/2022", pasajes : 10 }, 
    {idViaje : 1, destino : "La Plata", precio : 200 , fecha : "15/11/2022", pasajes : 10 }, 
    {idViaje : 2, destino : "Rosario", precio : 800 , fecha : "17/11/2022", pasajes : 78 }, 
    {idViaje : 3, destino : "Pigue", precio : 700 , fecha : "19/11/2022", pasajes : 103 }, 
    {idViaje : 4, destino : "Cordoba", precio : 950 , fecha : "25/11/2022", pasajes : 55 }, 
    {idViaje : 5, destino : "Tucuman", precio : 1240 , fecha : "29/11/2022", pasajes : 12 }, 
    {idViaje : 6, destino : "La Plata", precio : 200 , fecha : "02/12/2022", pasajes : 1 }, 
    {idViaje : 7, destino : "Rosario", precio : 800 , fecha : "06/12/2022", pasajes : 94 }, 
    {idViaje : 8, destino : "Cordoba", precio : 950 , fecha : "15/12/2022", pasajes : 31 }, 
    {idViaje : 9, destino : "Rosario", precio : 800 , fecha : "15/12/2022", pasajes : 5 }, 
    {idViaje : 10, destino : "La Plata", precio : 200 , fecha : "21/12/2022", pasajes : 0 }, 
    {idViaje : 11, destino : "Cordoba", precio : 950 , fecha : "03/01/2023", pasajes : 213 }, 
    {idViaje : 12, destino : "Pigue", precio : 700 , fecha : "05/01/2023", pasajes : 151 }, 
    {idViaje : 13, destino : "Tucuman", precio : 1240 , fecha : "17/01/2023", pasajes : 98 }, 
    {idViaje : 14, destino : "La Plata", precio : 200 , fecha : "18/01/2023", pasajes : 209 } 
]

function main(){
    
    alert("Bienvenido a ventas de pasajes de tren.")
    alert("Que accion desea realizar?")
    let opcion = pedirOpcion()
    
    while (opcion!=0){
        actualizarViajes()

        if(opcion==1){
            mostrarViajes()
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
    opcion = parseInt(prompt("Elija una opcion\n1-Ver viajes\n2-Comprar pasajes\n0-Salir"))
    while (opcion<0 || opcion>2){
        opcion = parseInt(prompt("Opcion inválida, recuerde las opciones son:\n1-Ver viajes\n2-Comprar pasajes\n0-Salir"))
    }
    return opcion
}

function mostrarViajes(){
    let vista = ''
    for(const viaje of viajes){
        let destino = `Destino a ${viaje.destino} el día ${viaje.fecha}. ${viaje.pasajes} asientos disponibles con un valor de $${viaje.precio}\n\n`
        vista += destino
    }
    alert(vista)
}

function comprarPasajes(){
    let opcion = pedirDestino()
    if(opcion!=0){
        let viajesFiltrados = filtrarViajes(opcion)
        
        let viajeSeleccionado = seleccionarViaje(viajesFiltrados)
        if(viajeSeleccionado!=0){
            let cantidadPasajeros = pedirCantidadPasajeros(viajeSeleccionado)
            let precioFinal = calcularPrecio(viajeSeleccionado, cantidadPasajeros)
            alert(`El precio final es: $${precioFinal}`)
            alert("Gracias por su compra, disfrute de su viaje!")
        }
        else{
            alert("Operacion cancelada.")
        }
    }
}

function filtrarViajes(opcion){
    let destinos = ["La Plata", "Rosario", "Pigue", "Cordoba", "Tucuman"]
    let destinosFiltrados = []
    for (const viaje of viajes) {
        if(viaje.destino == destinos[opcion-1]){
            destinosFiltrados.push(viaje)
        }
    }
    return destinosFiltrados
}

function mostrarViajesFiltrados(destinosFiltrados){
    let vista = ''
    let i = 1
    for(const viaje of destinosFiltrados){
        let destino = `${i}-Destino a ${viaje.destino} el día ${viaje.fecha}. ${viaje.pasajes} asientos disponibles con un valor de $${viaje.precio}\n\n`
        vista += destino
        i++
    }
    let opcion = prompt(`Los viajes disponibles al destino seleccionado son:\n${vista}`)
    return opcion
}

function seleccionarViaje(destinosFiltrados){
    let viaje = 0
    alert("Elija una opcion de viaje - 0 para salir")
    let opcion = mostrarViajesFiltrados(destinosFiltrados)
    while(opcion>destinosFiltrados.length){
        alert("Opcion invalida, vuelva a intentar")
        let opcion = mostrarViajesFiltrados(destinosFiltrados)
    }
    if(opcion!=0){
        viaje = destinosFiltrados[opcion-1]
    }

    return viaje

}

function calcularPrecio(viaje, pasajeros){
    let precio = viaje.precio
    alert("El precio del pasaje al destino seleccionado es de: $" + precio)
    let precioFinal = precio*pasajeros
    return precioFinal
}

function pedirCantidadPasajeros(destinoSeleccionado){
    let asientosDisponibles = destinoSeleccionado.pasajes
    alert(`Asientos disponibles: ${asientosDisponibles}`)
    let cantidadPasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros: "))
    while(cantidadPasajeros<1 || cantidadPasajeros>asientosDisponibles){
        cantidadPasajeros = parseInt(prompt("Ingrese una cantidad de pasajeros válida: "))
    }
    let indice = viajes.indexOf(destinoSeleccionado)
    viajes[indice].pasajes = asientosDisponibles - cantidadPasajeros
    return cantidadPasajeros
}


class Fecha {
    constructor(fecha){
        this.dia = parseInt(fecha[0] + fecha[1])
        this.mes = parseInt(fecha[3] + fecha[4])
        this.anio = parseInt(fecha[6] + fecha[7] + fecha[8] + fecha[9])
    }

    caduco(fecha){
        const fechaActual = new Fecha(fecha)
        let respuesta = true
        if(this.anio > fechaActual.anio){
            respuesta = false
        }
        else if(this.anio == fechaActual.anio){
            if(this.mes > fechaActual.mes){
                respuesta = false
            }
            else if(this.mes == fechaActual.mes && this.dia >= fechaActual.dia){
                respuesta = false
            }
        }
        return respuesta
    }
}

function actualizarViajes(){
    for (const viaje of viajes) {
        let fechaViaje = new Fecha(viaje.fecha)
        if(fechaViaje.caduco(fechaHoy) || viaje.pasajes<1){
            let indice = viajes.indexOf(viaje)
            viajes.splice(indice, 1)
        }
    }
}

main()