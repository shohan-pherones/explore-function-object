var color = "white";

if (color == "blue") {
  console.log("color is blue");
} else if (color == "red") {
  console.log("color is red");
} else if (color == "white") {
  console.log("color is white");
} else {
  console.log("color is black");
}

switch (color) {
  case "blue":
    console.log("color is blue");
    break;
  case "red":
    console.log("color is red");
    break;
  case "white":
    console.log("color is white");
    break;
  default:
    console.log("color is black");
}
