function ShoeShop() {
  var shoeCatalogue = shoes;
  let message = "";
  var searchResults = [];

  function shoesAvailable(shoeParam) {
    var color = shoes.value;
    var brand = shoes.value;
    var size = size.value;
    console.log(brand);
    console.log(color);
    var shoesCopy = [];

    for (let index = 0; index < shoeCatalogue.length; index++) {
      if (shoeParam === price) {
        shoeCatalogueCopy.push(Object.create(shoeCatalogue[index]));
        console.log(shoeParam);
        return searchResults;
      }
    }

    if (shoeParam === shoeSize && hoeBrand) {
    } else if (shoeParam !== shoeBrand || shoeColor || shoeSize) {
      return false;
    }

    return shoesCopy;
  }


  return {
    shoesAvailable,
  }
}
