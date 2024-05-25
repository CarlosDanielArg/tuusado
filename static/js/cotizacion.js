fetch("https://dolarapi.com/v1/dolares")
.then((response) => response.json())
.then((data) => {
    // el Json que devuelve la api contiene las distintas cotizaciones del dolar.
    // en el índice 0 se encuentra los datos del dólar oficial
    // en el índice 1 los datos del dólar informal
    // en los siguientes índices otros tipos de dólares como el Mep, el contado con liq. y el tarjeta
    // nosotros solo usaremos los dos primeros para mostrar el valor para la compra y para la venta.
    document.getElementById("oficial").innerHTML = `
    <span class="valor_dolar">
        <span class="bna">Dólar BNA:&nbsp</span> 
        <span class="compra">${data[0].compra.toFixed(2)}</span>&nbsp/&nbsp 
        <span class="venta">${data[0].venta.toFixed(2)}</span>
    </span>`;
    document.getElementById("informal").innerHTML = `
    <span class="valor_dolar">
        <span class="informal">Dólar informal:&nbsp</span> 
        <span class="compra">${data[1].compra.toFixed(2)}</span>&nbsp/&nbsp 
        <span class="venta">${data[1].venta.toFixed(2)}</span>
    </span>`;
})
.catch(function(error) {
    console.error(error);
});
