let Buscar = document.querySelector('.Buscar');
let Usuario = document.querySelector('.Usuario');
let header = document.querySelector('header');
let Menu = document.querySelector('.Menu');

// MENU
document.querySelector('#Icono-Buscar').onclick = () => {
    Buscar.classList.toggle('active');
    Usuario.classList.remove('active');
    Menu.classList.remove('active');
}


document.querySelector('#Icono-Usuario').onclick = () => {
    Usuario.classList.toggle('active');
    Buscar.classList.remove('active');
    Menu.classList.remove('active');
}

document.querySelector('#Icono-Menu').onclick = () => {
    Menu.classList.toggle('active');
    Buscar.classList.remove('active');
    Usuario.classList.remove('active');
}

window.onscroll = () => {
    Buscar.classList.remove('active');
    Usuario.classList.remove('active');
    Menu.classList.remove('active');
}

// window.addEventListener('scroll', () => {
//     header.classList.toggle('shadow', window.scrollY > 0);
// });

// PAGINACION
let thisPage = 1;
let limite = 6;
let lista = document.querySelectorAll('.list .Producto');

function CargarProducto() {
    let beginGet = limite * (thisPage - 1);
    let endGet = limite * thisPage - 1;
    
    lista.forEach((Producto, key) => {
        if (key >= beginGet && key <= endGet) {
            Producto.style.display = 'block';
        } else {
            Producto.style.display = 'none';
        }
    });
    
    ListarPagina();
}

CargarProducto();

function ListarPagina() {
    let options = ['Salud', 'Bebidas', 'Higiene y Belleza', 'Bebés', 'Alimentos']; 
    let menuContainer = document.querySelector('.Nuevo .Encabezado .Menu'); 

    menuContainer.innerHTML = '';

    for (let i = 0; i < options.length; i++) {
        let menuItem = document.createElement('li');
        menuItem.innerText = options[i];
        menuItem.style.cursor = 'pointer';
        if (i + 1 === thisPage) {
            menuItem.classList.add('Activa');
        }
        menuItem.setAttribute('onclick', "CambiarPagina(" + (i + 1) + ")");
        menuContainer.appendChild(menuItem);
    }
}

function CambiarPagina(i) {
    thisPage = i;
    CargarProducto();
}

