/*
 * autor: Grupo 8
 * integrantes: Ignacio Flores, Juan Mercado, Juan José Scialfa y Carlos Musso
 * version:
 * fecha: 
 * El siguiente script sirve a unidades.html y se encarga de cargar los datos de baseDatos.json
 * y de mostrar las publicaciones acorde al filtro de provincia elegido en el select 
 * y al tipo de vehículo que vino como parámetro en la url
 */

function leerBaseDatos(parametroUrl, filtroProvincia) {
    let urlJson = "../js/baseDatos.json";

    // segun el parametro pasado en la url, se setea el filtro de la cateria y la carpeta en donde cargar las fotos
    let urlCarpetaFoto;
    let categoria;
    switch (parametroUrl) {
        case "1":
            urlCarpetaFoto = "../img/automoviles/";
            categoria = "Automóvil";
            break;
        case "2":
            urlCarpetaFoto = "../img/camionetas/";
            categoria = "Camioneta";
            break;
        case "3":
            urlCarpetaFoto = "../img/utilitarios/";
            categoria = "Utilitario";
            break;
        case "4":
            urlCarpetaFoto = "../img/motos/";
            categoria = "Moto";
            break;
        default:
            break;
    }
    
    fetch(urlJson)
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(datos) {
            // seleccionar el espacio de renderizado
            const contenedor = document.getElementById("lista-publicaciones");
            contenedor.innerHTML = ""; // Limpiar el contenido anterior
            
            // Variable para controlar si se encontraron publicaciones
            let hayPublicaciones = false;
            
            for (let p of datos.publicaciones) {
                if (filtroProvincia === "todas" || filtroProvincia.value === "todas" || p.provincia === filtroProvincia.value) {
                    if (p.rubro === categoria) {
                        hayPublicaciones = true; // Hay al menos una publicación
                        // Crea el elemento html
                        const article = document.createElement('article');
                        // Agrega estilo a article
                        article.classList.add("publicacion");
                        // Inyecta contenido a <article>
                        article.innerHTML = `
                            <div class="foto">
                                <img src=${urlCarpetaFoto + p.foto} alt="foto de la unidad" class="foto-tarjeta">
                            </div>
                            <div class="texto">
                                <p> <strong>${p.marca}</strong></p>
                                <p> ${p.modelo} </p>
                                <p> ${p.version} | ${p.anio} </p>
                                <p> ${p.kilometraje} Km.</p>
                                <p class="precio"> u$d ${p.precio} </p>
                                <a href="./ficha.html?s=${p.id}" class="mas-info">Mas Información</a>
                            </div>
                        `;
                        contenedor.appendChild(article);
                    }
                }
            }
            
            // Agregar mensaje si no hay publicaciones
            if (!hayPublicaciones) {
                const mensaje = document.createElement('p');
                mensaje.textContent = "No se encontraron vehículos en esta provincia.";
                mensaje.classList.add("mensaje-no-resultados");
                contenedor.appendChild(mensaje);
            }
        })
        .catch(function(error) {
            console.error(error);
        })
}
