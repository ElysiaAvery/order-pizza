//Business Logic
function Address(street, city) {
  this.street = street;
  this.city = city;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city;
}

function Pizza(base){
  this.base = base;
  if (base === "Regular,"){
    this.price = 12;
    this.place = 12;
  }
  if (base === "Large,"){
    this.price = 17;
    this.place = 18;
  }
  if (base === "Gluten-Free,"){
    this.price = 17;
    this.place = 15;
  }
}

Pizza.prototype.topping = function(addTopping){
  this.base += " " +addTopping;
  if (addTopping === "<li>Refried Beans</li>"){
    this.price += 2;
  }
  if (addTopping === "<li>Zanahorias En Escabeche</li>"){
    this.price += 1.50;
  }
  if (addTopping === "<li>Kalamata Olives</li>"){
    this.price += 1.50;
  }
  if (addTopping === "<li>Artichoke Hearts</li>"){
    this.price += 1.50;
  }
  if (addTopping === "<li>Salmon</li>"){
    this.price += 2;
  }
  if (addTopping === "<li>Fried Egg</li>"){
    this.price += 2;
  }
  if (addTopping === "<li>Mushroom</li>"){
    this.price += 1;
  }
  if (addTopping === "<li>Roast Garlic</li>"){
    this.price += 1;
  }
  if (addTopping === "<li>Carmelized Onion</li>"){
    this.price += 1;
  }
  if (addTopping === "<li>Roast Hatch Chile</li>"){
    this.price += 1.50;
  }
  if (addTopping === "<li>Soyrizo</li>"){
    this.price += 2;
  }
  if (addTopping === "<li>Tofu Cheese</li>"){
    this.price += 2;
  }
  if (addTopping === "<li>Daiya</li>"){
    this.price += 2;
  }
  if (addTopping === "<li>Tomato</li>"){
    this.price += 1;
  }
  if (addTopping === "<li>vocado</li>"){
    this.price += 1.50;
  }
}

//UI Logic
$(document).ready(function(){
debugger;
  var totalPizzaPrice = 0;
  $("#add-pizza").click(function(event){
    event.preventDefault();
    var newPizza = new Pizza ($("input[name='base']:checked").val());
    $("input[name='pizza-topping']:checked").each(function(){
      newPizza.topping($(this).val());
    });
    totalPizzaPrice += newPizza.price;
    $("#userPizzaOrder").append("<li>" + newPizza.place + " inch " + newPizza.base + " $ " + newPizza.price.toFixed(2) + "</li>");
    $('input[type=checkbox]').each(function(){
        this.checked = false;
      });
    $('input[type=radio]').each(function(){
          this.checked = false;
      });
  });
  $("#bringModal").click(function(){
    $('#startModal').modal();
    $("#address-modal").submit(function(event){
      $(".new-address").each(function() {
        var inputtedStreet = $(this).find("input#street").val();
        var inputtedCity = $(this).find("input#city").val();
        var newAddress = new Address(inputtedStreet, inputtedCity)
        addresses.push(newAddress)
      $('#startModal').modal('hide');
      console.log();
    })
  $("#order-pizza").click(function(event){
    console.log();
    $("#userPizzaTotal").append("<li>" + "Your Total is: $" + totalPizzaPrice.toFixed(2) + "</li>");
    $("ul#userDelivery").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#userDelivery").append("<li>" + address.fullAddress() + "</li>");

    })
  });
});
});
});
