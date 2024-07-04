const amountInput = document.getElementById('amount');
const currencySelect = document.getElementById('currency');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');
let exchangeRates = {
	USD: 1,
	EUR: 1.07,
	GBP: 0.76
};
calculateButton.addEventListener('click', () => {
	let amount = parseFloat(amountInput.value);
	let currency = currencySelect.value;
	let exchangeRate = exchangeRates[currency];
	let result = amount * exchangeRate;
	resultDiv.innerText = ` ${amount} ${currency} = $${result.toFixed(2)} USD`;
});
calculateButton.addEventListener('click', (event) => {
	event.preventDefault(); // Add this line
	let amount = parseFloat(amountInput.value);
	let currency = currencySelect.value;
	let exchangeRate = exchangeRates[currency];
	let result = amount * exchangeRate;
	resultDiv.innerText = ` ${amount} ${currency} = $${result.toFixed(2)} USD`;
});