// console.log(window.location.href);
// console.log(window.location.search);

const urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams);

const productId = urlParams.get('id');

const product = menuItemsData.find(product => product.id == productId);
console.log(product);
const productName = document.getElementById('product-name');
productName.innerHTML = product.title;
const productDedscription = document.getElementById('product-description');
productDedscription.innerHTML = product.description;
const productImage = document.getElementById('product-image');
productImage.style.backgroundImage = `url(${product.image})`;
const productPrice = document.getElementById('product-price');
productPrice.innerHTML = `Price: &#x20B9; ${product.price}`;