const url = "https://api.shrtco.de/v2/shorten?url=";
var formInput = document.getElementById("form__input");

var el = document.getElementById("outside");
var el1 = document.getElementById("inside");
var el2 = document.getElementById("inside2");
var el3 = document.getElementById("inside3");
el.addEventListener("click", myFunction , false);

function myFunction() {
    var link = url + formInput.value;

    fetch(link)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            el1.innerHTML = data.result.short_link;
            el2.innerHTML = data.result.short_link2;
            el3.innerHTML = data.result.short_link3;
        });
}
