//Grocery List with 'for' cycle
let groceries = ['Olio', 'Burro', 'Aceto', 'Sale', 'Zucchero',];

let list = "";
for (let i = 0; i < groceries.length; i++) {
  list += groceries[i] + "<br>";
};

document.getElementById("ms_list").innerHTML = list;

