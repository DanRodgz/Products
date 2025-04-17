// const main = document.getElementsByTagName("main").item(0);
const URLmain = "https://fakestoreapi.com/products/";
const ulMenu = document.getElementById("ulMenu");
const prod = document.getElementById("prod");

function getData(cat) {
    const options = {"method": "GET"};
    fetch(URLmain+cat, options)
    .then((response) => {
        console.log(response);
        response.json().then((res) => {
            // console.log(res.lenght);
            // console.log(res[12].title);
            createCards(res);
        }); // cierre del segundo then donde manda a traer la info del array en cuanto a longitud y datos específicos si se le solicitan.
    }) // cierre then
    .catch((err) => {
        main.insertAdjacentHTML("beforeend",
                     `<div class="alert alert-danger role="alert">
                     ${err.message}
                 </div>`);
    }); // cierre catch
} // getData

function getCategories() {
    fetch(URLmain+"categories/")
    .then((response) => {
        console.log(response)
        response.json().then((res) => {
            res.forEach((cat) => {
                ulMenu.insertAdjacentHTML("afterbegin",
                    `<li><a class="dropdown-item" onclick="getData('category/${cat}')" href="#">${cat}</a></li>`
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
    prod.innerHTML="";
    let i = 0
    do{
        prod.insertAdjacentHTML("beforeend",
        `
        <div class="card" style="width: 18rem col-3" >
               <img src="${prods[i].image}" class="card-img-top" alt="${prods[i].title}">
           <div class="card-body">
             <h5 class="card-title">${prods[i].title}</h5>
             <p class="card-text">${prods[i].description}</p>
             <a href="#" class="btn btn-primary" id=${i}>Go somewhere</a>
           </div>
         </div>`);
        i++
    } while (i <= 19);
}