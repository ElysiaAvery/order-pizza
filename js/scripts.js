//Business Logic
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
  if (addTopping === "Refried Beans"){
    this.price += 2;
  }
  if (addTopping === "Zanahorias En Escabeche"){
    this.price += 1.50;
  }
  if (addTopping === "Kalamata Olives"){
    this.price += 1.50;
  }
  if (addTopping === "Artichoke Hearts"){
    this.price += 1.50;
  }
  if (addTopping === "Salmon"){
    this.price += 2;
  }
  if (addTopping === "Fried Egg"){
    this.price += 2;
  }
  if (addTopping === "Mushroom"){
    this.price += 1;
  }
  if (addTopping === "Roast Garlic"){
    this.price += 1;
  }
  if (addTopping === "Carmelized Onion"){
    this.price += 1;
  }
  if (addTopping === "Roast Hatch Chile"){
    this.price += 1.50;
  }
  if (addTopping === "Soyrizo"){
    this.price += 2;
  }
  if (addTopping === "Tofu Cheese"){
    this.price += 2;
  }
  if (addTopping === "Daiya"){
    this.price += 2;
  }
  if (addTopping === "Tomato"){
    this.price += 1;
  }
  if (addTopping === "Avocado"){
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
    $("#userPizzaOrder").append("<li>" + newPizza.place + " inch " + newPizza.base + " : $ " + newPizza.price.toFixed(2) + "</li>");
    $('input[type=checkbox]').each(function(){
        this.checked = false;
      });
    $('input[type=radio]').each(function(){
          this.checked = false;
      });
  });
  $("#order-pizza").click(function(event){
    $("#userPizzaTotal").append("<li>" + "Your Total is: $" + totalPizzaPrice.toFixed(2) + "</li>");
  });
});
