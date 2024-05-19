// toma los parametros que se pasaron en la url
const direccionUrl = new URL(location.href);
const parametroUrl = direccionUrl.searchParams.get("s").toLowerCase();

const filtroProvincia = document.getElementById("filtro-provincia");
leerBaseDatos(parametroUrl, filtroProvincia);

filtroProvincia.addEventListener("change", function() {
    leerBaseDatos(parametroUrl, filtroProvincia);
});
