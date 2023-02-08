// function pizzaOven(crustType, sauceType, cheeses, toppings){
//     var pizza={
//     pizza.crustType = crustType;
//     pizza.sauceType = sauceType;
//     pizza.cheeses = cheeses;
//     pizza.toppings = toppings;
//     }
//     return pizza;
// }

// var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
// console.log(pizza1)

// var pizza2 = pizzaOven ("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
// console.log(pizza2)


// ------------Bonus challenge---------//

var crustSelection= ["deep dish","hand tossed", "thin"]
var sauceSelection= ["marinara", "traditional", "barbecue", "ranch"]
var cheeseSelection=["mozzarella", "feta","provolone", "gorgonzola", "parmesan","bluecheese"]
var toppingsSelection=["pepperoni","sausage","tomato", "arugula", "spinach","corn"]


function tworandom (arr){
    newArray=[]
    var index1 = Math.floor(Math.random() * arr.length)
    newArray.push(index1)
    var index2 = Math.floor(Math.random() * arr.length)
    if (index1!=index2){
        newArray.push(index2)
        return newArray
    }
    else {
        index2=Math.floor(Math.random() * arr.length)
    }
    }
    
    var randomcrustType = crustSelection[Math.floor(Math.random()*crustSelection.length)]
    var randomsauceType = sauceSelection[Math.floor(Math.random()*sauceSelection.length)]
    var randomcheeses   = tworandom(cheeseSelection)
    var randomtoppings  = tworandom(toppingsSelection)

function randomPizza (crustType, sauceType, cheeses, toppings){

    var pizza = {
        crustType :randomcrustType,
        sauceType :randomsauceType,
        cheeses   :randomcheeses,
        toppings  :randomtoppings,  
    }
    return pizza;
}
console.log(pizza)
