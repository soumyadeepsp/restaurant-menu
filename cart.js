const cartItemsContainer = document.querySelector('.cart-items');
const cartItems = localStorage.getItem('cart') ? 
    JSON.parse(localStorage.getItem('cart')) : [];

for (let i=0; i<cartItems.length; i++) {
    cartItemsContainer.innerHTML = cartItemsContainer.innerHTML + `<div id=${'product-'+cartItems[i].id} class="menu-item">
      <img src=${cartItems[i].image} alt="menu1" class="menu-item-image">
      <div class="menu-item-details">
        <h1>${cartItems[i].title}</h1>
        <span>${cartItems[i].description}</span>
        <span class="price">Price: Rs. ${cartItems[i].price}</span>
        <button id=${'button-'+cartItems[i].id} class="add-to-cart hidden">Add to Cart</button>
      </div>
    </div>`;
}

if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = '<h1>No items in cart</h1>';
}