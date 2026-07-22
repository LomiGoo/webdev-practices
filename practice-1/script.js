const tempDisplay = document.getElementById("tempDisplay");
const tempInput = document.getElementById("tempInput");
const convertButton = document.getElementById("convertButton");
const changeConverter = document.getElementById("changeConverter");
const toBeInputTemp = document.getElementById("toBeInputTemp");

convertButton.addEventListener("click", function () {
    if(toBeInputTemp.textContent === "°C") {
        const input = tempInput.value;
        
        const calculatedTemp = (input * 9 / 5) + 32;
        
        const convertedTemp = calculatedTemp + " °F";

        tempDisplay.textContent = convertedTemp;
    } else {
        const input = tempInput.value;
    
        const calculatedTemp = (input - 32) * 5 / 9;
        
        const convertedTemp = calculatedTemp + " °C";

        tempDisplay.textContent = convertedTemp;
    }
    
});

changeConverter.addEventListener("click", function () {
    if(toBeInputTemp.textContent !== "°C") {
        toBeInputTemp.textContent = "°C"; 
        changeConverter.textContent = "To °C";
        tempDisplay.textContent = "00.0°F"; 
    } else {
        toBeInputTemp.textContent = "°F";
        changeConverter.textContent = "To °F"
        tempDisplay.textContent = "00.0°C";
    }
});