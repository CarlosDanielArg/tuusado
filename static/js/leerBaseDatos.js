function leerBaseDatos(parametroUrl, filtroProvincia) {
    let urlJson = "../js/baseDatos.json";

    // segun el parametro pasado en la url, se setea el filtro de la cateria y la carpeta en donde cargar las fotos
    let urlCarpetaFoto;
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
                        
            for (let p of datos.publicaciones) {
                if (filtroProvincia.value === "todas") {
                    if (p.rubro === categoria) {
                        //console.log(p.id, p.marca, p.modelo, p.provincia);
                        //Crea el elemento html
                        const article = document.createElement('article');
                        //Agrega estilo a article
                        article.classList.add("publicacion");
                        //Inyecta contenido a <article>
                        article.innerHTML = `
                            <div class="foto">
                                <img src=${urlCarpetaFoto + p.foto} alt="foto de la unidad" class="foto-tarjeta">
                            </div>
                            <div class="texto">
                                <p> <strong>${p.marca}</strong></p>
                                <p> ${p.modelo} </p>
                                <p> ${p.version} | ${p.anio} </p>
                                <p> ${p.version} | ${p.anio} </p>
                                <p> ${p.kilometraje} Km.</p>
                                <p class="precio"> u$d ${p.precio} </p>
                                <a href="./ficha.html?s=${p.id}" class="mas-info">Mas Información</a>
                            </div>
                        `;
                        contenedor.appendChild(article);
                    }
                } else {
                    if ((p.rubro === categoria) && (p.provincia === filtroProvincia.value)) {
                        //console.log(p.id, p.marca, p.modelo, p.provincia);
                        //Crea el elemento html
                        const article = document.createElement('article');
                        //Agrega estilo a article
                        article.classList.add("publicacion");
                        //Inyecta contenido a <article>
                        article.innerHTML = `
                            <div class="foto">
                                <img src=${urlCarpetaFoto + p.foto} alt="foto de la unidad" class="foto-tarjeta">
                            </div>
                            <div class="texto">
                                <p> <strong>${p.marca}</strong></p>
                                <p> ${p.modelo} </p>
                                <p> ${p.version} | ${p.anio} </p>
                                <p> ${p.version} | ${p.anio} </p>
                                <p> ${p.kilometraje} Km.</p>
                                <p class="precio"> u$d ${p.precio} </p>
                                <a href="./ficha.html?s=${p.id}" class="mas-info">Mas Información</a>
                            </div>
                        `;
                        contenedor.appendChild(article);

                }
            }            }
        })
        .catch(function(error) {
            console.error(error);
        })
}