const url = "https://api.shrtco.de/v2/shorten?url=";
let formInput = document.getElementById("form-input");
let formButton = document.getElementById("form-button");
let outputLink1 = document.getElementById("shortened-link1");
let outputLink2 = document.getElementById("shortened-link2");
let outputLink3 = document.getElementById("shortened-link3");
let links1 = document.getElementById("shortened-links1")
let links2 = document.getElementById("shortened-links2")
let links3 = document.getElementById("shortened-links3")



formButton.addEventListener("click", shortenLink, false);

links1.style.display = "none";
links2.style.display = "none";
links3.style.display = "none";


function shortenLink() {
    let link = url + formInput.value;

    fetch(link)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            links1.style.display = "flex";
            links2.style.display = "flex";
            links3.style.display = "flex";
            outputLink1.innerHTML = data.result.short_link;
            outputLink2.innerHTML = data.result.short_link2;
            outputLink3.innerHTML = data.result.short_link3;
        });
}

function copy(elementId) {
  var aux = document.createElement("input");

  aux.setAttribute("value", document.getElementById(elementId).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}