function menuAceites() {
  const productos = [
    { id: "1", nombre: "Aceite Muscular", precio: 150 },
    { id: "2", nombre: "Aceite Mujer", precio: 180 },
    { id: "3", nombre: "Aceite Hombre", precio: 170 },
    { id: "4", nombre: "Aceite Sexual", precio: 200 }
  ];

  let carrito = JSON.parse(localStorage.getItem("carrito")) || []; // Recuperar del localStorage si existe
  let totalProductos = carrito.length;
  let subtotal = carrito.reduce((acc, p) => acc + p.precio, 0);

  let opcion;

  do {
    let mensaje = "Selecciona un producto:\n";
    productos.forEach(p => {
      mensaje += `${p.id}. ${p.nombre} - $${p.precio}\n`;
    });
    mensaje += "5. Salir y ver total";

    opcion = prompt(mensaje);

    switch(opcion) {
      case "1":
      case "2":
      case "3":
      case "4":
        const producto = productos.find(p => p.id === opcion);

        carrito.push(producto); // Guardar en el arreglo
        localStorage.setItem("carrito", JSON.stringify(carrito)); // Guardar en localStorage

        totalProductos++;
        subtotal += producto.precio;

        console.log(`Agregaste ${producto.nombre}. Total productos: ${totalProductos}, Subtotal: $${subtotal}`);
        break;
      case "5":
        alert("Saliendo del menú...");
        break;
      default:
        alert("Opción inválida. Intenta de nuevo.");
    }

  } while(opcion !== "5");

  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  alert(
    `Resumen de tu compra:\n` +
    `Productos seleccionados: ${totalProductos}\n` +
    `Subtotal: $${subtotal.toFixed(2)}\n` +
    `IVA (16%): $${iva.toFixed(2)}\n` +
    `Total a pagar: $${total.toFixed(2)}`
  );
}
