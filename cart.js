const cartItemsContainer = document.querySelector('.cart-items');
const cartItems = localStorage.getItem('cart') ? 
    JSON.parse(localStorage.getItem('cart')) : [];

const orderButton = document.getElementById('order-button');
if (cartItems==null || cartItems.length==0) {
    orderButton.classList.add('disabled');
} else {
    orderButton.classList.remove('disabled');
}

for (let i=0; i<cartItems.length; i++) {
    cartItemsContainer.innerHTML = cartItemsContainer.innerHTML + `<div id=${'product-'+cartItems[i].id} class="menu-item">
      <img src=${cartItems[i].image} alt="menu1" class="menu-item-image">
      <div class="menu-item-details">
        <h1>${cartItems[i].title}</h1>
        <span>${cartItems[i].description}</span>
        <span class="price">Total Price: Rs. ${cartItems[i].price*cartItems[i].quantity}</span>
        <span>Quantity: Rs. ${cartItems[i].quantity}</span>
        <button id=${'button-'+cartItems[i].id} class="remove-from-cart hidden">Remove from Cart</button>
      </div>
    </div>`;
}

if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = '<h1>No items in cart</h1>';
}

const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
for (let i=0; i<removeFromCartButtons.length; i++) {
    removeFromCartButtons[i].addEventListener('click', function() {
        const productId = parseInt(removeFromCartButtons[i].id.split('-')[1]);
        // iterate over the cart items and decrease the quantity of the item
        // if the quantity is 1, remove the item from the cart
        const updatedCart = cartItems.map(item => {
            if (item.id === productId) {
                if (item.quantity > 1) {
                    item.quantity = item.quantity - 1;
                } else {
                    item.quantity = 0;
                }
            }
            return item;
        }).filter(item => item.quantity > 0);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        location.reload();
    });
}

orderButton.addEventListener('click', function() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart==null || cart.length==0) {
        return;
    }
    let orders = JSON.parse(localStorage.getItem('orders'));
    if (orders == null) {
        orders = [];
    }
    orders.push(cart);
    localStorage.setItem('orders', JSON.stringify(orders));
    alert("Order placed successfully");
    localStorage.removeItem('cart');
    // location.reload();
    location.assign('./orders.html/2');
});