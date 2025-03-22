const searchItemsContainer = document.querySelector('.search-sections');
searchItemsContainer.innerHTML = '';

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
for (let i=0; i<menuItems.length; i++) {
  menuItems[i].addEventListener('onmouseover', function() {
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

for (let i=0; i<menuItemsData.length; i++) {
  const button = document.getElementById('button-'+menuItemsData[i].id);
  button.addEventListener('click', function(e) {
    e.stopPropagation();
    if (localStorage.getItem('cart') == null) {
      localStorage.setItem('cart', JSON.stringify([{... menuItemsData[i], quantity:1}]));
    } else {
      let cart = JSON.parse(localStorage.getItem('cart'));
      let isItemPresent = false;
      let item;
      for (let j=0; j<cart.length; j++) {
        if (cart[j].id == menuItemsData[i].id) {
          isItemPresent = true;
          item = cart[j];
          break;
        }
      }
      if (isItemPresent) {
        item.quantity += 1;
      } else {
        cart.push({... menuItemsData[i], quantity: 1});
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      // console.log(JSON.parse(localStorage.getItem('cart')));
      console.log(cart);
    }
    alert ('Item added to cart successfully');
  });
}

localStorage.setItem('cart', JSON.stringify([]));

const addtoCartButtons = document.querySelectorAll('.add-to-cart');
for (let i=0; i<addtoCartButtons.length; i++) {
  addtoCartButtons[i].addEventListener('click', function() {
    menuItemsData.forEach(menuItem => {
      if (menuItem.id == addtoCartButtons[i].id) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart.push(menuItem);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    });
  });
}

const searchInput = document.querySelector('.menu-search input');
searchInput.addEventListener('input', function(e) {
  if (e.target.value == '') {
    const searchItemsContainer = document.querySelector('.search-sections');
    searchItemsContainer.innerHTML = '';
    return;
  } else {
    const searchItemsContainer = document.querySelector('.search-sections');
    searchItemsContainer.innerHTML = '';
    searchItemsContainer.innerHTML = searchItemsContainer.innerHTML + `<h1> Search Results </h1>
      <div class="search-section-items">
          <div class="search-items">
          </div>
      </div>`;
  }
  const products = searchFood(e.target.value);
  const searchItemsContainer = document.querySelector('.search-items');
  searchItemsContainer.innerHTML = '';
  if (products.length == 0) {
    searchItemsContainer.innerHTML = '<h1>No items found</h1>';
  }
  for (let i=0; i<products.length; i++) {
    searchItemsContainer.innerHTML = searchItemsContainer.innerHTML + `<div id=${'product-'+products[i].id} class="search-item">
        <img src=${products[i].image} alt="menu1" class="search-item-image">
        <div class="search-item-details">
          <h1>${products[i].title}</h1>
          <span>${products[i].description}</span>
          <span class="price">Price: Rs. ${products[i].price}</span>
          <button id=${'button-'+products[i].id} class="add-to-cart hidden">Add to Cart</button>
        </div>
      </div>`;
  }
});

const searchFood = (searchQuery) => {
  const searchTokens = searchQuery.toLowerCase().split(' ');
  let productMatchingScores = [];
  for (let i=0; i<productTokens.length; i++) {
    let count = 0;
    for (let j=0; j<productTokens[i].tokens.length; j++) {
      if (searchTokens.includes(productTokens[i].tokens[j])) {
        count++;
      }
    }
    productMatchingScores.push({
      id: productTokens[i].id,
      score: count
    });
  }
  productMatchingScores = productMatchingScores.filter(product => product.score > 0);
  productMatchingScores.sort((a, b) => {
    return b.score - a.score;
  });
  productMatchingScores = productMatchingScores.splice(0, 5);
  const products = [];
  for (let i=0; i<productMatchingScores.length; i++) {
    menuItemsData.forEach(menuItem => {
      if (menuItem.id == productMatchingScores[i].id) {
        products.push(menuItem);
      }
    });
  }
  return products;
}