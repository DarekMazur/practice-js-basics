const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

const getSum = (a, b, c) => {
  try {
    if (isNaN(Number(a)) || isNaN(Number(b)) || isNaN(Number(c))) {
      throw new Error('One of value is not a number');
    }
		
		const inputs = []
		
		inputs.push(Math.round(parseFloat(a)))
		inputs.push(Math.round(parseFloat(b)))
		inputs.push(Math.round(parseFloat(c)))
		
		const sortedInput = inputs.sort((a, b) => {
			if (a < b) {
				return 1;
			}
			if (a > b) {
				return -1;
			}
			return 0;
		})
		
		return sortedInput[0] + sortedInput[1]
		
  } catch (error) {
    console.error(error.message);
  }
}

const isEven = (number) => {
	try {
		if (isNaN(number)) throw new Error('Input value is not a number');
		
		return number % 2 === 0
		
	} catch (error) {
		console.error(error.message);
		return null
	}
}

const showInfo = (input, info) => {
	try {
		if (info !== null && info !== false && info !== true) {
			throw new Error('Info parameter is not valid, should be \'true\', \'false\' or \'null\'');
		}
		
		switch (info) {
			case null:
				return `Podany argument ${input} nie jest liczbą`;
			case true:
				return `Podany argument ${input} jest parzysty`;
			case false:
				return `Podany argument ${input} jest nieparzysty`;
		}
		
	} catch (error) {
		console.error(error.message);
	}
}

console.log(getSum(a,b,c))
console.log(isEven(a))
console.log(isEven(b))
console.log(isEven(c))
console.log(showInfo(a, isEven(a)))
console.log(showInfo(b, isEven(b)))
console.log(showInfo(c, isEven(c)))

function randomNumber(min, max) {
  return Math.round((Math.random() * (max - min)) + min);
}