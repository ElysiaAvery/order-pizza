//Business Logic
function Pizza(base){
  this.base = base;
  if (base === "regular"){
    this.price = 12;
    this.place = 12;
  }
  if (base === "large"){
    this.price = 17;
    this.place = 18;
  }
  if (base === "gluten-free"){
    this.price = 17;
    this.place = 15;
  }
}

Pizza.prototype.topping = function(addTopping){
  this.base += " " +addTopping;
  if (addTopping === "refried-beans"){
    this.price += 2;
  }
  if (addTopping === "zanahorias-en-escabeche"){
    this.price += 1.50;
  }
  if (addTopping === "olives"){
    this.price += 1.50;
  }
  if (addTopping === "artichoke"){
    this.price += 1.50;
  }
  if (addTopping === "salmon"){
    this.price += 2;
  }
  if (addTopping === "fried-egg"){
    this.price += 2;
  }
  if (addTopping === "mushroom"){
    this.price += 1;
  }
  if (addTopping === "garlic"){
    this.price += 1;
  }
  if (addTopping === "onion"){
    this.price += 1;
  }
  if (addTopping === "hatch-chile"){
    this.price += 1.50;
  }
  if (addTopping === "soyrizo"){
    this.price += 2;
  }
  if (addTopping === "tofu-cheese"){
    this.price += 2;
  }
  if (addTopping === "daiya"){
    this.price += 2;
  }
  if (addTopping === "tomato"){
    this.price += 1;
  }
  if (addTopping === "avocado"){
    this.price += 1.50;
  }
}

//UI Logic
$(document).ready(function(){
  // $("form").submit(function(event){
  //   event.preventDefault();
  var totalPizzaPrice = 0;
  $("#add-pizza").click(function(event){
    event.preventDefault();

    var newPizza = new Pizza ($("input[name='base']:checked").val());
    $("input[name='pizza-topping']:checked").each(function(){
      newPizza.topping($(this).val());
    });
    totalPizzaPrice += newPizza.price;
    $("#userPizzaOrder").append("<li>" + newPizza.place + newPizza.base + newPizza.price.toFixed(2) + "</li>");
    $('input[type=checkbox]').each(function(){
        this.checked = false;
      });
    $('input[type=radio]').each(function(){
          this.checked = false;
      });
  });
  $("#order-pizza").click(function(event){
    $("#userPizzaTotal").append("<li>" + totalPizzaPrice.toFixed(2) + "</li>");
  });
});
