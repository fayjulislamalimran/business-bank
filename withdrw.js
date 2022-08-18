// Step-1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // Step -2
  const inputWithdrw = document.getElementById("input-withdraw");
  const newInputWithdrwString = inputWithdrw.value;
  const newInputWithdrw = parseFloat(newInputWithdrwString);
  console.log(newInputWithdrw);
  //   // Step- 3
  inputWithdrw.value = "";
  //   // Step-4
  const withdrwTotal = document.getElementById("withdrw-total");
  const previousWithdrwTotalString = withdrwTotal.innerText;
  const previousWithdrwTotal = parseFloat(previousWithdrwTotalString);

  // Step 5
  const newWithdrwAmound = previousWithdrwTotal + newInputWithdrw;
  withdrwTotal.innerText = newWithdrwAmound;

  // Step -6
  const balanceTotal = document.getElementById("balance-total");
  const newBalanceTotalString = balanceTotal.innerText;
  const newBalanceTotal = parseFloat(newBalanceTotalString);

  //   Step-7
  const currentNewBalanceTotal = newBalanceTotal - newInputWithdrw;
  balanceTotal.innerText = currentNewBalanceTotal;
});
