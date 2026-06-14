// Service Search

function searchServices() {

let input =
document.getElementById("serviceSearch")
.value.toLowerCase();

let cards =
document.querySelectorAll(".card");

cards.forEach(card => {

if (
card.innerText.toLowerCase()
.includes(input)
){
card.style.display="block";
}
else{
card.style.display="none";
}

});

}


// Registry Calculator

function calculateRegistry(){

let value =
parseFloat(
document.getElementById(
"propertyValue"
).value
);

if(!value){
alert("Property Value Enter Karein");
return;
}

let stamp =
value * 0.07;

let reg =
value * 0.01;

document.getElementById(
"registryResult"
).innerHTML=

"Stamp Duty ₹ " +
stamp.toLocaleString()

+

"<br>Registry Fee ₹ " +

reg.toLocaleString();

}


// Land Converter

function convertLand(){

let sqft =
parseFloat(
document.getElementById(
"sqft"
).value
);

if(!sqft){
alert("Area Enter Karein");
return;
}

let sqm =
sqft * 0.092903;

document.getElementById(
"landResult"
).innerHTML=

sqm.toFixed(2)

+

" Square Meter";

}