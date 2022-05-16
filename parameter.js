function bringSingara(taka) {
  console.log(taka + " taka");
  console.log("singara den");
  var singaraPrice = 10;
  var singaraQuantity = taka / singaraPrice;
  return singaraQuantity;
}

var money = 100;
var singara = bringSingara(money);
console.log("ai nen singara", singara);
