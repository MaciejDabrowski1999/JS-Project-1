const incomeUl = document.querySelector(".incomeList");
const incomeValueInput = document.querySelector(".incomeValue");
const incomeNameInput = document.querySelector(".incomeName");
const incomeAddButton = document.querySelector(".incomeAddButton");

//zmienneincome
let incomeID = 1;
let listIncomeID = 1;
let incomeTable = [];
let bntIncomeEditId = 1;
let listIncomeTable = [];

function addList() {
  const listIncome = document.createElement("li");
  const divInputName = document.createElement("div");
  const divInputValue = document.createElement("div");
  const buttonIncomeEdit = document.createElement("button");
  const buttonIncomeRemove = document.createElement("button");

  buttonIncomeRemove.innerHTML = "Usuń";
  buttonIncomeEdit.innerHTML = "Edytuj";

  buttonIncomeRemove.setAttribute("class", "incomeRemove");

  listIncome.setAttribute("display", "flex");
  divInputName.setAttribute("contenteditable", false);
  divInputValue.setAttribute("contenteditable", false);
  divInputName.setAttribute("class", "listDiv");
  divInputValue.setAttribute("class", "listDiv");
  incomeUl.appendChild(listIncome);
  listIncome.appendChild(divInputName);
  listIncome.appendChild(divInputValue);
  listIncome.appendChild(buttonIncomeEdit);
  listIncome.appendChild(buttonIncomeRemove);
}
// Class for Income
class IncomeList {
  constructor(incomeID, incomeNameInput, incomeValueInput) {
    this.incomeID = incomeID;
    this.incomeValueInput = incomeValueInput;
    this.incomeNameInput = incomeNameInput;
  }
}

//Add to table new income
function appendList() {
  const newincome = new IncomeList(
    incomeID,
    incomeNameInput.value,
    incomeValueInput.value
  );
  incomeTable.push(newincome);
  incomeID++;
}
//sum all income
function sumInput() {
  const incomeDiv = document.querySelector(".sumAll");
  const arrayValue = incomeTable.map((number) =>
    parseInt(number.incomeValueInput)
  );
  const sum = arrayValue.reduce((acc, number) => {
    return acc + number;
  }, 0);
  incomeDiv.innerHTML = sum;
}
//editfunction
// const bntIncomeEdit = document.querySelector("#incomeEdit");
//

//Remove function

// Create income list

//active all functions
incomeAddButton.addEventListener("click", addList);
incomeAddButton.addEventListener("click", appendList);
incomeAddButton.addEventListener("click", sumInput);
