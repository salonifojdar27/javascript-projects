
let iconCart = document.querySelector('.iconCart');
let body = document.querySelector('body');
let closebtn = document.querySelector('.close');
let products = document.querySelector('.products');
let listCart = document.querySelector('.listCart');
let quantityDisplay = document.querySelector('.quantity');
let totalDisplay = document.querySelector('.total');
let checkoutBtn = document.querySelector('.checkOut');

let cart = [];

const productsData = [
  {
    id: 1,
    name: "Formal Suit",
    image: "img1.avif",
    price: 1000,
  },
  {
    id: 2,
    name: "Casual Suit",
    image: "img2.webp",
    price: 800,
  },
  {
    id: 3,
    name: "Business Suit",
    image: "img3.webp",
    price: 1200,
  },
  {
    id: 4,
    name: "Wedding Suit",
    image: "img4.jpg",
    price: 1500,
  },
  {
    id: 5,
    name: "Designer Suit",
    image: "img5.jpg",
    price: 2000,
  },
  {
    id: 6,
    name: "Classic Suit",
    image: "img6.avif",
    price: 900,
  }
];

// Initialize the app
function init() {
  displayProducts();
  setupEventListeners();
  updateCart();
}

// Display all products
function displayProducts() {
  products.innerHTML = '';
  productsData.forEach((product, index) => {
    let div = document.createElement("div");
    div.classList.add("items");
    div.innerHTML = `
      <img src="images/${product.image}" />
      <div class="name">${product.name}</div>
      <div class="price">$${product.price}</div>
      <button onclick="addToCart(${product.id})">Add to cart</button>
    `;
    products.appendChild(div);
  });
}

// Add event listeners
function setupEventListeners() {
  iconCart.addEventListener('click', () => {
    body.classList.add("active");
  });

  closebtn.addEventListener('click', () => {
    body.classList.remove("active");
  });

  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert(`Thank you for your purchase! Total: $${calculateTotal()}`);
    cart = [];
    updateCart();
    body.classList.remove("active");
  });
}

// Add product to cart
function addToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  updateCart();
  body.classList.add("active");
}

// Remove product from cart
function removeFromCart(productId) {
  const index = cart.findIndex(item => item.id === productId);
  if (index !== -1) {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
    } else {
      cart.splice(index, 1);
    }
    updateCart();
  }
}

// Update cart display
function updateCart() {
  // Update cart count
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  quantityDisplay.textContent = count;

  // Update cart items
  if (cart.length === 0) {
    listCart.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
    totalDisplay.textContent = 'Total: $0';
    return;
  }

  listCart.innerHTML = '';
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cartItem');
    cartItem.innerHTML = `
      <img src="images/${item.image}" />
      <div class="details">
        <div class="name">${item.name}</div>
        <div class="price">$${item.price}</div>
      </div>
      <div class="quantity">
        <button onclick="removeFromCart(${item.id})">-</button>
        <span>${item.quantity}</span>
        <button onclick="addToCart(${item.id})">+</button>
      </div>
    `;
    listCart.appendChild(cartItem);
  });

  // Update total
  totalDisplay.textContent = `Total: $${calculateTotal()}`;
}

// Calculate total price
function calculateTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
