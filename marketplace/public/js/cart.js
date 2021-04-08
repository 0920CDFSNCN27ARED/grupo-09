function add_product(product) {
  const productId = product.id;

  const localStorageValue = localStorage.getItem('urza-cart');
  const cart = localStorageValue ? JSON.parse(localStorageValue) : [];

  const prod = cart.find((prod) => {
    return prod.id == productId;
  });

  cart.push({
    id: productId,
  });

  localStorage.setItem('urza-cart', JSON.stringify(cart));
  swal('Éxito!', 'El producto fue añadido al carrito.', 'success');
}
