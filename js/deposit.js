document.getElementById('btn-deposit').addEventListener('click', function () {

    const newDepositAmount = getInputValueById('deposit-field');
    const previousDepositTotal = getTextElementValueById('deposit-total');

    // calculate new Deposit total--
    const newDepositTotal = newDepositAmount + previousDepositTotal;

    // set new deposit total--
    setTextElementValueById('deposit-total', newDepositTotal);

    // set new balance--
    const previousBalanceTotal = getTextElementValueById('total-balance');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('total-balance', newBalanceTotal);
});