function getInputValueById(id) {
  return parseFloat(document.getElementById(id).value);
}

function getTheInputId(id) {
  return document.getElementById(id);
}

function showError(id) {
  return document.getElementById(id).classList.remove("hidden");
}

function addHidden(id) {
  return document.getElementById(id).classList.add("hidden");
}

function formatToTwoDecimalPlaces(number) {
  return number.toFixed(2);
}

function addMultipleClasses(element, ...classes) {
  element.classList.add(...classes);
}

function removeMultipleClasses(element, ...classes) {
  element.classList.remove(...classes);
}

function savings(balance, savingsPercentage) {
  return (balance * savingsPercentage) / 100;
}

