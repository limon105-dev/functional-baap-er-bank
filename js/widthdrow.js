document.getElementById('btn-widthdrow').addEventListener('click', function () {

    const newWidthdrowAmount = getInputValueById('widthdrow-field');
    const previousWidthdrowAmount = getTextElementValueById('widthdrow-total');

    // calculate new Widthdrow total
    const newWidthdrowtotal = newWidthdrowAmount + previousWidthdrowAmount;

    // set new widthdrow total
    setTextElementValueById('widthdrow-total', newWidthdrowtotal);

    // set new balance
    const previousBalanceTotal = getTextElementValueById('total-balance');
    const newBalanceTotal = previousBalanceTotal - newWidthdrowAmount;
    setTextElementValueById('total-balance', newBalanceTotal);
});