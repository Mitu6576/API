let container=document.getElementById("container")
let productsContainer=document.getElementById("products")
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    let products=data.products
    products.map(
      (product) =>
        (productsContainer.innerHTML += `<div class='products-all'>
         <div class='image'>
         <img src=${product.thumbnail} alt="Product">
         </div>
         <div class='details'>
         <h3>${product.title}</h3>
         <div class='description'>${product.description}</div>
         <p class='price'>$${product.price}</p>
         </div>
         </div>`)
    );
  });