const profile = document.querySelector('#id_email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navShopCar = document.querySelector('.navbar-shopping-cart');
const productDetails =document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


profile.addEventListener('click',toggleDesktopMenu);
iconMenu.addEventListener('click',toggleMobileMenu);
navShopCar.addEventListener('click',toggleProductDetail);

function toggleProductDetail(){
    productDetails.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    productDetails.classList.add('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    productDetails.classList.add('inactive');
}

function randomImage (){  
    let rng = Math.floor(Math.random() * (280000 -270000) +  270000)   
    return {
        name: 'Bike ' + rng ,
        price: rng,
        image: `https://images.pexels.com/photos/${rng}/pexels-photo-${rng}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    };
}
const productList = [];
productList.push(randomImage());
productList.push(randomImage());
productList.push(randomImage());
productList.push(randomImage());
productList.push(randomImage());
productList.push(randomImage());

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const img = document.createElement('img');
    img.setAttribute( 'src', product.image);



    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');


    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = "$ "+product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('Figure');
    
    const imgCard = document.createElement('img');
    imgCard.setAttribute( 'src', './icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild(imgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
