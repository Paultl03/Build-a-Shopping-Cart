const cherry = {
  name: "Cherry",
  price: 2.99,
  quantity: 0,
  productId: 1,
  image: "images/cherry.jpg"
};

const orange = {
  name: "Orange",
  price: 1.99,
  quantity: 0,
  productId: 2,
  image: "images/orange.jpg"
};

const strawberry = {
  name: "Strawberry",
  price: 3.49,
  quantity: 0,
  productId: 3,
  image: "images/strawberry.jpg"
};

// Array to store the products
const products = [cherry, orange, strawberry];

// Function to find a product by SKU
function findProductBySKU(sku) {
  return products.find(item => item.productId === sku);
}

// Sample cart array to hold the cart items
const cart = [];

// Function to render the cart (for demonstration purposes)
function renderCart() {
}

// Function to find a product by SKU and return it
function getProductBySKU(sku) {
  const product = findProductBySKU(sku);
  if (!product) {
    console.error("Product not found.");
    return null;
  }
  return product;
}

// Function to add a product to the cart
function addProductToCart(sku) {
  const product = getProductBySKU(sku);

  if (!product) {
    return;
  }

  const cartItem = cart.find(item => item.productId === sku);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
}

// Function to increase the quantity of a product in the cart
function increaseQuantity(sku) {
  const product = getProductBySKU(sku);

  if (!product) {
    return;
  }

  const cartItem = cart.find(item => item.productId === sku);

  if (cartItem) {
    cartItem.quantity++;
    renderCart();
  }
}

// Function to decrease the quantity of a product in the cart
function decreaseQuantity(sku) {
  const product = getProductBySKU(sku);

  if (!product) {
    return;
  }

  const cartItemIndex = cart.findIndex(item => item.productId === sku);

  if (cartItemIndex !== -1) {
    const cartItem = cart[cartItemIndex];
    if (cartItem.quantity === 1) {
      cart.splice(cartItemIndex, 1);
    } else {
      cartItem.quantity--;
    }
    renderCart();
  }
}

// Function to remove a product from the cart
function removeProductFromCart(sku) {
  const product = getProductBySKU(sku);

  if (!product) {
    return;
  }

  const cartItemIndex = cart.findIndex(item => item.productId === sku);

  if (cartItemIndex !== -1) {
    cart.splice(cartItemIndex, 1);
    renderCart();
  }
}

// Global variable to hold the total amount paid
let totalPaid = 0;

// Function to calculate the total cost of the items in the cart
function cartTotal() {
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
  });
  return total;
}

// Function to process payment and return the change or remaining balance
function pay(amountReceived) {
  totalPaid += amountReceived;
  const totalCost = cartTotal();
  const changeDue = totalPaid - totalCost;
  
  if (changeDue >= 0) {
    totalPaid = 0; // Reset totalPaid after transaction
    return changeDue;
  } else {
    return changeDue;
  }
}

// Test the functions
addProductToCart(1); // Adding cherry to cart
addProductToCart(2); // Adding orange to cart
increaseQuantity(1); // Increasing quantity of cherry
decreaseQuantity(1); // Decreasing quantity of cherry
decreaseQuantity(1); // Removing cherry from cart
removeProductFromCart(2); // Removing orange from cart


