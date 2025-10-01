function carritoCompras() {
  let carrito = [];
  let maxProductos = 3;

  for (let i = 0; i < maxProductos; i++) {
    let producto = prompt(`Ingrese el nombre del producto ${i + 1}:`);
    let precio = parseFloat(prompt(`Ingrese el precio de ${producto}:`));

    // Validación básica
    if (producto && !isNaN(precio)) {
      carrito.push({ nombre: producto, precio: precio });
    } else {
      alert("Entrada inválida, no se agregó el producto.");
      
    }
  }

  // Mostrar productos y calcular total
  let total = 0;
  let detalle = "Productos en el carrito:";

  carrito.forEach((item, index) => {
  detalle += `\n${index + 1}. ${item.nombre} - $${item.precio}\n`;
    total += item.precio;
  });

  detalle += `Total a pagar: $${total}`;
  alert(detalle);
}

// Ejecutar la función
carritoCompras();
