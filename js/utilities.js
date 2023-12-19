function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';

    // if (isNaN(inputFieldValue)) {
    //     alert('Please Provide a valid number');
    //     return;
    // }
    return inputFieldValue;

};

function getTextElementValueById(textElementId) {
    const textElement = document.getElementById(textElementId);
    const textElementString = textElement.innerText;
    const textElementValue = parseFloat(textElementString);
    return textElementValue;
};

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}