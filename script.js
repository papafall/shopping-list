const item = document.querySelector("#item");
const addItemBtn = document.querySelector("#addItem");
const list = document.querySelector("ul");

const newItem = function () {
  let itemValue = item.value;
  item.value = "";
  const listItem = document.createElement("li");
  const itemText = document.createElement("span");
  const deleteBtn = document.createElement("button");
  listItem.appendChild(itemText);
  listItem.appendChild(deleteBtn);
  itemText.textContent = itemValue;
  deleteBtn.textContent = "Delete";
  list.appendChild(listItem);
  deleteBtn.addEventListener("click", function () {
    list.removeChild(listItem);
  });
  item.focus();
};

addItemBtn.addEventListener("click", newItem);

item.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    newItem();
  }
});
