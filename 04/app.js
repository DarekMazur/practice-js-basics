const min = 23;
const max = 123;

const getRandomNumbers = (min, max) => {
	const randomNumbers = [];
	
	for (let i = 0; i < 20; i++) {
		randomNumbers.push(Math.round((Math.random() * (max - min)) + min));
	}
	
	return randomNumbers;
}

console.log(getRandomNumbers(min, max));

const getLargest = (arr) => {
	return arr.sort((a, b) => a - b).slice(-10);
}

const randomizeArray = getRandomNumbers(min, max)
console.log(randomizeArray);
console.log(getLargest(randomizeArray))