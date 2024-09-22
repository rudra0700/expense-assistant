const calculateBtn = getTheInputId("calculate");
calculateBtn.addEventListener("click", () => {
  //   console.log({income, software, courses, internet});
  //   console.table({income, software, courses, internet});

  const income = getInputValueById("income");
  const software = getInputValueById("software");
  const courses = getInputValueById("courses");
  const internet = getInputValueById("internet");

  if (
    document.getElementById("income").value === "" ||
    document.getElementById("software").value === "" ||
    document.getElementById("courses").value === "" ||
    document.getElementById("internet").value === ""
  ) {
    return;
  }

  if (income < 0 || isNaN(income)) {
    showError("income-error");
    return;
  }
  const totalExpense = software + courses + internet;
  const balance = income - totalExpense;

  if (totalExpense > income) {
    showError("logic-error");
    return;
  }

  const totalExpenseElement = getTheInputId("total-expenses");
  totalExpenseElement.innerText = formatToTwoDecimalPlaces(totalExpense);

  const balanceElement = getTheInputId("balance");
  balanceElement.innerText = formatToTwoDecimalPlaces(balance);

  const result = getTheInputId("results");
  result.classList.remove("hidden");

  addToHistory(income, totalExpense, balance);
});

const calculateSavingsButton = getTheInputId("calculate-savings");

calculateSavingsButton.addEventListener("click", () => {
  const savingsPercentage = getInputValueById("savings");
  const income = getInputValueById("income");
  const software = getInputValueById("software");
  const courses = getInputValueById("courses");
  const internet = getInputValueById("internet");

  const totalExpense = software + courses + internet;
  const balance = income - totalExpense;

  const savingAmount = savings(balance, savingsPercentage);

  const remainingBalance = balance - savingAmount;

  const remainingElement = getTheInputId("remaining-balance");
  remainingElement.innerText = formatToTwoDecimalPlaces(remainingBalance);

  const savingElement = getTheInputId("savings-amount");
  savingElement.innerText = formatToTwoDecimalPlaces(savingAmount);
});

const historyTab = getTheInputId("history-tab");
const assiatantTab = getTheInputId("assistant-tab");

// history tab

historyTab.addEventListener("click", () => {
  addMultipleClasses(
    historyTab,
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  removeMultipleClasses(historyTab, "text-gray-600");
  removeMultipleClasses(
    assiatantTab,
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  addMultipleClasses(assiatantTab, "font-bold", "text-gray-600");

  addHidden("expense-form");
  showError("history-section");
});

assiatantTab.addEventListener("click", () => {
  addMultipleClasses(
    assiatantTab,
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  removeMultipleClasses(
    historyTab,
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  addMultipleClasses(historyTab, "font-bold", "text-gray-600");

  showError("expense-form");
  addHidden("history-section");
});

// live catching error
document.getElementById("income").addEventListener("input", () => {
  const income = document.getElementById("income").value;
  if (income <= 0 || isNaN(income)) {
    showError("income-error");
    return;
  }
});
