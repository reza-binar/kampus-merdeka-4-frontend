/* If else */
const value = 70;
let result;

if (value > 80) {
  result = "A";
} else if (value > 70) {
  result = "B";
} else if (value > 60) {
  result = "C";
} else if (value > 50) {
  result = "D";
} else {
  result = "E";
}

console.log(result);

/* Switch case */
const menu = 1;
let chosedMenu;

switch (menu) {
  case 1:
    chosedMenu = "Tarik Tunai";
    break;
  case 2:
    chosedMenu = "Info Saldo";
    break;
  default:
    chosedMenu = "Exit";
    break;
}

console.log(chosedMenu);
