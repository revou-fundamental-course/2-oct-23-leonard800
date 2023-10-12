document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("input-field-celcius");
    const fahrenheitInput = document.getElementById("output-field-fahrenheit");
    const convertButton = document.getElementById("convert-button");
    const resetButton = document.getElementById("reset-button");
    const resultField = document.getElementById("result-field");

    function celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    function isValidNumber(value) {
        return !isNaN(value) && isFinite(value);
    }

    convertButton.addEventListener("click", function () {
        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = parseFloat(fahrenheitInput.value);

        if (isValidNumber(celsiusValue)) {
            const fahrenheit = celsiusToFahrenheit(celsiusValue);
            const resultText = `${celsiusValue} °C = ${fahrenheit.toFixed(2)} °F`;
            fahrenheitInput.value = fahrenheit.toFixed(2);
            resultField.value = resultText;
        } else if (isValidNumber(fahrenheitValue)) {
            const celsius = fahrenheitToCelsius(fahrenheitValue);
            const resultText = `${fahrenheitValue} °F = ${celsius.toFixed(2)} °C`;
            celsiusInput.value = celsius.toFixed(2);
            resultField.value = resultText;
        } else {
            alert("Please enter a valid number for Celsius or Fahrenheit.");
        }
    });

    resetButton.addEventListener("click", function () {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
        resultField.value = "";
    });
});
