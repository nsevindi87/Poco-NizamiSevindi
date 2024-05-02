const heading = document.querySelector("h1");
const input = document.querySelector("#new_item");
const button = document.querySelector("button");

const groceries = ["milk", "eggs", "sugar", "chocolate"];

input.addEventListener("change", addItemToGroceries);
button.addEventListener("click", deleteItemFromGroceries);

populateItems();

function createGroceryList() {
  deleteOldGroceryLists();

  const list = document.createElement("ul");
  heading.insertAdjacentElement("afterend", list);
  return list;
}

function deleteOldGroceryLists() {
  const ulTags = document.querySelectorAll("ul");
  for (const ul of ulTags) {
    ul.remove();
  }
}

function populateItems() {
  const list = createGroceryList();

  for (const item of groceries) {
    let listItem = document.createElement("li");
    listItem.textContent = item;

    list.appendChild(listItem);
  }
}

function addItemToGroceries(e) {
  groceries.push(e.target.value);
  populateItems();
}

function deleteItemFromGroceries() {
  groceries.shift();
  populateItems();
}
