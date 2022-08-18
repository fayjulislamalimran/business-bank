// Step-1
document.getElementById("btn-deposit").addEventListener("click", function () {
  // Step -2
  const inputDeposit = document.getElementById("input-deposit");
  const newInputDepositString = inputDeposit.value;
  const newInputDeposit = parseFloat(newInputDepositString);
  // Step- 3
  inputDeposit.value = "";
  // Step-4
  const depositTotal = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotal.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // Step 5
  const newDepositAmound = previousDepositTotal + newInputDeposit;
  depositTotal.innerText = newDepositAmound;

  // Step -6
  const balanceTotal = document.getElementById("balance-total");
  const newBalanceTotalString = balanceTotal.innerText;
  const newBalanceTotal = parseFloat(newBalanceTotalString);
  //   Step-7
  const currentNewBalanceTotal = newBalanceTotal + newDepositAmound;
  balanceTotal.innerText = currentNewBalanceTotal;
});
