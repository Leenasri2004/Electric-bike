console.log("JS WORKING");
console.log("Voltaro Website Loaded ✅");

document.addEventListener("DOMContentLoaded", function () {


// RTL TOGGLE
const rtlBtn = document.getElementById("rtlBtn");

if (rtlBtn) {
rtlBtn.addEventListener("click", function () {
document.body.classList.toggle("rtl");
});
}


// DARK MODE ICON
const themeIcon = document.getElementById("theme-icon");

if (themeIcon) {
themeIcon.addEventListener("click", function () {

document.body.classList.toggle("dark-mode");

if (document.body.classList.contains("dark-mode")) {
themeIcon.classList.remove("fa-moon");
themeIcon.classList.add("fa-sun");
} else {
themeIcon.classList.remove("fa-sun");
themeIcon.classList.add("fa-moon");
}

});
}


// SMOOTH SCROLL
document.querySelectorAll("a[href^='#']").forEach(anchor => {
anchor.addEventListener("click", function (e) {

const target = document.querySelector(this.getAttribute("href"));

if (target) {
e.preventDefault();
target.scrollIntoView({ behavior: "smooth" });
}

});
});


// HERO BUTTON SCROLL
const shopBtn = document.querySelector(".hero-buttons .orange");
const bookBtn = document.querySelector(".hero-buttons .black");

if (shopBtn) {
shopBtn.addEventListener("click", function (e) {
e.preventDefault();
document.querySelector(".top-picks")?.scrollIntoView({ behavior: "smooth" });
});
}

if (bookBtn) {
bookBtn.addEventListener("click", function (e) {
e.preventDefault();
document.querySelector(".test-ride-section")?.scrollIntoView({ behavior: "smooth" });
});
}


// SLIDERS
const sliders = [
{ input: "range", output: "rangeValue", suffix: "+" },
{ input: "load", output: "loadValue", suffix: " LB" },
{ input: "torque", output: "torqueValue", suffix: " NM" },
{ input: "height", output: "heightValue", suffix: " ft" }
];

sliders.forEach(slider => {

const input = document.getElementById(slider.input);
const output = document.getElementById(slider.output);

if (!input || !output) return;

output.textContent = input.value + slider.suffix;

input.addEventListener("input", function () {
output.textContent = input.value + slider.suffix;
});

});


// CLASS BUTTONS
const classButtons = document.querySelectorAll(".class-btn");

classButtons.forEach(button => {

button.addEventListener("click", () => {

classButtons.forEach(btn => btn.classList.remove("active"));
button.classList.add("active");

});

});


// SHOW BIKES
const showBtn = document.getElementById("showBtn");

if (showBtn) {

showBtn.addEventListener("click", () => {

const activeClass = document.querySelector(".class-btn.active");
const selectedClass = activeClass ? activeClass.dataset.class : "None";

alert("Selected class: " + selectedClass);

});

}


// FAQ
document.querySelectorAll(".faq-question").forEach(question => {

question.addEventListener("click", function () {

const faqItem = this.parentElement;
faqItem.classList.toggle("active");

});

});


// TEST RIDE FORM
const form = document.querySelector(".test-ride-form");

if (form) {

form.addEventListener("submit", function (e) {

e.preventDefault();
alert("🎉 Test Ride Booked!");
form.reset();

});

}


// RANGE CALCULATOR
const calculateBtn = document.querySelector(".calculate-btn");
const resultValue = document.querySelector(".range-result h3");

if (calculateBtn && resultValue) {

calculateBtn.addEventListener("click", function (e) {

e.preventDefault();
let randomRange = Math.floor(Math.random() * 30) + 30;
resultValue.innerHTML = randomRange + " <span>/ miles</span>";

});

}


// COMPARE BUTTON
const compareBtn = document.querySelector(".compare-btn");

if (compareBtn) {
compareBtn.addEventListener("click", function () {
alert("Compare feature coming soon 🔥");
});
}


// ABOUT BUTTONS
const learnBtn = document.getElementById("learnBtn");
const moreContent = document.getElementById("moreContent");

if (learnBtn && moreContent) {

learnBtn.addEventListener("click", function () {

moreContent.classList.toggle("show");

learnBtn.textContent =
moreContent.classList.contains("show") ? "Show Less" : "Learn More";

});

}

const knowBtn = document.getElementById("knowBtn");
const whyMore = document.getElementById("whyMore");

if (knowBtn && whyMore) {

knowBtn.addEventListener("click", function () {

whyMore.classList.toggle("show");

knowBtn.textContent =
whyMore.classList.contains("show") ? "Show Less" : "Know More";

});

}


// SCROLL REVEAL
const revealElements = document.querySelectorAll(
".reveal, .reveal-left, .reveal-right, .timeline-item"
);

window.addEventListener("scroll", function () {

revealElements.forEach(el => {

const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;

if (elementTop < windowHeight - 100) {
el.classList.add("active");
el.classList.add("show");
}

});

});


// COUNTERS
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");
const current = +counter.innerText;
const increment = target / 200;

if (current < target) {

counter.innerText = Math.ceil(current + increment);
setTimeout(updateCounter, 20);

} else {

counter.innerText = target;

}

};

updateCounter();

});


});


// WARRANTY CARDS
const warrantyCards = document.querySelectorAll(".warranty-card");

if (warrantyCards.length > 0) {

window.addEventListener("scroll", () => {

warrantyCards.forEach(card => {

const top = card.getBoundingClientRect().top;

if (top < window.innerHeight - 100) {
card.classList.add("show");
}

});

});

}




// DARK MODE TOGGLE

document.addEventListener("DOMContentLoaded", function(){

const toggle = document.getElementById("theme-toggle");

if(toggle){

toggle.addEventListener("click", function(){

document.body.classList.toggle("dark-mode");

});

}

});




const bikes = {

/* KIDS */

kid1:{
name:"Voltaro Kid X",
price:"₹25,000",
image:"images/kid_1.jpg",
desc:"Fun electric bike designed for kids.",
motor:"250W",
range:"35 KM",
speed:"20 KM/H",
battery:"36V"
},

kid2:{
name:"Voltaro Mini",
price:"₹22,000",
image:"images/kid_2.jfif",
desc:"Lightweight mini electric bike.",
motor:"200W",
range:"30 KM",
speed:"18 KM/H",
battery:"36V"
},

kid3:{
name:"Voltaro Spark",
price:"₹23,500",
image:"images/kid_3.jpg",
desc:"Perfect starter electric bike.",
motor:"220W",
range:"32 KM",
speed:"19 KM/H",
battery:"36V"
},

kid4:{
name:"Voltaro FunRide",
price:"₹24,000",
image:"images/kid_4.jfif",
desc:"Comfortable and safe ride for kids.",
motor:"230W",
range:"34 KM",
speed:"20 KM/H",
battery:"36V"
},

kid5:{
name:"Voltaro Junior",
price:"₹21,000",
image:"images/kid_5.jpg",
desc:"Affordable electric bike for kids.",
motor:"200W",
range:"30 KM",
speed:"18 KM/H",
battery:"36V"
},

kid6:{
name:"Voltaro Kids Pro",
price:"₹26,000",
image:"images/kid_6.jfif",
desc:"Premium kids electric bike.",
motor:"250W",
range:"36 KM",
speed:"21 KM/H",
battery:"36V"
},

/* ADULT */

adult1:{
name:"Voltaro X1",
price:"₹45,000",
image:"images/adult_1.jpg",
desc:"Urban commuter electric bike.",
motor:"500W",
range:"70 KM",
speed:"40 KM/H",
battery:"48V"
},

adult2:{
name:"Voltaro X2",
price:"₹55,000",
image:"images/adult_2.webp",
desc:"Powerful electric commuter bike.",
motor:"650W",
range:"80 KM",
speed:"45 KM/H",
battery:"52V"
},

adult3:{
name:"Voltaro Pro",
price:"₹65,000",
image:"images/adult_3.webp",
desc:"High performance electric bike.",
motor:"850W",
range:"95 KM",
speed:"50 KM/H",
battery:"60V"
},

adult4:{
name:"Voltaro Urban",
price:"₹52,000",
image:"images/adult_5.webp",
desc:"Stylish city electric bike.",
motor:"600W",
range:"75 KM",
speed:"42 KM/H",
battery:"48V"
},

adult5:{
name:"Voltaro Max",
price:"₹72,000",
image:"images/adult_4.webp",
desc:"Premium electric touring bike.",
motor:"1000W",
range:"110 KM",
speed:"55 KM/H",
battery:"72V"
},

adult6:{
name:"Voltaro Sport",
price:"₹60,000",
image:"images/adult_6.webp",
desc:"Sport performance e-bike.",
motor:"800W",
range:"90 KM",
speed:"48 KM/H",
battery:"60V"
},

/* SENIOR */

senior1:{
name:"Voltaro Comfort",
price:"₹40,000",
image:"images/old_1.jpg",
desc:"Easy riding bike for seniors.",
motor:"350W",
range:"55 KM",
speed:"28 KM/H",
battery:"48V"
},

senior2:{
name:"Voltaro EasyRide",
price:"₹42,000",
image:"images/old_2.jfif",
desc:"Smooth and stable electric bike.",
motor:"350W",
range:"60 KM",
speed:"28 KM/H",
battery:"48V"
},

senior3:{
name:"Voltaro Balance",
price:"₹39,000",
image:"images/old_3.avif",
desc:"Designed for maximum stability.",
motor:"300W",
range:"50 KM",
speed:"25 KM/H",
battery:"48V"
},

senior4:{
name:"Voltaro Comfort Plus",
price:"₹44,000",
image:"images/old_4.jpg",
desc:"Premium comfort electric bike.",
motor:"400W",
range:"65 KM",
speed:"30 KM/H",
battery:"48V"
},

senior5:{
name:"Voltaro Glide",
price:"₹41,500",
image:"images/old_5.jpg",
desc:"Smooth riding electric bike.",
motor:"350W",
range:"58 KM",
speed:"27 KM/H",
battery:"48V"
},

senior6:{
name:"Voltaro Easy Max",
price:"₹45,000",
image:"images/old_6.avif",
desc:"Maximum comfort for seniors.",
motor:"420W",
range:"70 KM",
speed:"30 KM/H",
battery:"48V"
}

}


const params = new URLSearchParams(window.location.search)
const bikeID = params.get("bike")

const bike = bikes[bikeID]

if(bike){

document.getElementById("bikeImage").src = bike.image
document.getElementById("bikeName").innerText = bike.name
document.getElementById("bikePrice").innerText = bike.price
document.getElementById("bikeDesc").innerText = bike.desc

document.getElementById("motor").innerText = bike.motor
document.getElementById("range").innerText = bike.range
document.getElementById("speed").innerText = bike.speed
document.getElementById("battery").innerText = bike.battery

}




// IMAGE THUMBNAIL CHANGE

const mainImage = document.getElementById("bikeImage");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(thumb => {

thumb.addEventListener("click", () => {

mainImage.src = thumb.src;

});

});



// SPEC TABLE

document.getElementById("motorSpec").innerText = bike.motor;
document.getElementById("rangeSpec").innerText = bike.range;
document.getElementById("speedSpec").innerText = bike.speed;
document.getElementById("batterySpec").innerText = bike.battery;



// STICKY BUY BAR

const buyBar = document.querySelector(".buy-bar");

window.addEventListener("scroll", () => {

if(window.scrollY > 400){
buyBar.style.bottom = "0";
}
else{
buyBar.style.bottom = "-100px";
}

});