const products = [
    { id: 1, name: "Product 1", price: 20, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Product 2", price: 35, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Product 3", price: 50, image: "https://via.placeholder.com/200" }
  ];
  
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
  }
  
  function addToCart(productId) {
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert("Product added to cart!");
  }
  
  function checkout() {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(`Thanks for your order of ${cart.length} item(s)!`);
    cart = [];
    localStorage.removeItem('cart');
    updateCartCount();
  }
  
  function displayProducts() {
    const productContainer = document.getElementById('products');
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productContainer.appendChild(div);
    });
  }
  
  // Initial setup
  displayProducts();
  updateCartCount();
  