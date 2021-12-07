const products = getAvailableProducts();
//get all of the products from call this render function
renderProducts(products);

const inputContent = document.getElementById("inputContent")//get the input

inputContent.addEventListener("input", filterProducts)//add input eventlistener

const inputPrice = document.getElementById("inputPrice")//get the price input

inputPrice.addEventListener("input", filterProducts)//add price input eventlistener
//use this function to filter from input
function filterProducts() {

  const productName = inputContent.value.toLowerCase();  //input name

  const productPrice = +inputPrice.value;  //input price
  // first select the input product
  // second select the max price
  const finalResults = products.filter((product) => productName === " " ||
    product.name.toLowerCase().indexOf(productName) > -1)
    .filter((product) => productPrice === 0 || product.price < productPrice);

  renderProducts(finalResults) //output the result to the HTML
}

//sorting products by price
const sortWaysOfProducts = document.querySelector("#selectProduct")
sortWaysOfProducts.addEventListener('change', (event) => {
  
  const sortingProducts = event.target.value;//select the option
  // select the price
  if (sortingProducts === "price") {
    const productSelectedByPrice = products.sort(function (leftItem, rightItem) {
      if (leftItem.price > rightItem.price) {
        return 1;
      }
      if (leftItem.price < rightItem.price) {
        return -1;
      }
      if (leftItem.price === rightItem.price) {
        return 0;
      }
    })
    renderProducts(productSelectedByPrice);
  }
  else if (sortingProducts === "name") {
    const productSelectedByName = products.sort(function (leftItem, rightItem) {
      //.replace(/[^a-zA-Z ]/g, "") to remove the symbols from the name
      if (leftItem.name.replace(/[^a-zA-Z ]/g, "") > rightItem.name.replace(/[^a-zA-Z ]/g, "")) {
        return 1;
      }
      if (leftItem.name.replace(/[^a-zA-Z ]/g, "") < rightItem.name.replace(/[^a-zA-Z ]/g, "")) {
        return -1;
      }
      if (leftItem.name.replace(/[^a-zA-Z ]/g, "") === rightItem.name.replace(/[^a-zA-Z ]/g, "")) {
        return 0;
      }
    })
    renderProducts(productSelectedByName);
  }
  else if (sortingProducts === "rating") {
    const productSelectedByRating = products.sort(function (leftItem, rightItem) {
      if (leftItem.rating > rightItem.rating) {
        return 1;
      }
      if (leftItem.rating < rightItem.rating) {
        return -1;
      }
      if (leftItem.rating === rightItem.rating) {
        return 0;
      }

    })
    renderProducts(productSelectedByRating);

  }
})


function renderProducts(products) {
  const productsUl = document.querySelector("ul");
  productsUl.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    const productsLi = document.createElement("li");
    let name = products[i].name
    let price = products[i].price
    let rating = products[i].rating
    productsLi.innerHTML +=
      `<h2>${name}</h2>
        <p>price: ${price}</p>
        <p>rating: ${rating}</p>`
    productsUl.appendChild(productsLi);
  }
}
renderProducts(products)




