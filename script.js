const container = document.createElement("div");
const listContainer = document.createElement("div");

function removeListItem(event) {
    let itemToRemove = document.getElementById(removeItem.id);
    listContainer.removeChild(itemToRemove);
};

function createItem(event) {
    let itemId = userInput.value;
    let removeItem = document.createElement("button");
    removeItem.addEventListener("click", removeListItem);
    removeItem.setAttribute("id", itemId);
    removeItem.setAttribute("name", itemId);
    removeItem.innerText = "Delete";
    let itemLabel = document.createElement("label");
    itemLabel.htmlFor = "deleteButton";
    itemLabel.textContent = userInput.value;
    listContainer.append(itemLabel);
    listContainer.append(removeItem);
    userInput.value = "";
};

const text = document.createElement("h3");
text.textContent = "Shopping List";
container.append(text);

const inputLabel = document.createElement("label");
inputLabel.htmlFor = "userInput";
inputLabel.innerText = "Enter a new item:";
container.append(inputLabel);

const userInput = document.createElement("input");
userInput.setAttribute("type", "text");
userInput.setAttribute("id", "userInput");
userInput.setAttribute("name", "userInput");
container.append(userInput);

const addListItem = document.createElement("BUTTON");
addListItem.addEventListener("click", createItem);
addListItem.innerText = "Add to List";
container.append(addListItem);


document.body.append(container);
document.body.append(listContainer);