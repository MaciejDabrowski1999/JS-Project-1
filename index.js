const incomeUl = document.querySelector(".incomeList");
const incomeValueInput = document.querySelector(".incomeValue");
const incomeNameInput = document.querySelector(".incomeName");
const incomeAddButton = document.querySelector(".incomeAddButton");

//zmienneincome
let incomeID = 1;
let incomeEditID = 1;
let incomeTable = [];

// Class for Income
class IncomeList {
  constructor(incomeID, incomeNameInput, incomeValueInput, incomeEditID) {
    this.incomeID = "Income" + incomeID;
    this.incomeValueInput = incomeValueInput;
    this.incomeNameInput = incomeNameInput;
    this.incomeEditID = "IncomeEdit" + incomeEditID;
  }
}

//Add to table new income
function appendList() {
  const newincome = new IncomeList(
    incomeID,
    incomeNameInput.value,
    incomeValueInput.value,
    incomeEditID
  );
  incomeTable.push(newincome);
  incomeID++;
  incomeEditID++;
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

function incomeForEach() {
  const listIncome = document.createElement("li");
  const divIncomeName = document.createElement("div");
  const divIncomeValue = document.createElement("div");
  const buttonIncomeEdit = document.createElement("button");
  const buttonIncomeRemove = document.createElement("button");
  buttonIncomeRemove.innerHTML = "Usuń";
  buttonIncomeEdit.innerHTML = "Edytuj";
  buttonIncomeRemove.setAttribute("class", "incomeRemove");
  listIncome.setAttribute("display", "flex");
  divIncomeName.setAttribute("class", "listDiv");
  divIncomeValue.setAttribute("class", "listDiv");
  incomeUl.appendChild(listIncome);
  listIncome.appendChild(divIncomeName);
  listIncome.appendChild(divIncomeValue);
  listIncome.appendChild(buttonIncomeEdit);
  listIncome.appendChild(buttonIncomeRemove);

  incomeTable.forEach((element) => {
    listIncome.id = element.incomeID;
    buttonIncomeEdit.id = element.incomeEditID;
    divIncomeName.innerHTML = element.incomeNameInput;
    divIncomeValue.innerHTML = element.incomeValueInput;
  });
}

//editfunction
// const bntIncomeEdit = document.querySelector("#incomeEdit");
//

//Remove function

// Create income list

//active all functions
// incomeAddButton.addEventListener("click", addList);
incomeAddButton.addEventListener("click", appendList);
incomeAddButton.addEventListener("click", sumInput);
incomeAddButton.addEventListener("click", incomeForEach);

let tab = incomeTable;
console.log(tab);
