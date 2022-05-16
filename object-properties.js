var computer = {
  price: 29000,
  storage: "256 gb",
  processor: "intel i5",
};

// console.log(computer.processor);

computer.price = 22000;
var computerPrice = computer.price;
// console.log(computerPrice);
computer["price"] = 23000;

var priceProperty = "price";
computer[priceProperty] = 25000;

computer.storage = "1tb";
computer["storage"] = "2tb";
var storageProperty = "storage";
computer[storageProperty] = "3tb";
console.log(computer);
