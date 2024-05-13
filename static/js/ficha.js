function cargarBD() {
    
    // Creación del JSON

    let jsonPublicaciones = `{
        "Pub01": {
            "id": 1,
            "rubro": "Automóvil",
            "marca": "Renault Sandero",
            "modelo": "1.6 8V Tech Run",
            "anio": 2014,
            "version": "Nafta",
            "kilometraje": 65000,
            "estado": "excelente",
            "precio": 7900,
            "foto": "foto01.jpg",
            "nombre": "Julian Alvarez",
            "email": "jalvarez@mail.com",
            "telefono": "555 454 8823",
            "provincia": "Córdoba"
        },
        "Pub02": {
            "id": 2,
            "rubro": "Automóvil",
            "marca": "Peugeot 308",
            "modelo": "1.6 Allure Nav",
            "anio": 2013,
            "version": "Nafta",
            "kilometraje": 91000,
            "estado": "excelente",
            "precio": 11000,
            "foto": "foto02.jpg",
            "nombre": "Leandro Paredes",
            "email": "lparedes@mail.com",
            "telefono": "555 518 0527",
            "provincia": "Salta"
        },
        "Pub03": {
            "id": 3,
            "rubro": "Automóvil",
            "marca": "Ford Mondeo",
            "modelo": "2.0 SEL Ecoboost AT",
            "anio": 2020,
            "version": "Nafta",
            "kilometraje": 38000,
            "estado": "excelente",
            "precio": 26400,
            "foto": "foto03.jpg",
            "nombre": "Emiliano Martinez",
            "email": "emartinez@mail.com",
            "telefono": "555 335 0182",
            "provincia": "Buenos Aires"
        },
        "Pub04": {
            "id": 4,
            "rubro": "Automóvil",
            "marca": "Toyota Corolla",
            "modelo": "1.8 Se-g AT",
            "anio": 2012,
            "version": "Nafta",
            "kilometraje": 120000,
            "estado": "bueno",
            "precio": 12000,
            "foto": "foto04.jpg",
            "nombre": "Rodrigo De Paul",
            "email": "rdepaul@mail.com",
            "telefono": "555 665 9912",
            "provincia": "Córdoba"
        },
        "Pub05": {
            "id": 5,
            "rubro": "Camioneta",
            "marca": "Volkswagen Amarok",
            "modelo": "2.0TD 4x4 C/D Highline Pack 180 cv",
            "anio": 2012,
            "version": "Diesel",
            "kilometraje": 216000,
            "estado": "bueno",
            "precio": 20000,
            "foto": "foto01.jpg",
            "nombre": "Guido Rodriguez",
            "email": "grodriguez@mail.com",
            "telefono": "555 563 6104",
            "provincia": "Santa Fé"
        },
        "Pub06": {
            "id": 6,
            "rubro": "Camioneta",
            "marca": "Chevrolet S10",
            "modelo": "High Country 2.8 TD 4x2 C/D",
            "anio": 2016,
            "version": "Diesel",
            "kilometraje": 133000,
            "estado": "excelente",
            "precio": 22500,
            "foto": "foto02.jpg",
            "nombre": "Lautaro Martinez",
            "email": "lmartinez@mail.com",
            "telefono": "555 326 9402",
            "provincia": "Buenos Aires"
        },
        "Pub07": {
            "id": 7,
            "rubro": "Camioneta",
            "marca": "Toyota Hilux",
            "modelo": "2.8 C/D 4x4 TDi SR 177 cv",
            "anio": 2016,
            "version": "Diesel",
            "kilometraje": 98000,
            "estado": "excelente",
            "precio": 27500,
            "foto": "foto03.jpg",
            "nombre": "Nahuel Molina",
            "email": "nmolina@mail.com",
            "telefono": "555 445 0003",
            "provincia": "Salta"
        },
        "Pub08": {
            "id": 8,
            "rubro": "Camioneta",
            "marca": "Nissan Frontier",
            "modelo": "2.3 C/D 4x4 S",
            "anio": 2021,
            "version": "Diesel",
            "kilometraje": 82000,
            "estado": "excelente",
            "precio": 24500,
            "foto": "foto04.jpg",
            "nombre": "Lionel Messi",
            "email": "lmessi@mail.com",
            "telefono": "555 486 1010",
            "provincia": "Santa Fé"
        },
        "Pub09": {
            "id": 9,
            "rubro": "Utilitario",
            "marca": "Peugeot Partner",
            "modelo": "Patagónica 1.6 HDi VTC Plus",
            "anio": 2015,
            "version": "Diesel",
            "kilometraje": 83000,
            "estado": "bueno",
            "precio": 11900,
            "foto": "foto01.jpg",
            "nombre": "Angel Di María",
            "email": "fideo@mail.com",
            "telefono": "555 606 6487",
            "provincia": "Santa Fé"
        },
        "Pub10": {
            "id": 10,
            "rubro": "Utilitario",
            "marca": "Renault Master",
            "modelo": "2.5 DCI F/corto Pack Eléctrico",
            "anio": 2011,
            "version": "Diesel",
            "kilometraje": 147000,
            "estado": "regular",
            "precio": 16000,
            "foto": "foto02.jpg",
            "nombre": "Nicolás Otamendi",
            "email": "nicootamendi@mail.com",
            "telefono": "555 560 9010",
            "provincia": "Córdoba"
        },
        "Pub11": {
            "id": 11,
            "rubro": "Utilitario",
            "marca": "Mercedes Benz Sprinter",
            "modelo": "Furgón 3250 V1 Street",
            "anio": 2023,
            "version": "Diesel",
            "kilometraje": 0,
            "estado": "excelente",
            "precio": 40000,
            "foto": "foto03.jpg",
            "nombre": "Gonzalo Montiel",
            "email": "gmontiel@mail.com",
            "telefono": "555 551 1325",
            "provincia": "Buenos Aires"
        },
        "Pub12": {
            "id": 12,
            "rubro": "Utilitario",
            "marca": "Renault Kangoo",
            "modelo": "Il Furgón 1.6 1 PLC Confort",
            "anio": 2016,
            "version": "GNC",
            "kilometraje": 98000,
            "estado": "regular",
            "precio": 10900,
            "foto": "foto04.jpg",
            "nombre": "Enzo Fernández",
            "email": "efernandez@mail.com",
            "telefono": "555 688 5410",
            "provincia": "Córdoba"
        },
        "Pub13": {
            "id": 13,
            "rubro": "Moto",
            "marca": "Yamaha TTR",
            "modelo": "230 T - Enduro",
            "anio": 2018,
            "version": "Nafta",
            "kilometraje": 500,
            "estado": "excelente",
            "precio": 4500,
            "foto": "foto01.jpg",
            "nombre": "Cristian Romero",
            "email": "cromero@mail.com",
            "telefono": "555 540 9411",
            "provincia": "Salta"
        },
        "Pub14": {
            "id": 14,
            "rubro": "Moto",
            "marca": "BMW F",
            "modelo": "700 GS Full - Turismo",
            "anio": 2016,
            "version": "Nafta",
            "kilometraje": 33000,
            "estado": "excelente",
            "precio": 23500,
            "foto": "foto02.jpg",
            "nombre": "Paulo Dybala",
            "email": "pdybala@mail.com",
            "telefono": "555 490 1165",
            "provincia": "Salta"
        },
        "Pub15": {
            "id": 15,
            "rubro": "Moto",
            "marca": "Honda CB",
            "modelo": "125 Twister - Calle",
            "anio": 2023,
            "version": "Nafta",
            "kilometraje": 7000,
            "estado": "excelente",
            "precio": 1700,
            "foto": "foto03.jpg",
            "nombre": "Alexis Mac Allister",
            "email": "amacallister@mail.com",
            "telefono": "555 698 0541",
            "provincia": "Buenos Aires"
        },
        "Pub16": {
            "id": 16,
            "rubro": "Moto",
            "marca": "Harley Davidson",
            "modelo": "Street Glide 115 aniversario - Chopera",
            "anio": 2018,
            "version": "Nafta",
            "kilometraje": 50000,
            "estado": "excelente",
            "precio": 68000,
            "foto": "foto04.jpg",
            "nombre": "Giovani Lo Celso",
            "email": "giolocelso@mail.com",
            "telefono": "555 445 1126",
            "provincia": "Santa Fé"
        }
    }`;
    
    // se convierte los datos de json a un objeto
    let publicacionesObj = JSON.parse(jsonPublicaciones);
    return publicacionesObj;
}

let publicaciones = cargarBD(); 

// creación de un array de publicaciones
let arrayPublicaciones = [];
arrayPublicaciones.push(publicaciones.Pub01);
arrayPublicaciones.push(publicaciones.Pub02);
arrayPublicaciones.push(publicaciones.Pub03);
arrayPublicaciones.push(publicaciones.Pub04);
arrayPublicaciones.push(publicaciones.Pub05);
arrayPublicaciones.push(publicaciones.Pub06);
arrayPublicaciones.push(publicaciones.Pub07);
arrayPublicaciones.push(publicaciones.Pub08);
arrayPublicaciones.push(publicaciones.Pub09);
arrayPublicaciones.push(publicaciones.Pub10);
arrayPublicaciones.push(publicaciones.Pub11);
arrayPublicaciones.push(publicaciones.Pub12);
arrayPublicaciones.push(publicaciones.Pub13);
arrayPublicaciones.push(publicaciones.Pub14);
arrayPublicaciones.push(publicaciones.Pub15);
arrayPublicaciones.push(publicaciones.Pub16);

// toma los parametros que se pasaron en la url
const direccionUrl = new URL(location.href);
const parametroUrl = direccionUrl.searchParams.get("s").toLowerCase();

// busca en la array una publicación que coincida con el parámetro pasado en la url
// y crea un objeto "usado" con los datos de la publicación encontrada
let usado;
for (let aviso of arrayPublicaciones) {
    if (aviso.id === parseInt(parametroUrl)) {
        usado = aviso;
        break;
    }
}

let urlFoto;
switch (usado.rubro) {
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
urlFoto += usado.foto;

document.getElementById("foto").src = urlFoto;


// Modifica los textos de los <p> para mostrar los datos del usado publicado
document.getElementById("marca").innerText = usado.marca;
document.getElementById("modelo").innerText = usado.modelo;
document.getElementById("kilometraje").innerText = usado.kilometraje + " Km";
document.getElementById("version-anio").innerText = usado.version + " | " + usado.anio;
document.getElementById("estado").innerText = "Estado del interior: " + usado.estado;
document.getElementById("precio").innerText = "u$s " + usado.precio;

// Modifica los textos de los <p> para mostrar los datos del titular del usado publicado
document.getElementById("nombre").innerText = "Nombre y Apellido: " + usado.nombre;
document.getElementById("email").innerText = "Correo electrónico: " + usado.email;
document.getElementById("telefono").innerText = "Teléfono: " + usado.telefono;
document.getElementById("provincia").innerText = "Provincia: " + usado.provincia;


