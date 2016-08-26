# Pizza Order

#### By _Elysia Nason_

## Description

_A web app that allows the user to order multiple pizzas with their choice of toppings_

### Specifications

Program will allow the user to input their choice of pizza toppings.
* Example Input: n/a
* Example Output: Pizza = (toppings, size)

Program will add up pizza toppings and pizza base to a cumulative price.
* Example Input: Regular pizza base with artichoke hearts
* Example Output: this.price = 12 + this.topping = 1.5 = totalPrice

Program will allow the user to add multiple pizzas
* Example Input: regular cheese, large pineapple
* Example Output: newPizza.price += totalPizzaPrice

User can input their delivery information
* Example Input: 12 Stevens Terrace, Lancaster, NH 03584
* Example Output: $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedAddressArea = $(this).find("input.new-area").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedAddressArea)
      newContact.addresses.push(newAddress)
    });

## Setup/Installation Requirements

* _Copy the repository from GitHub_
* _Open the index.html file a browser of your choice_

## GitHub link

https://github.com/elysiaavery/order-pizza

## Licensing

* MIT

Copyright (c) 2016 **_Elysia Nason_**

Original Template Copyright (c) 2016 **_Ryan Loos_**
