//use class way original data
let c = document.getElementById("myCanvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
let ctx = c.getContext("2d");
class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x,
            this.y = y,
            this.r = r,
            this.startAngle = startAngle,
            this.endAngle = endAngle,
            this.fillColor = fillColor
    }
    draw() {

        ctx.beginPath();
        ctx.arc(
            this.x,
            this.y,
            this.r,
            this.startAngle,
            this.endAngle,
            this.fillColor);
        ctx.stroke();
        ctx.fillStyle = this.fillColor;
        ctx.fill();
    }
}
const timeInterval = setInterval(() => {
    let allCircles = [];
    let amount = 2;
    let createCircle = function (circle) {
        circle.draw();
    };
    for (let i = 0; i < amount; i++) {
        let randomX = Math.random() * window.innerWidth;
        let randomY = Math.random() * window.innerHeight;
        let color =
            "rgba(" +
            Math.floor(Math.random() * 255) +
            "," +
            Math.floor(Math.random() * 255) +
            "," +
            Math.floor(Math.random() * 255) +
            "," +
            ".5" +
            ")";

        let c2 = new Circle(randomX, randomY, 20, 0, 2 * Math.PI, color);
        allCircles.push(c2);
        createCircle(allCircles[i]);
    }
}, 2000);


//Follow the mouse - optional
document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById('mouse-circle');
    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }
    let delay = 8,
        revisedMousePosX = 0,
        revisedMousePosY = 0;
    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);
        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay;
        mouseCircle.style.top = revisedMousePosY + 'px';
        mouseCircle.style.left = revisedMousePosX + 'px';
    }
    delayMouseFollow();
});

//Getting into promises

const renderInfo = document.querySelector(".promiseAll");
const promiseAll = async function promiseAll() {
    try {
        const apiOne = "https://api.github.com/search/repositories?q=user:chunmeishui";
        const apitwo = "https://api.github.com/search/repositories?q=user:asmafassy";
        const apithree = "https://api.github.com/search/repositories?q=user:sumanghimire79";
        const results = await Promise.all([
            fetch(apiOne),
            fetch(apitwo),
            fetch(apithree)
        ]);
        const eachApi = results.map(result => result.json());
        const finalData = await Promise.all(eachApi);
        //console.log(finalData);
        finalData.map((data) => data.items.map((singleInfo) => {
            const nameFull = "Fullname : " + singleInfo.full_name;
            const url = "Url: " + singleInfo.git_url;
            const id = "Owner ID: " + singleInfo.owner.id;
            const li = document.createElement("li");
            li.innerHTML = `<h3>${nameFull}</h3>
            <h5>${url}</h5> 
            <h5>${id}</h5> `
            renderInfo.appendChild(li);
            //method 2 to render the info
            // const fullName = document.createElement("h3");
            // fullName.innerHTML = nameFull;
            // renderInfo.appendChild(fullName)
            // const owner = document.createElement("h3");
            // owner.innerHTML = id;
            // renderInfo.appendChild(owner)
            // const urlAddress = document.createElement("h4");
            // urlAddress.innerHTML = url;
            // renderInfo.appendChild(urlAddress)
        })
        )
    } catch (error) {
        console.log(error);
    }
}
promiseAll();

//Shopping cart using Classes

const productsDiv = document.querySelector(".products");
const h5 = document.querySelector(".userName");
const p = document.createElement("p");

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    convertToCurrency(currency) {
        if (currency.toLowerCase().includes("dollar")) {
            const dollarPrice =
                this.name + ": " + (this.price * 0.15).toFixed(2) + " " + currency;
            return dollarPrice;
        }
        if (currency.toLowerCase().includes("euro")) {
            const euroPrice =
                this.name + ": " + (this.price * 0.13).toFixed(2) + " " + currency;
            console.log(euroPrice);
        }
        if (currency.toLowerCase().includes("cny")) {
            const cnyPrice =
                this.name + ": " + (this.price * 0.96).toFixed(2) + " " + currency;
            console.log(cnyPrice);
        }
        if (currency.toLowerCase().includes("nrs")) {
            const nrsPrice =
                this.name + ": " + (this.price * 18.08).toFixed(2) + " " + currency;
            console.log(nrsPrice);
        }
        if (currency.toLowerCase().includes("pkr")) {
            const pkrPrice =
                this.name + ": " + (this.price * 26.72).toFixed(2) + " " + currency;
            console.log(pkrPrice);
        }

    }
};
class ShoppingCart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        // Implement functionality here
        this.products.push(product);
        console.log(this.products);
    }
    removeProduct(product) {
        const index = this.products.indexOf(product);
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }
    searchProduct(productName) {
        const searchedProducts = [];
        for (const b of this.products) {
            if (b.name === productName) {
                searchedProducts.push(productName);
            }
        }
        console.log(searchedProducts);
        //method 2
        //const searchItems = this.products
        //.map((el) => el.name)
        //.filter((el) => el.includes(productName));
        //console.log(searchItems);
    }
    getTotal() {
        let total = 0;
        for (const a of this.products) {
            total += a.price;

        }
        console.log("total price : " + total);
        return total;
        //method 2
        //     const totalValue = this.products
        //     .map((products) => products.price)
        //     .reduce((total, one) => total + one);
        //  console.log(totalValue);
    }
    renderProducts() {
        // Implement functionality here
        this.products.map((product) => {

            const nameOfProduct = product.name;
            const priceOfProduct = product.price;
            const ul = document.createElement("ul");
            ul.innerHTML = ` <li>${nameOfProduct} : ${priceOfProduct} .</li>`;
            productsDiv.appendChild(ul);
            p.innerHTML = `Total price is :${shoppingCart.getTotal()}.`;
            productsDiv.appendChild(p);
        });
        const input = document.querySelector("#searchProduct");
        const clickSearch = document.querySelector(".searchBtn");

        clickSearch.addEventListener("click", () => {
            productsDiv.innerHTML = "";
            this.products.map((products) => products).filter((pro) => pro.name.includes(input.value)).map((pro) => {
                const myInfoP = document.createElement("p");
                myInfoP.innerHTML = `${pro.name}: ${pro.price}.`;
                productsDiv.appendChild(myInfoP);
            });

        });

        // this.getUser(2)
    }
    getUser(user) {
        return fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
            .then((data) => data.json())
            .then((response) => {
                h5.innerHTML = "User Name: " + response.name + " .  " + "User ID: " + response.id;
                productsDiv.appendChild(h5);
            });
    }
};
const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const tv = new Product("tv", 3000);
const laptop = new Product("laptop", 6000);
const mobil = new Product("mobil", 2000);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(tv);
shoppingCart.addProduct(tv);
shoppingCart.addProduct(tv);
shoppingCart.addProduct(tv);
shoppingCart.addProduct(laptop);
shoppingCart.addProduct(mobil);
shoppingCart.removeProduct(mobil);
shoppingCart.removeProduct(tv);
shoppingCart.getTotal();
shoppingCart.searchProduct("tv");
shoppingCart.renderProducts();
shoppingCart.getUser(2);
const plant = new Product("plant", 50);
plant.convertToCurrency("dollars"); // 7.5
const plant1 = new Product("plant", 50);
plant1.convertToCurrency("Euro"); // 7.4
const plant2 = new Product("plant", 50);
plant2.convertToCurrency("cny"); // 0.96
const plant3 = new Product("plant", 50);
plant3.convertToCurrency("nrs"); // 18.08
const plant4 = new Product("plant", 50);
plant4.convertToCurrency("pkr"); // 26.72

