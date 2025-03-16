const menuItemsData = [
    {
        "id": 1,
        "image": "best-seller-1.jpg",
        "title": "Paneer Butter Masala",
        "description": "Paneer cooked in a rich tomato gravy with butter and cream",
        "price": 250
    },
    {
        "id": 2,
        "image": "best-seller-2.jpg",
        "title": "Chicken Biryani",
        "description": "Basmati rice cooked with chicken, spices and herbs",
        "price": 300
    },
    {
        "id": 3,
        "image": "best-seller-3.jpg",
        "title": "Veg Manchurian",
        "description": "Vegetable balls cooked in a spicy and tangy sauce",
        "price": 200
    },
    {
        "id": 4,
        "image": "best-seller-1.jpg",
        "title": "Chilli Chicken",
        "description": "Crispy fried chicken tossed in a spicy sauce",
        "price": 300
    },
    {
        "id": 5,
        "image": "best-seller-2.jpg",
        "title": "Paneer Tikka",
        "description": "Paneer marinated in spices and grilled",
        "price": 250
    },
    {
        "id": 6,
        "image": "best-seller-3.jpg",
        "title": "Chicken Tikka",
        "description": "Chicken marinated in spices and grilled",
        "price": 300
    },
    {
        "id": 7,
        "image": "best-seller-1.jpg",
        "title": "Veg Fried Rice",
        "description": "Rice cooked with vegetables and spices",
        "price": 200
    },
    {
        "id": 8,
        "image": "best-seller-2.jpg",
        "title": "Mutton Rogan Josh",
        "description": "Slow-cooked mutton curry with aromatic spices",
        "price": 350
    },
    {
        "id": 9,
        "image": "best-seller-3.jpg",
        "title": "Gobi Manchurian",
        "description": "Cauliflower cooked in a spicy Manchurian sauce",
        "price": 220
    },
    {
        "id": 10,
        "image": "best-seller-1.jpg",
        "title": "Dal Tadka",
        "description": "Lentils tempered with spices and ghee",
        "price": 180
    },
    {
        "id": 11,
        "image": "best-seller-2.jpg",
        "title": "Fish Curry",
        "description": "Fish cooked in a tangy and spicy curry",
        "price": 320
    },
    {
        "id": 12,
        "image": "best-seller-3.jpg",
        "title": "Hakka Noodles",
        "description": "Stir-fried noodles with vegetables and sauces",
        "price": 210
    },
    {
        "id": 13,
        "image": "best-seller-1.jpg",
        "title": "Kadhai Chicken",
        "description": "Chicken cooked with bell peppers and spices",
        "price": 320
    },
    {
        "id": 14,
        "image": "best-seller-2.jpg",
        "title": "Mutton Biryani",
        "description": "Basmati rice cooked with mutton and aromatic spices",
        "price": 350
    },
    {
        "id": 15,
        "image": "best-seller-3.jpg",
        "title": "Spring Rolls",
        "description": "Crispy rolls filled with vegetables and noodles",
        "price": 190
    },
    {
        "id": 16,
        "image": "best-seller-1.jpg",
        "title": "Butter Chicken",
        "description": "Chicken cooked in a creamy tomato-based sauce",
        "price": 320
    },
    {
        "id": 17,
        "image": "best-seller-2.jpg",
        "title": "Egg Curry",
        "description": "Boiled eggs cooked in a spicy tomato-based curry",
        "price": 250
    },
    {
        "id": 18,
        "image": "best-seller-3.jpg",
        "title": "Mushroom Masala",
        "description": "Mushrooms cooked in a flavorful gravy",
        "price": 220
    },
    {
        "id": 19,
        "image": "best-seller-1.jpg",
        "title": "Prawns Masala",
        "description": "Prawns cooked in a spicy coconut-based curry",
        "price": 350
    },
    {
        "id": 20,
        "image": "best-seller-2.jpg",
        "title": "Cheese Garlic Naan",
        "description": "Soft naan with garlic and cheese",
        "price": 150
    },
    {
        "id": 21,
        "image": "best-seller-3.jpg",
        "title": "Palak Paneer",
        "description": "Paneer cubes cooked in a spinach-based gravy",
        "price": 250
    },
    {
        "id": 22,
        "image": "best-seller-1.jpg",
        "title": "Mix Veg Curry",
        "description": "Assorted vegetables cooked in a spiced gravy",
        "price": 200
    },
    {
        "id": 23,
        "image": "best-seller-2.jpg",
        "title": "Tandoori Chicken",
        "description": "Chicken marinated in yogurt and spices, roasted in a tandoor",
        "price": 320
    },
    {
        "id": 24,
        "image": "best-seller-3.jpg",
        "title": "Aloo Paratha",
        "description": "Indian bread stuffed with spiced mashed potatoes",
        "price": 150
    },
    {
        "id": 25,
        "image": "best-seller-1.jpg",
        "title": "Shahi Paneer",
        "description": "Paneer cooked in a rich cashew-based gravy",
        "price": 270
    },
    {
        "id": 26,
        "image": "best-seller-2.jpg",
        "title": "Mutton Korma",
        "description": "Mutton cooked in a thick and creamy gravy",
        "price": 350
    },
    {
        "id": 27,
        "image": "best-seller-3.jpg",
        "title": "Chicken 65",
        "description": "Deep-fried chicken chunks coated in spicy masala",
        "price": 300
    },
    {
        "id": 28,
        "image": "best-seller-1.jpg",
        "title": "Rajma Chawal",
        "description": "Kidney beans cooked with spices and served with rice",
        "price": 180
    },
    {
        "id": 29,
        "image": "best-seller-2.jpg",
        "title": "Gulab Jamun",
        "description": "Deep-fried milk dumplings soaked in sugar syrup",
        "price": 120
    },
    {
        "id": 30,
        "image": "best-seller-3.jpg",
        "title": "Jalebi",
        "description": "Crispy and sweet Indian dessert",
        "price": 100
    }
];

const productTokens = [];
const tokenizeProducts = () => {
    for (let i=0; i<menuItemsData.length; i++) {
      const title = menuItemsData[i].title.replace(/[^a-zA-Z0-9 ]/, '').toLowerCase();
      const description = menuItemsData[i].description.replace(/[^a-zA-Z0-9 ]/, '').toLowerCase();
      const tokens = title.split(' ').concat(description.split(' '));
      productTokens.push({
        id: menuItemsData[i].id,
        tokens: tokens
      });
    }
};
tokenizeProducts();