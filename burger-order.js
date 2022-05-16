function bringBurger(money) {
  console.log("give us burgers!");
  console.log("paid amount: ", money);
  var burgerPrice = 200;
  var burgerQuantity = money / burgerPrice;
  return burgerQuantity;
}

var money = 1200;
var burger = bringBurger(money);
console.log("take your burgers ", burger);
