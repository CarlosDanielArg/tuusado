fetch("https://dolarapi.com/v1/dolares")

.then((response) => response.json())
.then((data) => {
    // el Json que devuelve la api contiene las distintas cotizaciones del dolar.
    // en el índice 0 se encuentra los datos del dólar oficial
    // en el índice 1 los datos del dólar informal
    // en los siguientes índices otros tipos de dólares como el Mep, el contado con liq. y el tarjeta
    // nosotros solo usaremos los dos primeros para mostrar el valor para la compra y para la venta.
    document.getElementById("oficial").innerText = "Dólar BNA: " + data[0].compra + " / " + data[0].venta + '\u00A0' ;
    document.getElementById("informal").innerText = "Dólar informal: " + data[1].compra + " / " + data[1].venta;
})
.catch(function(error) {
    console.error(error);
})


