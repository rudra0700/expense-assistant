
function addToHistory(income, totalExpense, balance) {
    const historyItem = document.createElement("div");
    historyItem.className =
      "bg-white p-3 rounded-md border-l-2 border-indigo-500";
    historyItem.innerHTML = `
        <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        <p class="text-xs text-gray-500 font-bold">income : ${formatToTwoDecimalPlaces(
          income
        )}</p>
        <p class="text-xs text-gray-500">totalExpenses : ${formatToTwoDecimalPlaces(
          totalExpense
        )}</p>
        <p class="text-xs text-gray-500">balance : ${formatToTwoDecimalPlaces(
          balance
        )}</p>
      `;
  
    const historyContainer = getTheInputId("history-list");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
  }