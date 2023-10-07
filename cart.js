// Initialize the cart as an empty array
let cart = [];

// Sample product data (you can replace this with your actual product data)
const products = [
    {
        id: "1",
        name: "Samsung Galaxy S23",
        price: 70000,
        // Add more product details as needed
    },
    {
        id: "2",
        name: "Lenovo Legion 7",
        price: 115000,
        // Add more product details as needed
    },
];

// Function to get product details by ID
function getProductDetails(productId) {
    return products.find((product) => product.id === productId);
}

// Function to add a product to the cart
function addToCart(productDetails) {
    cart.push(productDetails);
    // You can also update the cart display here
    console.log("Item added to cart:", productDetails);
}

// Add event listeners to "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Get the product ID from the data attribute
        const productId = button.dataset.productId;

        // Find the product details based on the product ID
        const productDetails = getProductDetails(productId);

        // Add the product to the cart
        addToCart(productDetails);
        updateCartDisplay(); // Update the cart display when an item is added
    });
});
var x = document.getElementById('myDIV');
x.style.visibility = 'hidden';
function view_cart() {
    // Get the reference to the myDIV element
    
    // Check if the element is currently hidden
    if (x.style.visibility === 'hidden') {
      // If hidden, make the element visible
      x.style.visibility = 'visible';
    } else {
      // If visible, hide the element
      x.style.visibility = 'hidden';
    }
  }
// Function to update the cart display
function updateCartDisplay() {
    const cartItemsElement = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    // Clear the cart display
    cartItemsElement.innerHTML = "";

    // Display each item in the cart
    cart.forEach((product) => {
        const li = document.createElement("li");
        li.textContent = `${product.name} - Rs ${product.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });

    // Calculate and display the total price
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    cartTotalElement.textContent = `Rs ${total.toFixed(2)}`;
}

// Initial update of the cart display
updateCartDisplay();
