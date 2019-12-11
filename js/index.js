/*
  Katherine Feldman 
  Wednesday, December 11, 2019
  Final Assignment: Javascript
  index.js
*/

const product = [
  {
    name: ` CHOCOLATE BEARS`,
    image: `img/products/bears4.jpg`,
    desc: `White chocolate covered gummy bears`,
    qty: '250g',
    price: 3.95,
    category: `chocolateCovered`
  },{
    name: `PINEAPPLE BEARS`,
    image: `img/products/bears2.jpg`,
    desc: `Pinapple flavoured gummy bears`,
    qty: '50g',
    price: 3.50,
    category: `gummies`
  },{
    name: `HONEY HEARTS`,
    image: `img/products/candies1.jpg`,
    desc: `Honey gummies`,
    qty: '30g',
    price: 5.00,
    category: `gummies`
  },{
    name: `BOURBON CUBES`,
    image: `img/products/candies3.jpg`,
    desc: `Bourbon flavoured gummies`,
    qty: '650g',
    price: 6.50,
    category: `gummies`
  },  {
    name: `APPLE SLICES`,
    image: `img/products/candies4.jpg`,
    desc: `Apple flavoured gummies`,
    qty: '250g',
    price: 3.95,
    category: `gummies`
  },{
    name: `CHOCOLATE GRENOLA`,
    image: `img/products/chocolate1.jpg`,
    desc: `Crunchy chocolate balls`,
    qty: '50g',
    price: 6.95,
    category: `chocolate`
  },{
    name: `CHOCOLATE CARAMELS`,
    image: `img/products/chocolate2.jpg`,
    desc: `Chocolate covered caramels`,
    qty: '30g',
    price: 5,
    category: `chocolateCovered`
  },{
    name: `CHOCOLATE CHERRIES`,
    image: `img/products/chocolate5.jpg`,
    desc: `Chocolate covered cherries`,
    qty: '650g',
    price: 6.50,
    category: `chocolateCovered`
  },  {
    name: `CHOCOLATE BEARS`,
    image: `img/products/chocolate6.jpg`,
    desc: `Dark chocolate covered gummy bears`,
    qty: '250g',
    price: 3.95,
    category: `chocolateCovered`
  },{
    name: `COCONUT CHOCOLATES`,
    image: `img/products/chocolate8.jpg`,
    desc: `Coconut married to chocolate`,
    qty: '50g',
    price: 6.95,
    category: `chocolate`
  },{
    name: `PUMPKIN CHOCOLATE`,
    image: `img/products/chocolate9.jpg`,
    desc: `Pumpkin spice chocolate`,
    qty: '30g',
    price: 5,
    category: `chocolate`
  },{
    name: `ASSORTED BEARS`,
    image: `img/products/bears1.png`,
    desc: `An array of gummy bears`,
    qty: '650g',
    price: 6.50,
    category: `gummies`
  },  {
    name: `BOURBON BEARS`,
    image: `img/products/bears3.png`,
    desc: `Bourbon flavoured gummy bears`,
    qty: '250g',
    price: 3.95,
    category: `gummies`
  },{
    name: `STRAWBERRY BEARS`,
    image: `img/products/bears5.png`,
    desc: `Strawberry flavoured gummy bears`,
    qty: '50g',
    price: 6.95,
    category: `gummies`
  },{
    name: `POPCORN BEARS`,
    image: `img/products/bears6.png`,
    desc: `Popcorn flavoured gummy bears`,
    qty: '30g',
    price: 5,
    category: `gummies`
  },{
    name: `ORANGE ROSES`,
    image: `img/products/candies2.png`,
    desc: `Orange flavoured gummy roses`,
    qty: '650g',
    price: 6.50,
    category: `gummies`
  },  {
    name: `ICECREAM GUMMIES`,
    image: `img/products/candies5.png`,
    desc: `Icecream gummies`,
    qty: '250g',
    price: 3.95,
    category: `gummies`
  },{
    name: `PINEAPPLE GUMMIES`,
    image: `img/products/candies6.png`,
    desc: `Pineapple gummies`,
    qty: '50g',
    price: 6.95,
    category: `gummies`
  },{
    name: `HOT LIPS`,
    image: `img/products/candies7.png`,
    desc: `Peppermint gummies`,
    qty: '30g',
    price: 5,
    category: `gummies`
  },{
    name: `CONFETTI BALLS`,
    image: `img/products/chocolate3.png`,
    desc: `Confetti white chocolate`,
    qty: '650g',
    price: 6.50,
    category: `chocolate`
  },
]

function getProductAsHtmlString(product) {
  return `<div class="product-box">
            <a href="#"><img class="p-img" src="${product.image}" alt="${product.name}"/></a>
            <div>${product.name}</div>
            <div>${product.desc}</div>
          </div>`;
}

function renderProducts(arrToRender) {
  const arrOfHtmlProducts = arrToRender.map(getProductAsHtmlString);
  const strOfHtmlProducts = arrOfHtmlProducts.join('\n');
  document.getElementById('productList').innerHTML = strOfHtmlProducts;  
}

function filterByCategory(product){
  return product.category == this;
}

function searchByCategory(event){
  const searchTerm = event.target.value;
  const categoryCheck = product.filter(filterByCategory, searchTerm);
  renderProducts(categoryCheck);
}

function sortProducts(event) {

  const sortingMethod = event.target.value;

  if(sortingMethod == 'lowToHigh'){
    sortProductsPriceAscending();
  }else if(sortingMethod == 'highToLow'){
    sortProductsPriceDescending();
  }
}

function sortProductsPriceAscending(){
  const sortedProducts = product.sort(function(a, b){ return a.price - b.price });
  renderProducts(sortedProducts);
}

function sortProductsPriceDescending(){
  const sortedProducts = product.sort(function(a, b){ return b.price - a.price });
  renderProducts(sortedProducts);
}

renderProducts(product);

document.getElementById('search').addEventListener('change', searchByCategory);

document.getElementById('sortByPrice').addEventListener('change', sortProducts);
