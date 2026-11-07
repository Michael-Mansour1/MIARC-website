let btnModern = document.getElementById("Modern")
let btnScandinavian = document.getElementById("Scandinavian")
let btnIndustrial = document.getElementById("Industrial")
let btnClassic = document.getElementById("Classic")
let btnJapandi = document.getElementById("Japandi")


let btnSoftwhite = document.getElementById("Soft-white")
let btnWarmSand = document.getElementById("Warm-sand")
let btnSage = document.getElementById("Sage")
let btnDustyblue = document.getElementById("Dusty-blue")
let btnClay = document.getElementById("Clay")
let btnForest = document.getElementById("Forest")
let btnInkblue = document.getElementById("Ink-blue")
let btnCharcoal = document.getElementById("Charcoal")







let roomDisplay = document.getElementById('room-display')
let priceDisplay = document.getElementById('price-display')
let style = "";
let color = "Soft white";





btnModern.addEventListener('click', function () {
    style = "Modern"



    if (color === "Soft white") {
        roomDisplay.src = "home-styler/Modern.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Warm sand") {
        roomDisplay.src = "warm-sand/wsModern.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Sage") {
        roomDisplay.src = "Sage/sgModern.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Dusty blue") {
        roomDisplay.src = "Dusty-blue/dbModern.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Clay") {
        roomDisplay.src = "Clay/clModern.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }


    else if (color === "Forest") {
        roomDisplay.src = "Forest/frModern.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }
    else if (color === "Ink blue") {
        roomDisplay.src = "Ink-blue/ibModern.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }
    else if (color === "Charcoal") {
        roomDisplay.src = "Charcoal/caModern.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }


})

btnScandinavian.addEventListener('click', function () {
    style = "Scandinavian"


    if (color === "Soft white") {
        roomDisplay.src = "home-styler/Scandinavian.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Warm sand") {
        roomDisplay.src = "warm-sand/wsScandinavian.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Sage") {
        roomDisplay.src = "Sage/sgScandinavian.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Dusty blue") {
        roomDisplay.src = "Dusty-blue/dbScandinavian.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Clay") {
        roomDisplay.src = "Clay/clScandinavian.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }
    else if (color === "Forest") {
        roomDisplay.src = "Forest/frScandinavian.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }
    else if (color === "Ink blue") {
        roomDisplay.src = "Ink-blue/ibScandinavian.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }
    else if (color === "Charcoal") {
        roomDisplay.src = "Charcoal/caScandinavian.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }
})


btnIndustrial.addEventListener('click', function () {
    style = "Industrial"


    if (color === "Soft white") {
        roomDisplay.src = "home-styler/Industrial.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Warm sand") {
        roomDisplay.src = "warm-sand/wsIndustrial.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Sage") {
        roomDisplay.src = "Sage/sgIndustrial.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Dusty blue") {
        roomDisplay.src = "Dusty-blue/dbIndustrial.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Clay") {
        roomDisplay.src = "Clay/clIndustrial.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }
    else if (color === "Forest") {
        roomDisplay.src = "Forest/frIndustrial.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }
    else if (color === "Ink blue") {
        roomDisplay.src = "Ink-blue/ibIndustrial.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }
    else if (color === "Charcoal") {
        roomDisplay.src = "Charcoal/caIndustrial.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }
})


btnClassic.addEventListener('click', function () {
    style = "Classic"


    if (color === "Soft white") {
        roomDisplay.src = "home-styler/Classic.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Warm sand") {
        roomDisplay.src = "warm-sand/wsClassic.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Sage") {
        roomDisplay.src = "Sage/sgClassic.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Dusty blue") {
        roomDisplay.src = "Dusty-blue/dbClassic.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Clay") {
        roomDisplay.src = "Clay/clClassic.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }
    else if (color === "Forest") {
        roomDisplay.src = "Forest/frClassic.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }
    else if (color === "Ink blue") {
        roomDisplay.src = "Ink-blue/ibClassic.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }
    else if (color === "Charcoal") {
        roomDisplay.src = "Charcoal/caClassic.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }
})


btnJapandi.addEventListener('click', function () {
    style = "Japandi"


    if (color === "Soft white") {
        roomDisplay.src = "home-styler/Japandi.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Warm sand") {
        roomDisplay.src = "warm-sand/wsJapandi.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Sage") {
        roomDisplay.src = "Sage/sgJapandi.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Dusty blue") {
        roomDisplay.src = "Dusty-blue/dbJapandi.png";
        priceDisplay.textContent = "Price :$" + (+this.dataset.price).toLocaleString("en-US")
    }
    else if (color === "Clay") {
        roomDisplay.src = "Clay/clJapandi.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }
    else if (color === "Forest") {
        roomDisplay.src = "Forest/frJapandi.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }
    else if (color === "Ink blue") {
        roomDisplay.src = "Ink-blue/ibJapandi.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }
    else if (color === "Charcoal") {
        roomDisplay.src = "Charcoal/caJapandi.png";
        price = Number(this.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }
})







btnSoftwhite.addEventListener('click', function () {
    color = "Soft white"
    if (style === "Modern") {
        roomDisplay.src = "home-styler/Modern.png"
        priceDisplay.textContent = "Price :$" + (+btnModern.dataset.price).toLocaleString("en-US")

    }

    else if (style === "Scandinavian") {
        roomDisplay.src = "home-styler/Scandinavian.png";
        priceDisplay.textContent = "Price :$" + (+btnScandinavian.dataset.price).toLocaleString("en-US")
    }

    else if (style === "Industrial") {
        roomDisplay.src = "home-styler/Industrial.png";
        priceDisplay.textContent = "Price :$" + (+btnIndustrial.dataset.price).toLocaleString("en-US")
    }

    else if (style === "Classic") {
        roomDisplay.src = "home-styler/Classic.png";
        priceDisplay.textContent = "Price :$" + (+btnClassic.dataset.price).toLocaleString("en-US")
    }

    else if (style === "Japandi") {
        roomDisplay.src = "home-styler/Japandi.png";
        priceDisplay.textContent = "Price :$" + (+btnJapandi.dataset.price).toLocaleString("en-US")
    }


})




btnWarmSand.addEventListener('click', function () {
    color = "Warm sand"
    if (style === "Modern") {
        roomDisplay.src = "warm-sand/wsModern.png"
        priceDisplay.textContent = "Price :$" + (+btnModern.dataset.price).toLocaleString("en-US")
    }

    else if (style === "Scandinavian") {
        roomDisplay.src = "warm-sand/wsScandinavian.png";
        priceDisplay.textContent = "Price :$" + (+btnScandinavian.dataset.price).toLocaleString("en-US")
    }

    else if (style === "Industrial") {
        roomDisplay.src = "warm-sand/wsIndustrial.png";
        priceDisplay.textContent = "Price :$" + (+btnIndustrial.dataset.price).toLocaleString("en-US")
    }

    else if (style === "Classic") {
        roomDisplay.src = "warm-sand/wsClassic.png";
        priceDisplay.textContent = "Price :$" + (+btnClassic.dataset.price).toLocaleString("en-US")
    }

    else if (style === "Japandi") {
        roomDisplay.src = "warm-sand/wsJapandi.png";
        priceDisplay.textContent = "Price :$" + (+btnJapandi.dataset.price).toLocaleString("en-US")
    }


})



btnSage.addEventListener('click', function () {
    color = "Sage"
    if (style === "Modern") {
        roomDisplay.src = "Sage/sgModern.png"
        priceDisplay.textContent = "Price :$" + (+btnModern.dataset.price).toLocaleString("en-US")
    }

    else if (style === "Scandinavian") {
        roomDisplay.src = "Sage/sgScandinavian.png";
        priceDisplay.textContent = "Price :$" + (+btnScandinavian.dataset.price).toLocaleString("en-US")
    }

    else if (style === "Industrial") {
        roomDisplay.src = "Sage/sgIndustrial.png";
        priceDisplay.textContent = "Price :$" + (+btnIndustrial.dataset.price).toLocaleString("en-US")
    }

    else if (style === "Classic") {
        roomDisplay.src = "Sage/sgClassic.png";
        priceDisplay.textContent = "Price :$" + (+btnClassic.dataset.price).toLocaleString("en-US")
    }

    else if (style === "Japandi") {
        roomDisplay.src = "Sage/sgJapandi.png";
        priceDisplay.textContent = "Price :$" + (+btnJapandi.dataset.price).toLocaleString("en-US")
    }


})



btnDustyblue.addEventListener('click', function () {
    color = "Dusty blue"
    if (style === "Modern") {
        roomDisplay.src = "Dusty-blue/dbModern.png";
        priceDisplay.textContent = "Price :$" + (+btnModern.dataset.price).toLocaleString("en-US")
    }

    else if (style === "Scandinavian") {
        roomDisplay.src = "Dusty-blue/dbScandinavian.png";
        priceDisplay.textContent = "Price :$" + (+btnScandinavian.dataset.price).toLocaleString("en-US")
    }

    else if (style === "Industrial") {
        roomDisplay.src = "Dusty-blue/dbIndustrial.png";
        priceDisplay.textContent = "Price :$" + (+btnIndustrial.dataset.price).toLocaleString("en-US")
    }

    else if (style === "Classic") {
        roomDisplay.src = "Dusty-blue/dbClassic.png";
        priceDisplay.textContent = "Price :$" + (+btnClassic.dataset.price).toLocaleString("en-US")
    }

    else if (style === "Japandi") {
        roomDisplay.src = "Dusty-blue/dbJapandi.png";
        priceDisplay.textContent = "Price :$" + (+btnJapandi.dataset.price).toLocaleString("en-US")
    }


})




btnClay.addEventListener('click', function () {
    color = "Clay"
    if (style === "Modern") {
        roomDisplay.src = "Clay/clModern.png";
        price = Number(btnModern.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");

    }

    else if (style === "Scandinavian") {
        roomDisplay.src = "Clay/clScandinavian.png";
        price = Number(btnScandinavian.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }

    else if (style === "Industrial") {
        roomDisplay.src = "Clay/clIndustrial.png";
        price = Number(btnIndustrial.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }

    else if (style === "Classic") {
        roomDisplay.src = "Clay/clClassic.png";
        price = Number(btnClassic.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }

    else if (style === "Japandi") {
        roomDisplay.src = "Clay/clJapandi.png";
        price = Number(btnJapandi.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }


})


btnForest.addEventListener('click', function () {
    color = "Forest"
    if (style === "Modern") {
        roomDisplay.src = "Forest/frModern.png";
        price = Number(btnModern.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }

    else if (style === "Scandinavian") {
        roomDisplay.src = "Forest/frScandinavian.png";
        price = Number(btnScandinavian.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }

    else if (style === "Industrial") {
        roomDisplay.src = "Forest/frIndustrial.png";
        price = Number(btnIndustrial.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }

    else if (style === "Classic") {
        roomDisplay.src = "Forest/frClassic.png";
        price = Number(btnClassic.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }

    else if (style === "Japandi") {
        roomDisplay.src = "Forest/frJapandi.png";
        price = Number(btnJapandi.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }


})


btnInkblue.addEventListener('click', function () {
    color = "Ink blue"
    if (style === "Modern") {
        roomDisplay.src = "Ink-blue/ibModern.png";
        price = Number(btnModern.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");

    }

    else if (style === "Scandinavian") {
        roomDisplay.src = "Ink-blue/ibScandinavian.png";
        price = Number(btnScandinavian.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }

    else if (style === "Industrial") {
        roomDisplay.src = "Ink-blue/ibIndustrial.png";
        price = Number(btnIndustrial.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }

    else if (style === "Classic") {
        roomDisplay.src = "Ink-blue/ibClassic.png";
        price = Number(btnClassic.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }

    else if (style === "Japandi") {
        roomDisplay.src = "Ink-blue/ibJapandi.png";
        price = Number(btnJapandi.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }


})


btnCharcoal.addEventListener('click', function () {
    color = "Charcoal"
    if (style === "Modern") {
        roomDisplay.src = "Charcoal/caModern.png";
        price = Number(btnModern.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }

    else if (style === "Scandinavian") {
        roomDisplay.src = "Charcoal/caScandinavian.png";
        price = Number(btnScandinavian.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }

    else if (style === "Industrial") {
        roomDisplay.src = "Charcoal/caIndustrial.png";
        price = Number(btnIndustrial.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }

    else if (style === "Classic") {
        roomDisplay.src = "Charcoal/caClassic.png";
        price = Number(btnClassic.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }

    else if (style === "Japandi") {
        roomDisplay.src = "Charcoal/caJapandi.png";
        price = Number(btnJapandi.dataset.price) + 60;
        priceDisplay.textContent = "Price :$" + price.toLocaleString("en-US");
    }


})





window.addEventListener("load", removePreloader)


function removePreloader() {
    setTimeout(() => { document.getElementById('preloader').style.display = "none"; }, 2000)

}







const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('links-container');

function setMenu(open) {
    navLinks.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', open);
}

menuToggle.addEventListener('click', function () {
    setMenu(!navLinks.classList.contains('open'));
});

document.addEventListener('click', function (event) {
    if (event.target.closest('#links-container a') || !event.target.closest('#my-navbar')) {
        setMenu(false);
    }
});


document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && navLinks.classList.contains('open')) {
        setMenu(false);
        menuToggle.focus();
    }
});


window.matchMedia('(min-width: 992px)').addEventListener('change', function () {
    setMenu(false);
});



























