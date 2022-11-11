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
      buttonIncomeEdit.setAttribute("class", "incomeEdit");
      buttonIncomeEdit.setAttribute("onClick", "editIncome(this.id)");
      incomeUl.appendChild(listIncome);
      listIncome.appendChild(divIncomeName);
      listIncome.appendChild(divIncomeValue);
      listIncome.appendChild(buttonIncomeEdit);
      listIncome.appendChild(buttonIncomeRemove);

      incomeTable.forEach((element) => {
        listIncome.id = "incomeList" + element.incomeID;
        buttonIncomeEdit.id = "incomeEdit" + element.incomeID;
        buttonIncomeRemove.id = "incomeDelete" + element.incomeID;
        divIncomeName.id = "incomeDivName" + element.incomeID;
        divIncomeValue.id = "incomeDivValue" + element.incomeID;
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

function editIncome(editID) {
  let id = editID;
  // let idNumber;
  function log() {
    let editIdArray = [];
    editIdArray.push(id);
    const editNumberID = editIdArray[0].split("");

    if ((editNumberID.length = 10 && incomeTable.length < 10)) {
      idNumber = editNumberID[10];
      console.log(idNumber);
      console.log(editNumberID[10]);
      console.log(editNumberID.length);
    } else {
      alert("błąd");
    }
  }
  log();
  // function chcekNumber() {
  //   let idNumber;
  //   console.log(editNumberID[10]);
  //   if ((editNumberID.length = 10 && incomeTable.length < 10)) {
  //     idNumber = editNumberID[10];
  //     console.log(idNumber);
  //     console.log(editNumberID[10]);
  //     console.log(idNumber);
  //   } else if ((editNumberID.length = 11 && incomeTable >= 10)) {
  //     let num1 = editNumberID[10];
  //     let num2 = editNumberID[11];
  //     idNumber = num1 + num2;
  //     console.log(idNumber);
  //   } else {
  //     let num1 = editNumberID[10];
  //     let num2 = editNumberID[11];
  //     let num3 = editNumberID[12];
  //     idNumber = num1 + num2 + num3;
  //     console.log(idNumber);
  //   }
  //   return idNumber;
  // }
  // chcekNumber();
  function areaDisable() {
    incomeUl.setAttribute("aria-disabled", "true");
    incomeAddButton.setAttribute("aria-disabled", "true");
    const editButton = document.querySelectorAll(".incomeEdit");
    // for (let i=0; i<editButton.length; i++){
    //   editButton.setAttribute("aria-disabled", "true");
    //   break;
    // }
    const removeButton = document.querySelectorAll(".incomeRemove");
    removeButton.setAttribute("aria-disabled", "true");
  }
  //find id
  function findID() {
    let numId = parseInt(idNumber);
    incomeNameInput.value = incomeTable[numId].incomeNameInputClass;
    incomeValueInput.value = incomeTable[numId].incomeValueInputClass;
  }
  function createUpdateButton() {
    const updateButton = document.createElement("button");
    updateButton.innerHTML = "Zapisz";
    updateButton.id = "incomeUpdateButton" + idNumber;
    updateButton.setAttribute("class", "updateButton");
    updateButton.setAttribute("onClick", "updateIncome(this.id)");
    const incomeDiv = document.querySelector(".mainConsole");
    incomeDiv.appendChild(updateButton);
  }
  // findID();
  // createUpdateButton();
}
function updateIncome(updateID) {
  let updateIdArray = [];
  updateIdArray.push(updateID);
  const updateNumber = updateIdArray[0].split("");
  console.log(updateNumber);
  if (incomeTable.length < 10 && updateNumber.length === 19) {
    let idNumber = updateNumber[18];

    incomeTable[idNumber].incomeNameInputClass = incomeNameInput.value;
    incomeTable[idNumber].incomeValueInputClass = parseInt(
      incomeValueInput.value
    );

    let divUpdateName = document.querySelector("#incomeDivName" + idNumber);
    let divUpdateValue = document.querySelector("#incomeDivValue" + idNumber);

    divUpdateName.innerHTML = incomeNameInput.value;
    divUpdateValue.innerHTML = incomeValueInput.value;

    const updateButton = document.querySelector(
      "#incomeUpdateButton" + idNumber
    );
    updateButton.remove();
    incomeNameInput.value = "";
    incomeValueInput.value = "";
  } else if (incomeTable.length > 10 && updateNumber.length === 19) {
    let idNumber = updateNumber[18];

    incomeTable[idNumber].incomeNameInputClass = incomeNameInput.value;
    incomeTable[idNumber].incomeValueInputClass = parseInt(
      incomeValueInput.value
    );

    let divUpdateName = document.querySelector("#incomeDivName" + idNumber);
    let divUpdateValue = document.querySelector("#incomeDivValue" + idNumber);

    divUpdateName.innerHTML = incomeNameInput.value;
    divUpdateValue.innerHTML = incomeValueInput.value;

    const updateButton = document.querySelector(
      "#incomeUpdateButton" + idNumber
    );
    updateButton.remove();
    incomeNameInput.value = "";
    incomeValueInput.value = "";
  } else if ((incomeTable.length = 10 && updateNumber.length === 20)) {
    let num1 = updateNumber[18];
    let num2 = updateNumber[19];
    let idNumber = num1 + num2;

    incomeTable[idNumber].incomeNameInputClass =
      document.querySelector(".incomeName").value;
    incomeTable[idNumber].incomeValueInputClass = parseInt(
      incomeValueInput.value
    );

    let divUpdateName = document.querySelector("#incomeDivName" + idNumber);
    let divUpdateValue = document.querySelector("#incomeDivValue" + idNumber);

    divUpdateName.innerHTML = incomeNameInput.value;
    divUpdateValue.innerHTML = incomeValueInput.value;

    const updateButton = document.querySelector(
      "#incomeUpdateButton" + idNumber
    );
    updateButton.remove();
    incomeNameInput.value = "";
    incomeValueInput.value = "";
  } else if (incomeTable.length >= 10 && updateNumber.length === 20) {
    let num1 = updateNumber[18];
    let num2 = updateNumber[19];
    let idNumber = num1 + num2;

    incomeTable[idNumber].incomeNameInputClass = incomeNameInput.value;
    incomeTable[idNumber].incomeValueInputClass = parseInt(
      incomeValueInput.value
    );

    let divUpdateName = document.querySelector("#incomeDivName" + idNumber);
    let divUpdateValue = document.querySelector("#incomeDivValue" + idNumber);

    divUpdateName.innerHTML = incomeNameInput.value;
    divUpdateValue.innerHTML = incomeValueInput.value;

    const updateButton = document.querySelector(
      "#incomeUpdateButton" + idNumber
    );
    updateButton.remove();
    incomeNameInput.value = "";
    incomeValueInput.value = "";
  } else {
    let num1 = updateNumber[18];
    let num2 = updateNumber[19];
    let num3 = updateNumber[20];

    let idNumber = num1 + num2 + num3;

    incomeTable[idNumber].incomeNameInputClass = incomeNameInput.value;
    incomeTable[idNumber].incomeValueInputClass = parseInt(
      incomeValueInput.value
    );

    let divUpdateName = document.querySelector("#incomeDivName" + idNumber);
    let divUpdateValue = document.querySelector("#incomeDivValue" + idNumber);

    divUpdateName.innerHTML = incomeNameInput.value;
    divUpdateValue.innerHTML = incomeValueInput.value;

    const updateButton = document.querySelector(
      "#incomeUpdateButton" + idNumber
    );
    updateButton.remove();
    incomeNameInput.value = "";
    incomeValueInput.value = "";
  }
}

//Remove function
function deleteIncome(deleteIncome) {
  //id button and list
  let deleteIdArray = [];
  deleteIdArray.push(deleteIncome);
  const deleteNumber = deleteIdArray[0].split("");
  // validation for above 100 income
  if (incomeTable.length < 10 && deleteNumber.length === 13) {
    let idNumber = deleteNumber[12];
    let numId = parseInt(idNumber);
    for (let i = 0; i < incomeTable.length; i++)
      if (incomeTable[i].incomeID === numId) {
        incomeTable.splice(i, 1);
        break;
      }
    let element = document.querySelector("#incomeList" + idNumber);
    element.remove();
  } else if (incomeTable.length > 10 && deleteNumber.length === 13) {
    let idNumber = deleteNumber[12];
    let numId = parseInt(idNumber);
    for (let i = 0; i < incomeTable.length; i++)
      if (incomeTable[i].incomeID === numId) {
        incomeTable.splice(i, 1);
        break;
      }
    let element = document.querySelector("#incomeList" + idNumber);
    element.remove();
  } else if (incomeTable.length > 10 && deleteNumber.length === 14) {
    let num1 = deleteNumber[12];
    let num2 = deleteNumber[13];
    let idNumber = num1 + num2;
    let numId = parseInt(idNumber);
    for (let i = 0; i < incomeTable.length; i++)
      if (incomeTable[i].incomeID === numId) {
        incomeTable.splice(i, 1);
        break;
      }
    let element = document.querySelector("#incomeList" + idNumber);
    element.remove();
  } else if ((incomeTable.length = 10 && deleteNumber.length === 14)) {
    let num1 = deleteNumber[12];
    let num2 = deleteNumber[13];
    let idNumber = num1 + num2;
    let numId = parseInt(idNumber);
    for (let i = 0; i < incomeTable.length; i++)
      if (incomeTable[i].incomeID === numId) {
        incomeTable.splice(i, 1);
        break;
      }
    let element = document.querySelector("#incomeList" + idNumber);
    element.remove();
  } else {
    let num1 = deleteNumber[12];
    let num2 = deleteNumber[13];
    let num3 = deleteNumber[14];
    let idNumber = num1 + num2 + num3;
    let numId = parseInt(idNumber);
    for (let i = 0; i < incomeTable.length; i++)
      if (incomeTable[i].incomeID === numId) {
        incomeTable.splice(i, 1);
        break;
      }
    let element = document.querySelector("#incomeList" + idNumber);
    element.remove();
  }

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
