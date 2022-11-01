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
  constructor(
    incomeID,
    incomeNameInputClass,
    incomeValueInputClass,
    incomeEditID
  ) {
    this.incomeID = "Income" + incomeID;
    this.incomeValueInputClass = incomeValueInputClass;
    this.incomeNameInputClass = incomeNameInputClass;
    this.incomeEditID = "IncomeEdit" + incomeEditID;
  }
}
//validation
function incomeCheck() {
  const incomeName = incomeNameInput.value;
  let incomeValue = parseInt(incomeValueInput.value);
  if (incomeValue < 0) {
    incomeValueInput.setAttribute("placeholder", "Za niska wartość");
    incomeValueInput.style.backgroundColor = "red";
    incomeValueInput.value = "";
    let time = setTimeout(() => {
      incomeValueInput.setAttribute("placeholder", "Wpisz wartość");
      incomeValueInput.style.backgroundColor = "white";
    }, 5000);
    return time;
  } else if (incomeValue === 0) {
    incomeValueInput.setAttribute("placeholder", "Zła wartość");
    incomeValueInput.style.backgroundColor = "red";
    incomeValueInput.value = "";
    let timeZero = setTimeout(() => {
      incomeValueInput.setAttribute("placeholder", "Wpisz wartość");
      incomeValueInput.style.backgroundColor = "white";
    }, 5000);
    return timeZero;
  } else if (incomeValueInput.value === "") {
    incomeValueInput.setAttribute("placeholder", "Zła wartość");
    incomeValueInput.style.backgroundColor = "red";
    incomeValueInput.value = "";
    let timeNaN = setTimeout(() => {
      incomeValueInput.setAttribute("placeholder", "Wpisz wartość");
      incomeValueInput.style.backgroundColor = "white";
    }, 5000);
    return timeNaN;
  } else {
    const newincome = new IncomeList(
      incomeID,
      incomeNameInput.value,
      incomeValueInput.value,
      incomeEditID
    );
    incomeTable.push(newincome);
    incomeID++;
    incomeEditID++;
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
      divIncomeName.innerHTML = element.incomeNameInputClass;
      divIncomeValue.innerHTML = element.incomeValueInputClass;
    });
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
    parseInt(number.incomeValueInputClass)
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
    divIncomeName.innerHTML = element.incomeNameInputClass;
    divIncomeValue.innerHTML = element.incomeValueInputClass;
  });
}

//editfunction
// const bntIncomeEdit = document.querySelector("#incomeEdit");
//

//Remove function

// Create income list

//active all functions

// incomeAddButton.addEventListener("click", appendList);
incomeAddButton.addEventListener("click", sumInput);
// incomeAddButton.addEventListener("click", incomeForEach);
incomeAddButton.addEventListener("click", incomeCheck);
