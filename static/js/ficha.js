// toma los parametros que se pasaron en la url
const direccionUrl = new URL(location.href);
const parametroUrl = direccionUrl.searchParams.get("s").toLowerCase();
let urlFoto;

// Carga el JSON
let urlJson = "../js/baseDatos.json";
fetch(urlJson)
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(datos) {
        // busca en la array una publicación que coincida con el parámetro pasado en la url
        // y muestra los datos con la publicación encontrada
        for (let p of datos.publicaciones) {
            if (p.id === parseInt(parametroUrl)) {
                switch (p.rubro) {
                    case "Automóvil":
                        urlFoto = "../img/automoviles/"
                        break;
                    case "Camioneta":
                        urlFoto = "../img/camionetas/"
                        break;
                    case "Utilitario":
                        urlFoto = "../img/utilitarios/"
                        break;
                    case "Moto":
                        urlFoto = "../img/motos/"
                        break;
                    default:
                        break;
                }

                // inserta la url de la foto en el img para que la cargue
                urlFoto += p.foto;

                document.getElementById("foto").src = urlFoto;


                // Modifica los textos de los <p> para mostrar los datos del usado publicado
                document.getElementById("marca").innerText = p.marca;
                document.getElementById("modelo").innerText = p.modelo;
                document.getElementById("kilometraje").innerText = p.kilometraje + " Km";
                document.getElementById("version-anio").innerText = p.version + " | " + p.anio;
                document.getElementById("estado").innerText = p.estado;
                document.getElementById("precio").innerText = "u$d " + p.precio;

                // Modifica los textos de los <p> para mostrar los datos del titular del usado publicado
                document.getElementById("nombre").innerText = p.nombre;
                document.getElementById("email").innerText = p.email;
                document.getElementById("telefono").innerText = p.telefono;
                document.getElementById("provincia").innerText = p.provincia;
                                
                break;
            }
        }
    })
    .catch(function(error) {
        console.error(error);
    })
