const incomeUl = document.querySelector("#income .list");
const incomeValueInput = document.querySelector("#income .value");
const incomeNameInput = document.querySelector("#income .name");
const incomeAddButton = document.querySelector("#income .addButton");
const costsUl = document.querySelector("#costs .list");
const costsValueInput = document.querySelector("#costs .value");
const costsNameInput = document.querySelector("#costs .name");
const costsAddButton = document.querySelector("#costs .addButton");
const divMessage = document.querySelector("#message");

//zmienneincome
let incomeID = 0;
let incomeTable = [];

//variableCosts

let costsID = 0;
let costsTable = [];

// Class for Income
class IncomeList {
  constructor(incomeID, incomeNameInputClass, incomeValueInputClass) {
    this.incomeID = incomeID;
    this.incomeValueInputClass = incomeValueInputClass;
    this.incomeNameInputClass = incomeNameInputClass;
  }
}

//Class for costs
class CostsList {
  constructor(costsID, costsNameInputClass, costsValueInputClass) {
    this.costsID = costsID;
    this.costsNameInputClass = costsNameInputClass;
    this.costsValueInputClass = costsValueInputClass;
  }
}

//sum for income

const sumAll = () => {
  const incomeDiv = document.querySelector("#income .sumAll");
  const arrayValue = incomeTable.map((number) =>
    parseInt(number.incomeValueInputClass)
  );
  const sum = arrayValue.reduce((acc, number) => {
    return acc + number;
  }, 0);
  incomeDiv.innerHTML = sum;
};

//sum for costs
const sumAllCosts = () => {
  const costsDiv = document.querySelector("#costs .sumAll");
  const arrayValue = costsTable.map((number) =>
    parseInt(number.costsValueInputClass)
  );
  const sum = arrayValue.reduce((acc, number) => {
    return acc + number;
  }, 0);
  costsDiv.innerHTML = sum;
};

//Income code
function incomeCheck() {
  //validation
  let incomeValue = parseInt(incomeValueInput.value);
  const wrongValueNumber = () => {
    incomeValueInput.setAttribute("placeholder", "Za niska wartość");
    incomeValueInput.style.backgroundColor = "red";
    incomeValueInput.value = "";
  };
  const wrongValueText = () => {
    incomeNameInput.setAttribute("placeholder", "Zła wartość");
    incomeNameInput.style.backgroundColor = "red";
    incomeNameInput.value = "";
  };
  const resetNumber = () => {
    let time = setTimeout(() => {
      incomeValueInput.setAttribute("placeholder", "Wpisz wartość");
      incomeValueInput.style.backgroundColor = "white";
    }, 2000);
    return time;
  };
  const resetText = () => {
    let time = setTimeout(() => {
      incomeNameInput.setAttribute("placeholder", "Wpisz wartość");
      incomeNameInput.style.backgroundColor = "white";
    }, 2000);
    return time;
  };
  if (incomeValue < 0) {
    wrongValueNumber();
    resetNumber();
  } else if (incomeValue === 0) {
    wrongValueNumber();
    resetNumber();
  } else if (incomeValueInput.value === "" && incomeNameInput.value === "") {
    wrongValueNumber();
    resetNumber();
    wrongValueText();
    resetText();
  } else if (incomeNameInput.value === "") {
    wrongValueText();
    resetText();
  } else if (incomeValueInput.value === "") {
    wrongValueNumber();
    resetNumber();
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
      listIncome.setAttribute("class", "liItem");
      divIncomeName.setAttribute("class", "listDiv");
      divIncomeValue.setAttribute("class", "listDiv");
      buttonIncomeEdit.setAttribute("class", "incomeEdit");
      incomeUl.appendChild(listIncome);
      listIncome.appendChild(divIncomeName);
      listIncome.appendChild(divIncomeValue);
      listIncome.appendChild(buttonIncomeEdit);
      listIncome.appendChild(buttonIncomeRemove);

      buttonIncomeRemove.addEventListener("click", () => {
        deleteInocme(buttonIncomeRemove);
      });

      buttonIncomeEdit.addEventListener("click", () => {
        editIncome(buttonIncomeEdit);
      });

      incomeTable.forEach((element) => {
        listIncome.id = element.incomeID;
        divIncomeName.id = "incomeDivName" + element.incomeID;
        divIncomeValue.id = "incomeDivValue" + element.incomeID;
        divIncomeName.innerHTML = element.incomeNameInputClass;
        divIncomeValue.innerHTML = element.incomeValueInputClass;
      });
    };
    test(), createClass(), createElement(), sumAll(), freeSavings();
  }
  incomeValueInput.value = "";
  incomeNameInput.value = "";
}

// costs code

function costsCheck() {
  //validation
  let costsValue = parseInt(costsValueInput.value);
  let costsName = costsNameInput.value;
  const wrongValueNumber = () => {
    costsValueInput.setAttribute("placeholder", "Za niska wartość");
    costsValueInput.style.backgroundColor = "red";
    costsValueInput.value = "";
  };
  const wrongValueText = () => {
    costsNameInput.setAttribute("placeholder", "Zła wartość");
    costsNameInput.style.backgroundColor = "red";
    costsNameInput.value = "";
  };
  const resetNumber = () => {
    let time = setTimeout(() => {
      costsValueInput.setAttribute("placeholder", "Wpisz wartość");
      costsValueInput.style.backgroundColor = "white";
    }, 2000);
    return time;
  };
  const resetText = () => {
    let time = setTimeout(() => {
      costsNameInput.setAttribute("placeholder", "Wpisz wartość");
      costsNameInput.style.backgroundColor = "white";
    }, 2000);
    return time;
  };
  if (costsValue < 0) {
    wrongValueNumber();
    resetNumber();
  } else if (costsValueInput.value === 0) {
    wrongValueNumber();
    resetNumber();
  } else if (costsValueInput.value === "" && costsName === "") {
    wrongValueNumber();
    resetNumber();
    wrongValueText();
    resetText();
  } else if (costsName === "") {
    wrongValueText();
    resetText();
  } else if (costsValueInput.value === "") {
    wrongValueNumber();
    resetNumber();
  } else {
    //create new list
    function createClass() {
      const newcosts = new CostsList(
        costsID,
        costsNameInput.value.trim(),
        costsValueInput.value
      );
      costsTable.push(newcosts);
      costsID++;
    }
    //create elements
    const createElement = () => {
      const listCosts = document.createElement("li");
      const divCostsName = document.createElement("div");
      const divCostsValue = document.createElement("div");
      const buttonCostsEdit = document.createElement("button");
      const buttonCostsRemove = document.createElement("button");
      buttonCostsRemove.innerHTML = "Usuń";
      buttonCostsEdit.innerHTML = "Edytuj";
      buttonCostsRemove.setAttribute("class", "costsRemove");
      listCosts.setAttribute("class", "liItem");
      divCostsName.setAttribute("class", "listDiv");
      divCostsValue.setAttribute("class", "listDiv");
      buttonCostsEdit.setAttribute("class", "costsEdit");
      costsUl.appendChild(listCosts);
      listCosts.appendChild(divCostsName);
      listCosts.appendChild(divCostsValue);
      listCosts.appendChild(buttonCostsEdit);
      listCosts.appendChild(buttonCostsRemove);

      buttonCostsRemove.addEventListener("click", () => {
        deleteCosts(buttonCostsRemove);
      });

      buttonCostsEdit.addEventListener("click", () => {
        editCosts(buttonCostsEdit);
      });

      costsTable.forEach((element) => {
        listCosts.id = element.costsID;
        divCostsName.id = "costsDivName" + element.costsID;
        divCostsValue.id = "costsDivValue" + element.costsID;
        divCostsName.innerHTML = element.costsNameInputClass;
        divCostsValue.innerHTML = element.costsValueInputClass;
      });
    };
    createClass(), createElement(), sumAllCosts(), freeSavings();
  }
  costsValueInput.value = "";
  costsNameInput.value = "";
}

//delete incomeButton
const deleteInocme = (deleteBtn) => {
  const chosenItem = deleteBtn.closest("li");
  let idText = chosenItem.id;
  let idNumber = parseInt(idText);
  for (let i = 0; i < incomeTable.length; i++)
    if (incomeTable[i].incomeID === idNumber) {
      incomeTable[idNumber].incomeValueInputClass = 0;
      break;
    }

  incomeUl.removeChild(chosenItem);
  sumAll(), freeSavings();
};

//delete income

const deleteCosts = (deleteBtn) => {
  const chosenItem = deleteBtn.closest("li");
  let idText = chosenItem.id;
  let idNumber = parseInt(idText);
  for (let i = 0; i < costsTable.length; i++)
    if (costsTable[i].costsID === idNumber) {
      costsTable[idNumber].costsValueInputClass = 0;
      break;
    }

  costsUl.removeChild(chosenItem);
  sumAllCosts(), freeSavings();
};

//costs edit button
const editCosts = (editBtn) => {
  const chosenItem = editBtn.closest("li");
  let idText = chosenItem.id;
  let idNumber = parseInt(idText);
  console.log(idNumber);

  function findID() {
    costsNameInput.value = costsTable[idNumber].costsNameInputClass;
    costsValueInput.value = costsTable[idNumber].costsValueInputClass;
  }
  function createUpdateButton() {
    const updateButton = document.createElement("button");
    updateButton.innerHTML = "Zapisz";
    updateButton.setAttribute("class", "updateButton");
    updateButton.id = "costsUpdateButton";
    const incomeDiv = document.querySelector(".mainConsoleCosts");
    incomeDiv.appendChild(updateButton);
    updateButton.addEventListener("click", () => {
      editDatacosts(editBtn);
    });
  }
  function areaDisable() {
    costsAddButton.setAttribute("disabled", "true");
    const editButton = document.querySelectorAll(".costsEdit");
    const removeButton = document.querySelectorAll(".costsRemove");
    for (let i = 0; i < editButton.length; i++) {
      editButton[i].setAttribute("disabled", "true");
    }
    for (let i = 0; i < removeButton.length; i++) {
      removeButton[i].setAttribute("disabled", "true");
    }
  }
  findID(), createUpdateButton(), areaDisable(), freeSavings();
};

//edit table

const editDatacosts = (editBtn) => {
  const chosenItem = editBtn.closest("li");
  let idText = chosenItem.id;
  let idNumber = parseInt(idText);
  costsTable[idNumber].costsNameInputClass = costsNameInput.value;
  costsTable[idNumber].costsValueInputClass = parseInt(costsValueInput.value);

  let divUpdateName = document.querySelector("#costsDivName" + idNumber);
  let divUpdateValue = document.querySelector("#costsDivValue" + idNumber);

  divUpdateName.innerHTML = costsNameInput.value;
  divUpdateValue.innerHTML = costsValueInput.value;

  const updateButton = document.querySelector("#costsUpdateButton");
  updateButton.remove();
  costsNameInput.value = "";
  costsValueInput.value = "";

  function areaDisableFalse() {
    costsAddButton.removeAttribute("disabled", "true");
    const editButton = document.querySelectorAll(".costsEdit");
    const removeButton = document.querySelectorAll(".costsRemove");
    for (let i = 0; i < editButton.length; i++) {
      editButton[i].removeAttribute("disabled", "true");
    }
    for (let i = 0; i < removeButton.length; i++) {
      removeButton[i].removeAttribute("disabled", "true");
    }
  }
  areaDisableFalse();
  sumAllCosts();
  freeSavings();
};

//income edit
//income edit button
const editIncome = (editBtn) => {
  const chosenItem = editBtn.closest("li");
  let idText = chosenItem.id;
  let idNumber = parseInt(idText);

  function findID() {
    incomeNameInput.value = incomeTable[idNumber].incomeNameInputClass;
    incomeValueInput.value = incomeTable[idNumber].incomeValueInputClass;
  }
  function createUpdateButton() {
    const updateButton = document.createElement("button");
    updateButton.innerHTML = "Zapisz";
    updateButton.setAttribute("class", "updateButton");
    updateButton.id = "incomeUpdateButton";
    const incomeDiv = document.querySelector(".mainConsoleIncome");
    incomeDiv.appendChild(updateButton);
    updateButton.addEventListener("click", () => {
      editDataIncome(editBtn);
    });
  }
  function areaDisable() {
    incomeAddButton.setAttribute("disabled", "true");
    const editButton = document.querySelectorAll(".incomeEdit");
    const removeButton = document.querySelectorAll(".incomeRemove");
    for (let i = 0; i < editButton.length; i++) {
      editButton[i].setAttribute("disabled", "true");
    }
    for (let i = 0; i < removeButton.length; i++) {
      removeButton[i].setAttribute("disabled", "true");
    }
  }
  findID(), createUpdateButton(), areaDisable(), freeSavings();
};

//edit table

const editDataIncome = (editBtn) => {
  const chosenItem = editBtn.closest("li");
  let idText = chosenItem.id;
  let idNumber = parseInt(idText);
  incomeTable[idNumber].incomeNameInputClass = incomeNameInput.value;
  incomeTable[idNumber].incomeValueInputClass = parseInt(
    incomeValueInput.value
  );

  let divUpdateName = document.querySelector("#incomeDivName" + idNumber);
  let divUpdateValue = document.querySelector("#incomeDivValue" + idNumber);

  divUpdateName.innerHTML = incomeNameInput.value;
  divUpdateValue.innerHTML = incomeValueInput.value;

  const updateButton = document.querySelector("#incomeUpdateButton");
  updateButton.remove();
  incomeNameInput.value = "";
  incomeValueInput.value = "";

  function areaDisableFalse() {
    incomeAddButton.removeAttribute("disabled", "true");
    const editButton = document.querySelectorAll(".incomeEdit");
    const removeButton = document.querySelectorAll(".incomeRemove");
    for (let i = 0; i < editButton.length; i++) {
      editButton[i].removeAttribute("disabled", "true");
    }
    for (let i = 0; i < removeButton.length; i++) {
      removeButton[i].removeAttribute("disabled", "true");
    }
  }
  areaDisableFalse();
  sumAll();
  freeSavings();
};

costsAddButton.addEventListener("click", costsCheck);
incomeAddButton.addEventListener("click", incomeCheck);

function freeSavings() {
  const arrayIncomeValue = incomeTable.map((number) =>
    parseInt(number.incomeValueInputClass)
  );
  const sumIncome = arrayIncomeValue.reduce((acc, number) => {
    return acc + number;
  }, 0);
  const arrayCostsValue = costsTable.map((number) =>
    parseInt(number.costsValueInputClass)
  );
  const sumCosts = arrayCostsValue.reduce((acc, number) => {
    return acc + number;
  }, 0);
  let allSum = sumIncome - sumCosts;
  divMessage.innerHTML = allSum;
}

function chcek(testButton) {
  let costsButton = true;
  let typeOf;
  if ((costsButton = testButton)) {
    typeOf = "costs";
  } else {
    typeOf = "income";
  }
  return console.log(typeOf);
}

costsAddButton.addEventListener("click", chcek(true));
incomeAddButton.addEventListener("click", chcek(false));
