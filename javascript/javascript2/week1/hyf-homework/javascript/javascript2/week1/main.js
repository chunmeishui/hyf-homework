const products = getAvailableProducts();
const productsLi = document.createElement("li");
const productsUl = document.querySelector("ul");
const productsMain = document.querySelector("main")
const productsH2 = document.createElement("h2")
console.log(products);
function renderProducts(products) {
    for (let i = 0; i < products.length; i++) {
        productsH2.innerHTML = products[i].name;
        productsLi.appendChild(productsH2)
        productsLi.innerHTML += " price: " + products[i].price;
        productsLi.innerHTML += "<br/> rating: " + products[i].rating;
        productsUl.appendChild(productsLi);

    }
}
renderProducts(products);