const url = "https://api.shrtco.de/v2/shorten?url=";
const invalidUrl1 = "shrtco.de";
const invalidUrl2 = "9qr.de";
const invalidUrl3 = "shiny.link";
let formInput = document.getElementById("form-input");
let formButton = document.getElementById("form-button");
let outputLink1 = document.getElementById("shortened-link1");
let outputLink2 = document.getElementById("shortened-link2");
let outputLink3 = document.getElementById("shortened-link3");
let links1 = document.getElementById("shortened-links1");
let links2 = document.getElementById("shortened-links2");
let links3 = document.getElementById("shortened-links3");
let alertText = document.getElementById("alert-text");
let tickImg1 = document.getElementById("tickimg1")
let tickImg2 = document.getElementById("tickimg2")
let tickImg3 = document.getElementById("tickimg3")



formButton.addEventListener("click", shortenLink, false);

links1.style.display = "none";
links2.style.display = "none";
links3.style.display = "none";
alertText.style.display = "none"
tickImg1.style.display = "none";
tickImg2.style.display = "none";
tickImg3.style.display = "none";



function shortenLink() {
    let link = url + formInput.value;
    alertText.style.display = "none"

    if (formInput.value.includes(invalidUrl1) || formInput.value.includes(invalidUrl2) || formInput.value.includes(invalidUrl3) || !formInput.value.includes(".")) {
        alertText.style.display = "flex";
        links1.style.display = "none";
        links2.style.display = "none";
        links3.style.display = "none";
        return;
    }

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

function copy(elementId, imgId) {
  var aux = document.createElement("input");

  aux.setAttribute("value", document.getElementById(elementId).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
    document.body.removeChild(aux);
    imgId.style.display = "flex";
    setTimeout(ticksDisappering, 1000, imgId)
}

function ticksDisappering(imgId) {
    imgId.style.display = "none";
}

function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu_button', '.burger-menu_lines');
  let links = menu.find('.burger-menu_link');
  let overlay = menu.find('.burger-menu_overlay');
  
  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  
  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
  
  function toggleMenu(){
    menu.toggleClass('burger-menu_active');
    
    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');