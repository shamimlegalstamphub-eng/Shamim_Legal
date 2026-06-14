function searchServices() {

let input = document
.getElementById("serviceSearch")
.value.toLowerCase();

let cards =
document.querySelectorAll(".service-card");

cards.forEach(function(card){

let text =
card.innerText.toLowerCase();

if(text.includes(input)){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

}

function calculateRegistry(){

let value =
parseFloat(
document.getElementById("propertyValue").value
);

if(!value){
alert("Property Value Enter Karein");
return;
}

let stampDuty = value * 0.07;
let registryFee = value * 0.01;

document.getElementById("result").innerHTML =

"Estimated Stamp Duty: ₹ " +
stampDuty.toLocaleString()

+

"<br><br>Estimated Registry Fee: ₹ " +

registryFee.toLocaleString();

}