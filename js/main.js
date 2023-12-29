/*
- Implementación JSON y Storage
- Modificación del DOM
- Detección de eventos
*/

// Stock del minimarket
const producto = [
    {nombre: "fideos", categoria: "alimento", cantidad: 20, precio: 900, img: "https://cdn.dimerc.cl/media/catalog/product/cache/1/thumbnail/x600/040ec09b1e35df139433887a97daa66f/7/7/7766c5268c258fcbbb7b51f3c91071e8.jpg"},
    {nombre: "arroz", categoria: "alimento", cantidad: 15, precio: 1500, img: "https://jumbo.vtexassets.com/arquivos/ids/395818/Arroz-grado-1-envase-degradable-2-kg.jpg"},
    {nombre: "atún", categoria: "alimento", cantidad: 30, precio: 1300, img: "https://orizoncl.vtexassets.com/arquivos/ids/159805/BANNER-HERO-1000x1000_-NUEVA63.jpg"},
    {nombre: "aceite", categoria: "alimento", cantidad: 10, precio: 2500, img: "https://r.btcdn.co/r/eyJzaG9wX2lkIjo0MDY0LCJnIjoiMTAwMHgifQ/f94f9d776de57d4/653371-7790272001005.jpg"},
    {nombre: "sal", categoria: "alimento", cantidad: 12, precio: 500, img: "https://www.salcaribe.cl/wp-content/uploads/2020/04/bolsa-lobos-gruesa-10x1kg.jpg"},
    {nombre: "azúcar", categoria: "alimento", cantidad: 9, precio: 1200, img: "https://santaisabel.vtexassets.com/arquivos/ids/189631/Azucar-blanca-granulada-1-kg.jpg"},
    {nombre: "lavalozas", categoria: "limpieza", cantidad: 6, precio: 2200, img: "https://cugat.cl/wp-content/uploads/2021/04/7805000115906-2.jpg"},
    {nombre: "esponja", categoria: "limpieza", cantidad: 23, precio: 300, img: "https://www.grupoegle.cl/wp-content/uploads//2016/09/ESPONJA-DE-LOZA-NOBEL.jpg"},
    {nombre: "virutilla", categoria: "limpieza", cantidad: 8, precio: 2000, img: "https://www.grupoegle.cl/wp-content/uploads//2019/06/VIRUTILLA-PLATA-NOBEL.jpg"},
    {nombre: "cloro", categoria: "limpieza", cantidad: 8, precio: 1200, img: "https://almaceniquique.cl/wp-content/uploads/2021/02/336612.jpg"},
    {nombre: "papel higénico", categoria: "baño", cantidad: 30, precio: 800, img: "https://alvicl.vtexassets.com/arquivos/ids/157882/Papel-higienico-doble-hoja-24-un.jpg"},
    {nombre: "pasta de dientes", categoria: "baño", cantidad: 10, precio: 1300, img: "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750103591102L.jpg"},
    {nombre: "peineta", categoria: "baño", cantidad: 6, precio: 2000, img: "https://casadelestilista.cl/cdn/shop/products/01-15-006.png"},
    {nombre: "cepillo de dientes", categoria: "baño", cantidad: 9, precio: 1100, img: "https://kuru-ko.cl/cdn/shop/products/cepillo-dientes-extra-suave_2000x.jpg"},
];

localStorage.setItem("minimarket",JSON.stringify(producto));
let minimarket = JSON.parse(localStorage.getItem("minimarket"));

// console.log(minimarket);

// Visualización de todos los productos en el DOM
let productos = document.querySelector("#productos");

let productosHTML = (item) => {
    return `
    <div class="conteiner gap-2 ml-2" style="width: 10rem;">
        <img src="${item.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h3 class="card-title text-2xl text-center"><strong>${item.nombre[0].toLocaleUpperCase() + item.nombre.slice(1)}</strong></h3>
            <p class="card-text text-center">Categoría: ${item.categoria[0].toLocaleUpperCase() + item.categoria.slice(1)}</p>
            <p class="card-text text-center">Precio: $ ${item.precio}</p>
        </div>
    </div>
    `;
};

let mostrarProductos = minimarket.map(productosHTML);
productos.innerHTML = mostrarProductos.join("");


let formulario = document.getElementById("formulario").addEventListener('submit', busqueda);

// Función de búsqueda que realiza un filtro según las categorías disponibles.
function busqueda(evt) {
    evt.preventDefault();
    let valorUsuario = document.getElementById('busqueda').value;
    // console.log(valorUsuario);
    if (valorUsuario) {
        let filtrar = minimarket.filter( (item) => {
            return item.categoria == valorUsuario;
        });
        let resultado = (valor) => {
            return`
            <li>${valor.nombre}: $ ${valor.precio}</li>
        `};
        
        let titulo = `
            <h2><u>Categoría: ${valorUsuario[0].toLocaleUpperCase() + valorUsuario.slice(1)}</u></h2>
        `

        let mostrarFiltrado = filtrar.map(resultado);
        let respuesta = document.querySelector('#respuesta');
        respuesta.innerHTML = titulo + mostrarFiltrado.join("");
        
    };
};


let formularioProductos = document.getElementById("formularioProductos").addEventListener('submit', busquedaProductos);

// Función de búsqueda que realiza un filtro según las categorías disponibles.
function busquedaProductos(evt) {
    evt.preventDefault();
    let valorUsuario = document.getElementById('busquedaProducto').value;
    // console.log(valorUsuario);
    if (valorUsuario) {
        let filtro = minimarket.filter( (item) => {
            return item.nombre == valorUsuario;
        });
        let resultado = (valor) => {
            return`
            <h2><u>Categoría: ${valor.categoria[0].toLocaleUpperCase() + valor.categoria.slice(1)}</u></h2>
            <li>${valor.nombre[0].toLocaleUpperCase() + valor.nombre.slice(1)}: $ ${valor.precio}, cantidad en local: ${valor.cantidad}</li>
        `};
        
        let titulo = `
            
        `

        let mostrarFiltrado = filtro.map(resultado);
        let respuesta = document.querySelector('#respuestaProductos');
        respuesta.innerHTML = titulo + mostrarFiltrado.join("");
        
    };
};