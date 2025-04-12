const main = document.getElementsByTagName("main").item(0);
const URLmain = "https://fakestoreapi.com/products/";
const ulMenu = document.getElementById("ulMenu");
let prodMain = document.getElementById("prodMain");

function getData(cat) {
    const options = {"method": "GET"};
    fetch(URLmain+cat, options)
    .then((response) => {
        console.log(response);
        response.json().then((res) => {
            // console.log(res.lenght);
            // console.log(res[12].title);
            createCards(res);
        }); // cierre del segundo then donde manda a trar la info del array en cuanto a longitud y datos específicos si se le solicitan.
    }) // cierre then
    .catch((err) => {
        main.insertAdjacentHTML("beforeend",
                     `<div class="alert alert-danger role="alert">
                     ${err.message}
                 </div>`);
    }); // cierre catch
} // getData

function getCategories() {
    const options = {"method": "GET"};
    fetch(URLmain+"categories/", options)
    .then((response) => {
        response.json().then((res) => {
            console.log("categories: ", res);
            res.forEach((cat) => {
                ulMenu.insertAdjacentHTML("afterbegin",
                    `<li><a class="dropdown-item" onclick="getData('category/${cat}');">${cat}</a></li>`
            )});
        }); // cierre del segundo then donde manda a trar la info del array en cuanto a longitud y datos específicos si se le solicitan.
    }) // cierre then
    .catch((err) => {
        main.insertAdjacentHTML("beforeend",
                     `<div class="alert alert-danger role="alert">
                         ${err.message}
                    </div>`);
    }); // cierre catch
} // getCategories

getCategories();
getData("");

function createCards(prods) {
    let i = 0; // variable
    do {
        prodMain.insertAdjacentHTML("beforeend",
            `<div class="card mb-3" style="width: 430px; height: 400px">
    <div class="row g-0">
    <div class="col-md-4">
      <img src="${prods[i].image}" class="img-fluid rounded-start" alt="${prods[i].title}" style="object-fit:container">
    </div>
    <div class="col-md-4">
      <div class="card-body">
        <h6 class="card-title">${prods[i].title}</h6>
        <p class="card-text">${prods[i].description.slice(0, 40)}</p>
        <p class="card-text"><small class="text-body-secondary">$${prods[i].price}</small></p>
      </div>
    </div>
    </div>
    </div>`); i++ 
    } while (i <= 19); 
}