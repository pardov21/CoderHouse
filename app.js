const productos = [
  { id: "1", nombre: "Aceite Muscular", precio: 150 },
  { id: "2", nombre: "Aceite Mujer", precio: 180 },
  { id: "3", nombre: "Aceite Hombre", precio: 170 },
  { id: "4", nombre: "Aceite Sexual", precio: 200 }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const productosDiv = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalesDiv = document.getElementById("totales");

function mostrarProductos() {
  productosDiv.innerHTML = "";
  productos.forEach(p => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
      <h3>${p.nombre}</h3>
      <p>Precio: $${p.precio}</p>
      <button onclick="agregarAlCarrito('${p.id}')">Agregar</button>
    `;
    productosDiv.appendChild(div);
  });
}

function mostrarCarrito() {
  listaCarrito.innerHTML = "";
  let subtotal = 0;

  carrito.forEach(p => {
    subtotal += p.precio;
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - $${p.precio}`;
    listaCarrito.appendChild(li);
  });

  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  totalesDiv.innerHTML = `
    Productos: ${carrito.length} <br>
    Subtotal: $${subtotal.toFixed(2)} <br>
    IVA (16%): $${iva.toFixed(2)} <br>
    Total: $${total.toFixed(2)}
  `;
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  localStorage.removeItem("carrito");
  mostrarCarrito();
}

mostrarProductos();
mostrarCarrito();
