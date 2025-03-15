console.log(menuItemsData);

const menuButtons = document.querySelectorAll('.menu-search-categories button');

for (let i=0; i<menuButtons.length; i++) {
  menuButtons[i].addEventListener('click', function() {
    for (let j=0; j<menuButtons.length; j++) {
      menuButtons[j].classList.remove('active');
    }
    menuButtons[i].classList.add('active');
  });
}

const menuItems = document.querySelectorAll('.menu-item');
console.log(menuItems);
for (let i=0; i<menuItems.length; i++) {
  menuItems[i].addEventListener('onmouseover', function() {
    console.log(menuItems[i]);
  });
}

const menuItemsContainer = document.querySelector('.menu-items');
for (let i=0; i<menuItemsData.length; i++) {
  menuItemsContainer.innerHTML = menuItemsContainer.innerHTML + `<div id=${'product-'+menuItemsData[i].id} class="menu-item">
      <img src=${menuItemsData[i].image} alt="menu1" class="menu-item-image">
      <div class="menu-item-details">
        <h1>${menuItemsData[i].title}</h1>
        <span>${menuItemsData[i].description}</span>
        <span class="price">Price: Rs. ${menuItemsData[i].price}</span>
        <button id=${'button-'+menuItemsData[i].id} class="add-to-cart hidden">Add to Cart</button>
      </div>
    </div>`;
  // let menuItem = document.createElement('div');
  // menuItem.classList.add('menu-item');
  // menuItemsContainer.appendChild(menuItem);
  // let image = document.createElement('img');
  // image.src = menuItemsData[i].image;
  // image.alt = 'menu1';
  // image.classList.add('menu-item-image');
  // menuItem.appendChild(image);
  // let details = document.createElement('div');
  // details.classList.add('menu-item-details');
  // menuItem.appendChild(details);
  // let title = document.createElement('h1');
  // title.innerText = menuItemsData[i].title;
  // details.appendChild(title);
  // let description = document.createElement('span');
  // description.innerText = menuItemsData[i].description;
  // details.appendChild(description);
  // let price = document.createElement('span');
  // price.innerText = `Price: Rs. ${menuItemsData[i].price}`;
  // price.classList.add('price');
  // details.appendChild(price);
  // let button = document.createElement('button');
  // button.id = menuItemsData[i].id;
  // button.classList.add('add-to-cart');
  // button.innerText = 'Add to Cart';
  // button.classList.add('hidden');
  // details.appendChild(button);
}

for (let i=0; i<menuItemsData.length; i++) {
  const menuItem = document.getElementById('product-'+menuItemsData[i].id);
  menuItem.addEventListener('click', function() {
    window.open(`./product.html?id=${menuItemsData[i].id}`, '_blank');
  });
}

localStorage.setItem('cart', JSON.stringify([]));
console.log(localStorage.getItem('cart'));

const addtoCartButtons = document.querySelectorAll('.add-to-cart');
for (let i=0; i<addtoCartButtons.length; i++) {
  addtoCartButtons[i].addEventListener('click', function() {
    console.log(addtoCartButtons[i].id);
    menuItemsData.forEach(menuItem => {
      if (menuItem.id == addtoCartButtons[i].id) {
        console.log(menuItem);
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart.push(menuItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(localStorage.getItem('cart'));
      }
    });
  });
}

const searchInput = document.querySelector('.menu-search input');
searchInput.addEventListener('input', function(e) {
  searchFood(e.target.value);
});

console.log(productTokens);

const searchFood = (searchQuery) => {

}