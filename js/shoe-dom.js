var shoeBrandSelector = document.querySelector(".brandSelector");
var shoeColorSelector = document.querySelector(".colorSelector");
var shoeSizeSelector = document.querySelector(".sizeSelector");
var searchButton = document.querySelector(".searchBtn");
var shoeDisplay = document.querySelector(".displayShoeTemplate");
var shoeOptions = document.querySelector(".shoeOptions");

var shopSource = document.querySelector(".shopTemplate").innerHTML;
var shopTemplate = Handlebars.compile(shopSource);

var instance = ShoeShop();

function searchDisplayBtn() {
  
  var brand = shoeBrandSelector.value;
  var color = shoeColorSelector.value;
  var size = shoeSizeSelector.value;

 var shoeSearch = {};

 if(brand !== ""){
 shoeSearch.brand = brand;
 }

 if(color !== ""){
   shoeSearch.color = color;
 }
  
 if(size !== ""){
   shoeSearch.size = Number(size);
 }

instance.shoesAvailable(brand, color, size)

  var shoeData = {shoe: shoeOptions};
  var shoeDataHTML = shopTemplate(shoeData);
  shoeDisplay.innerHTML = shoeDataHTML;
}

searchButton.addEventListener("onclick", searchDisplayBtn);
