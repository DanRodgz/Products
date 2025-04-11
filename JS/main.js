const main = document.getElementsByTagName("main").item(0);
const URLmain = "https://fakestoreapi.com/products/";

function getData() {
    fetch(URLmain)
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
                     `<div class="alert alert-danger d-flex align-items-center" role="alert">
                 <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                 <div>
                     ${err.message}
                 </div>
                 </div>`);
    }); // cierre catch
} // getData

getData();

function createCards(prods) {
    let i = 0; // variable
    do {
        main.insertAdjacentHTML("beforeend",
            `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
    <div class="col-md-4">
      <img src="${prods[i].image}" class="img-fluid rounded-start" alt="${prods[i].title}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${prods[i].title}</h5>
        <p class="card-text">${prods[i].description}</p>
        <p class="card-text"><small class="text-body-secondary">$${prods[i].price}</small></p>
      </div>
    </div>
    </div>
    </div>`); i++ 
    } while (i <= 19); 
}