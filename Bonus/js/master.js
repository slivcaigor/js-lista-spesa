

//Grocery List with 'while' cycle
const groceries = ['Olio', 'Burro', 'Aceto', 'Sale', 'Zucchero',];

let i = 0;
let list = "";

while (i < groceries.length) {
  list += groceries[i] + "<br>";
  i++
};
document.querySelector('#ms_list').innerHTML = list;


let groceryList = document.querySelector('#ms_list');
const addToListButton = document.querySelector('#ms_addProduct');
const groceryListInput = document.querySelector("#ms_groceryInput");

let addToList = () => {
  if (groceryListInput.value !== '') {
    let li = document.createElement('li');
    li.textContent = groceryListInput.value;
    groceryList.appendChild(li);
    groceryListInput.value = '';
  }
}

addToListButton.addEventListener('click', () => {
  addToList();
})
