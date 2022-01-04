//identification
let htmlObj = document.getElementById("identification");
htmlObj.innerHTML =
    `id: ${customer.id}<br>`+
    `Name: ${customer.firstname}<br>`+
    `Vorname: ${customer.lastname}<br>`+
    `Geschlcht: ${customer.gender}<br>`;

//Location
htmlObj = document.getElementById("location");
htmlObj.innerHTML =
    `Land: ${customer.location.country}<br>`+
    `Stadt: ${customer.location.city}<br>`+
    `Strasse: ${customer.location.street}`;

//product - coffe
htmlObj = document.getElementById("product");
customer.product.coffe.forEach(coffeid => {
    htmlObj.innerHTML += `Coffe: ${coffeid}<br>`;
})

//restaurant or takeaway

let Rot = "Takeawy";
if (customer.restaurantortakeaway.restaurant){
    Rot = "Restaurant";
}

htmlObj = document.getElementById("aprove");
let restaurantliste = customer.restaurantortakeaway.aprove;
for (let i=0;i<restaurantliste.length;i++){
    htmlObj.innerHTML += `${Rot}: ${restaurantliste[i]}<br>`;
}

