const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
// const c = randomNumber(min, max);
const c = 'lorem'
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

console.log(getSum(a,b,c))
console.log(isEven(a))
console.log(isEven(b))
console.log(isEven(c))

function randomNumber(min, max) {
  return Math.round((Math.random() * (max - min)) + min);
}