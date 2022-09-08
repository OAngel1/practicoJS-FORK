const profile = document.querySelector('#id_email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navShopCar = document.querySelector('.navbar-shopping-cart');//Boton shopCart
const aside =document.querySelector('aside');
const cardsContainer = document.querySelector('.cards-container');
const closeProductDetails = document.querySelector('.product-detail-close');

const cartList = document.querySelector('#cart-list');
const productDetails = document.querySelector('#show-product');

profile.addEventListener('click',toggleDesktopMenu);
iconMenu.addEventListener('click',toggleMobileMenu);
navShopCar.addEventListener('click',toggleCartList);
closeProductDetails.addEventListener('click',toCloseProductDetails);
//    productInfoDiv.addEventListener('click',toggleProductDetails); ciclo

function toCloseProductDetails(){
    aside.classList.add('inactive');
    productDetails.classList.add('inactive');
    cartList.classList.add('inactive');
}
 
function toggleCartList(){
    const statusAside = aside.classList.contains('inactive');
    const statusProductDetails = !productDetails.classList.contains('inactive');

    if(statusAside){
        aside.classList.remove('inactive');
    }else if(statusProductDetails){
        productDetails.classList.add('inactive');
    }else{
        aside.classList.add('inactive');
        cartList.classList.add('inactive');
    } 
    cartList.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    toCloseProductDetails();
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    toCloseProductDetails();
}
function toggleProductDetails(){
    const statusAside = aside.classList.contains('inactive');
    const statusCartlist = !cartList.classList.contains('inactive');

    if(statusAside){
        aside.classList.remove('inactive');
    }else if(statusCartlist){
        cartList.classList.add('inactive');
    }else{
        //aside.classList.add('inactive');
        //productDetails.classList.add('inactive');
    } 
    productDetails.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
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
    productInfoDiv.addEventListener('click',toggleProductDetails);

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
