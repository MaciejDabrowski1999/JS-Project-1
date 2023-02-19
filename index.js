const costsButton = document.querySelector("#costs .addButton");
const incomeButton = document.querySelector("#income .addButton");

const costsTable = [];
const incomeTable = [];
let incomeID = 0;
let costsID = 0;

function incomeUnit() {
  createUnit(true);
  createElemets(true);
  sumAll(true);
  freeSavings(true);
}
function costsUnit() {
  createUnit(false);
  createElemets(false);
  sumAll(false);
  freeSavings(false);
}

const createUnit = (unit) => {
  let variant;
  let table;
  let inputID;
  if (unit === true) {
    variant = "income";
    table = incomeTable;
    inputID = incomeID;
  } else {
    variant = "costs";
    table = costsTable;
    inputID = costsID;
  }
  const inputName = document.querySelector("#" + variant + " .inputName");
  const inputValue = document.querySelector("#" + variant + " .inputValue");
  const createTable = {
    ID: inputID++,
    name: inputName.value,
    value: inputValue.value,
  };
  table.push(createTable);
};

function createElemets(unit) {
  if (unit === true) {
    variant = "income";
    table = incomeTable;
  } else {
    variant = "costs";
    table = costsTable;
  }
  const ulList = document.querySelector("#" + variant + " .list");
  const list = document.createElement("li");
  const divName = document.createElement("div");
  const divValue = document.createElement("div");
  const buttonEdit = document.createElement("button");
  const buttonRemove = document.createElement("button");
  buttonRemove.innerHTML = "Usuń";
  buttonEdit.innerHTML = "Edytuj";
  buttonRemove.setAttribute("class", "remove btn btn-danger");
  list.setAttribute("class", "liItem");
  divName.setAttribute("class", "listDiv text-wrap");
  divValue.setAttribute("class", "listDiv text-wrap");
  buttonEdit.setAttribute("class", "edit btn btn-primary");
  ulList.appendChild(list);
  list.appendChild(divName);
  list.appendChild(divValue);
  list.appendChild(buttonEdit);
  list.appendChild(buttonRemove);

  buttonRemove.addEventListener("click", () => {
    deleteButton(buttonRemove);
  });

  buttonEdit.addEventListener("click", () => {
    editButton(buttonEdit);
  });

  table.forEach((element) => {
    list.id = element.ID;
    divName.id = "divName" + element.ID;
    divValue.id = "divValue" + element.ID;
    divName.innerHTML = element.name;
    divValue.innerHTML = element.value;
  });
}

const sumAll = (unit) => {
  if (unit === true) {
    variant = "income";
    table = incomeTable;
  } else {
    variant = "costs";
    table = costsTable;
  }
  const sumDiv = document.querySelector("#" + variant + " .sumAll");
  const arrayValue = table.map((number) => parseInt(number.value));
  const sum = arrayValue.reduce((acc, number) => {
    return acc + number;
  }, 0);
  sumDiv.innerHTML = sum;
};

function freeSavings() {
  const divMessage = document.querySelector("#message");
  const arrayIncomeValue = incomeTable.map((number) => parseInt(number.value));
  const sumIncome = arrayIncomeValue.reduce((acc, number) => {
    return acc + number;
  }, 0);
  const arrayCostsValue = costsTable.map((number) => parseInt(number.value));
  const sumCosts = arrayCostsValue.reduce((acc, number) => {
    return acc + number;
  }, 0);
  let allSum = sumIncome - sumCosts;
  divMessage.innerHTML = allSum;
}
function deleteButton(deleteBtn) {
  let table;
  const elementID = deleteBtn.parentNode.parentNode.parentNode.id;
  if (elementID === "income") {
    table = incomeTable;
  } else {
    table = costsTable;
  }
  const ulList = document.querySelector("#" + elementID + " .list");
  const chosenItem = deleteBtn.closest("li");
  let idText = deleteBtn.parentNode.id;
  let idNumber = parseInt(idText);
  for (let i = 0; i < table.length; i++)
    if (table[i].ID === idNumber) {
      table[idNumber].value = 0;
      break;
    }

  ulList.removeChild(chosenItem);
  sumAll(), freeSavings();
}

const editButton = (buttonEdit) => {
  const chosenItem = buttonEdit.closest("li");
  const idText = chosenItem.id;
  const idNumber = parseInt(idText);
  const elementID = buttonEdit.parentNode.parentNode.parentNode.id;
  const editPass = buttonEdit;

  let table;

  if (elementID === "income") {
    table = incomeTable;
  } else {
    table = costsTable;
  }
  const inputName = document.querySelector("#" + elementID + " .inputName");
  const inputValue = document.querySelector("#" + elementID + " .inputValue");
  inputName.value = table[idNumber].name;
  inputValue.value = table[idNumber].value;

  createUpdateButton(editPass), freeSavings();
  areaDisable(elementID);
};
function areaDisable(elementID) {
  const addButton = document.querySelector("#" + elementID + " .addButton");
  addButton.setAttribute("disabled", "true");
  const editButton = document.querySelectorAll(".edit");
  const removeButton = document.querySelectorAll(".remove");
  for (let i = 0; i < editButton.length; i++) {
    editButton[i].setAttribute("disabled", "true");
  }
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].setAttribute("disabled", "true");
  }
}

function createUpdateButton(buttonEdit) {
  const elementID = buttonEdit.parentNode.parentNode.parentNode.id;
  const updateButton = document.createElement("button");
  updateButton.innerHTML = "Zapisz";
  updateButton.setAttribute("class", "updateButton btn btn-info");
  updateButton.id = "updateButton";

  const placeDiv = document.querySelector("#" + elementID + " .mainFunction");
  placeDiv.appendChild(updateButton);
  updateButton.addEventListener("click", () => {
    editData(buttonEdit);
  });
}

const editData = (buttonEdit) => {
  const chosenItem = buttonEdit.closest("li");
  let idText = chosenItem.id;
  let idNumber = parseInt(idText);

  let table;
  const elementID = buttonEdit.parentNode.parentNode.parentNode.id;

  if (elementID === "income") {
    table = incomeTable;
  } else {
    table = costsTable;
  }

  const inputName = document.querySelector("#" + elementID + " .inputName");
  const inputValue = document.querySelector("#" + elementID + " .inputValue");

  let name = inputName.value;
  let value = inputValue.value;
  let number = parseInt(value);

  table.splice(idNumber, { ID: idNumber, name: name, value: number });

  let divUpdateName = document.querySelector(
    "#" + elementID + " #divName" + idText
  );
  let divUpdateValue = document.querySelector(
    "#" + elementID + " #divValue" + idText
  );

  divUpdateName.innerHTML = name;
  divUpdateValue.innerHTML = value;

  table[idNumber] = [{ ID: idNumber, name: name, value: value }];

  const updateButton = document.querySelector("#updateButton");
  updateButton.remove();
  inputName.value = "";
  inputValue.value = "";

  areaDisableFalse(elementID);
  sumAll();
  freeSavings();
};

function areaDisableFalse(elementID) {
  const addButton = document.querySelector("#" + elementID + " .addButton");
  addButton.removeAttribute("disabled", "true");
  const removeButton = document.querySelectorAll(".remove");
  const editButton = document.querySelectorAll(".edit");
  for (let i = 0; i < editButton.length; i++) {
    editButton[i].removeAttribute("disabled", "true");
  }
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].removeAttribute("disabled", "true");
  }
}

costsButton.addEventListener("click", costsUnit);
incomeButton.addEventListener("click", incomeUnit);
