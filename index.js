const incomeUl = document.querySelector(".incomeList");
const incomeValueInput = document.querySelector(".incomeValue");
const incomeNameInput = document.querySelector(".incomeName");
const incomeAddButton = document.querySelector(".incomeAddButton");

//zmienneincome
let incomeID = 0;
let incomeEditId = 0;
let incomeTable = [];

// Class for Income
class IncomeList {
  constructor(
    incomeID,
    incomeEditId,
    incomeEditCheck,
    incomeNameInputClass,
    incomeValueInputClass
  ) {
    this.incomeID = "list" + incomeID;
    this.incomeEditId = "edit" + incomeEditId;
    this.incomeEditCheck = incomeEditCheck;
    this.incomeValueInputClass = incomeValueInputClass;
    this.incomeNameInputClass = incomeNameInputClass;
  }
}
//Income code
function incomeCheck() {
  //validation
  let incomeEditCheck = false;
  let incomeValue = parseInt(incomeValueInput.value);
  if (incomeValue < 0) {
    incomeValueInput.setAttribute("placeholder", "Za niska wartość");
    incomeValueInput.style.backgroundColor = "red";
    incomeValueInput.value = "";
    let time = setTimeout(() => {
      incomeValueInput.setAttribute("placeholder", "Wpisz wartość");
      incomeValueInput.style.backgroundColor = "white";
    }, 2000);
    return time;
  } else if (incomeValue === 0) {
    incomeValueInput.setAttribute("placeholder", "Zła wartość");
    incomeValueInput.style.backgroundColor = "red";
    incomeValueInput.value = "";
    let timeZero = setTimeout(() => {
      incomeValueInput.setAttribute("placeholder", "Wpisz wartość");
      incomeValueInput.style.backgroundColor = "white";
    }, 2000);
    return timeZero;
  } else if (incomeValueInput.value === "" && incomeNameInput.value === "") {
    incomeValueInput.setAttribute("placeholder", "Zła wartość");
    incomeValueInput.style.backgroundColor = "red";
    incomeValueInput.value = "";
    incomeNameInput.setAttribute("placeholder", "Zła wartość");
    incomeNameInput.style.backgroundColor = "red";
    incomeNameInput.value = "";
    let timeNaN = setTimeout(() => {
      incomeValueInput.setAttribute("placeholder", "Wpisz wartość");
      incomeValueInput.style.backgroundColor = "white";
      incomeNameInput.setAttribute("placeholder", "Wpisz wartość");
      incomeNameInput.style.backgroundColor = "white";
    }, 2000);
    return timeNaN;
  } else if (incomeNameInput.value === "") {
    incomeNameInput.setAttribute("placeholder", "Zła wartość");
    incomeNameInput.style.backgroundColor = "red";
    incomeNameInput.value = "";
    let timeNaNName = setTimeout(() => {
      incomeNameInput.setAttribute("placeholder", "Wpisz wartość");
      incomeNameInput.style.backgroundColor = "white";
    }, 2000);
    return timeNaNName;
  } else if (incomeValueInput.value === "") {
    incomeValueInput.setAttribute("placeholder", "Zła wartość");
    incomeValueInput.style.backgroundColor = "red";
    incomeValueInput.value = "";
    let timeZero = setTimeout(() => {
      incomeValueInput.setAttribute("placeholder", "Wpisz wartość");
      incomeValueInput.style.backgroundColor = "white";
    }, 2000);
    return timeZero;
  } else {
    function test() {
      console.log("test1");
    }
    //create new list
    function createClass() {
      const newincome = new IncomeList(
        incomeID,
        incomeEditId,
        incomeEditCheck,
        incomeNameInput.value,
        incomeValueInput.value
      );
      incomeTable.push(newincome);
      incomeID++;
      incomeEditId++;
    }
    //create elements
    const createElement = () => {
      const listIncome = document.createElement("li");
      const divIncomeName = document.createElement("div");
      const divIncomeValue = document.createElement("div");
      const buttonIncomeEdit = document.createElement("button");
      const buttonIncomeRemove = document.createElement("button");
      buttonIncomeRemove.innerHTML = "Usuń";
      buttonIncomeEdit.innerHTML = "Edytuj";
      buttonIncomeRemove.setAttribute("class", "incomeRemove");
      listIncome.setAttribute("display", "flex");
      listIncome.setAttribute("onClick", "incomeEdit(this.id)");
      divIncomeName.setAttribute("class", "listDiv");
      divIncomeValue.setAttribute("class", "listDiv");
      buttonIncomeEdit.setAttribute("onClick", "editTask(this.id)");
      incomeUl.appendChild(listIncome);
      listIncome.appendChild(divIncomeName);
      listIncome.appendChild(divIncomeValue);
      listIncome.appendChild(buttonIncomeEdit);
      listIncome.appendChild(buttonIncomeRemove);

      incomeTable.forEach((element) => {
        listIncome.id = element.incomeID;
        buttonIncomeEdit.id = element.incomeEditId;
        divIncomeName.innerHTML = element.incomeNameInputClass;
        divIncomeValue.innerHTML = element.incomeValueInputClass;
      });
    };
    //sum table
    const sumAll = () => {
      const incomeDiv = document.querySelector(".sumAll");
      const arrayValue = incomeTable.map((number) =>
        parseInt(number.incomeValueInputClass)
      );
      const sum = arrayValue.reduce((acc, number) => {
        return acc + number;
      }, 0);
      incomeDiv.innerHTML = sum;
    };
    test(), createClass(), createElement(), sumAll(), editTask(), incomeEdit();
  }
  incomeValueInput.value = "";
  incomeNameInput.value = "";
}

//editfunction
const incomeEdit = (el) => {
  console.log(el);
};
function editTask(edit) {
  console.log("test2");
  console.log(incomeTable);
  const idListCheck = incomeTable.map((element) => {
    const name = element.incomeID;
    const splitName = name.split("");
    const idName = splitName[splitName.length - 1];
    return idName;
  });
  const idEditCheck = incomeTable.map((element) => {
    const edit = element.incomeEditId;
    const splitEdit = edit.split("");
    const idEdit = splitEdit[splitEdit.length - 1];
    return idEdit;
  });
  console.log(idListCheck);
  console.log(idEditCheck);
  const editDiv = document.getElementById(idEditCheck);
}

//Remove function
incomeAddButton.addEventListener("click", incomeCheck);
