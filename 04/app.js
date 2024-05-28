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

