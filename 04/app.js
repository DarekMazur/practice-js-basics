const min = 10;
const max = 200;

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

const getAvg = (arr) => {
	return arr.reduce((element, currentValue) => element + currentValue) / arr.length
	
}

console.log(getAvg(getLargest(getRandomNumbers(min, max))))
