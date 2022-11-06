const incomeUl = document.querySelector(".incomeList");
const incomeValueInput = document.querySelector(".incomeValue");
const incomeNameInput = document.querySelector(".incomeName");
const incomeAddButton = document.querySelector(".incomeAddButton");

//zmienneincome
let incomeID = 0;
let incomeTable = [];

// Class for Income
class IncomeList {
  constructor(incomeID, incomeNameInputClass, incomeValueInputClass) {
    this.incomeID = incomeID;
    this.incomeValueInputClass = incomeValueInputClass;
    this.incomeNameInputClass = incomeNameInputClass;
  }
}
//Income code
function incomeCheck() {
  //validation
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
        incomeNameInput.value.trim(),
        incomeValueInput.value
      );
      incomeTable.push(newincome);
      incomeID++;
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
      buttonIncomeRemove.setAttribute("onClick", "deleteIncome(this.id)");
      listIncome.setAttribute("display", "flex");
      listIncome.setAttribute("class", "incomeList");
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
        buttonIncomeEdit.id = element.incomeID;
        buttonIncomeRemove.id = element.incomeID;
        divIncomeName.id = element.incomeID;
        divIncomeValue.id = element.incomeID;
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
    test(), createClass(), createElement(), sumAll();
  }
  incomeValueInput.value = "";
  incomeNameInput.value = "";
}

//editfunction

function editTask(editIncome) {
  let editIdArray = [];
  editIdArray.push(editIncome);
  const editNumber = editIdArray[0].split("");
  let idNumber = editNumber[10];
  console.log(idNumber);
  let numId = parseInt(idNumber);
}

//Remove function
function deleteIncome(deleteIncome) {
  let idNumber = deleteIncome;
  // let deleteIdArray = [];
  // deleteIdArray.push(deleteIncome);
  // const deleteNumber = deleteIdArray[0].split("");
  // let deleteNumberCount = deleteNumber.length;

  let numId = parseInt(idNumber);
  for (let i = 0; i < incomeTable.length; i++)
    if (incomeTable[i].incomeID === numId) {
      incomeTable.splice(i, 1);
      break;
    }
  let element = document.querySelector("#income\\" + "#\\" + idNumber);
  element.remove();

  //update sum div
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
  sumAll();
}
//active all functions
incomeAddButton.addEventListener("click", incomeCheck);
