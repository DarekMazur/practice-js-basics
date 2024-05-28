const a = '4.2';
const b = 9;

const bigger = 'Wynik jest większy, niż 20';
const smaller = 'Wynik jest mniejszy, niż 20';

console.log(a, b);

console.log(`Type a: ${typeof a},
Type b: ${typeof b}.

`);

const convertToNumber = (input) => {
	if (typeof input !== 'number') {
		try {
			if (isNaN(Number(input))) {
				throw new Error('Input can\'t be convert to number');
			}
			return Number(input)
		} catch (error) {
			console.error(error.message);
		}
	}
	
	return input
}

const arithmetic = {
	addition: {
		result: convertToNumber(a) + convertToNumber(b),
		operationName: 'Addition'
	},
	subtractingAB: {
		result: convertToNumber(a) - convertToNumber(b),
		operationName: 'Subtracting a - b'
	},
	subtractingBA: {
		result: convertToNumber(b) - convertToNumber(a),
		operationName: 'Subtracting b - a'
	},
	multiplication: {
		result: convertToNumber(a) * convertToNumber(b),
		operationName: 'Multiplication'
	},
	divisionAB: {
		result: convertToNumber(a) / convertToNumber(b),
		operationName: 'Division a/b'
	},
	divisionBA: {
		result: convertToNumber(b) / convertToNumber(a),
		operationName: 'Division b/a'
	},
	moduloA2: {
		result: convertToNumber(a) % 2,
		operationName: 'Modulo a mod 2'
	},
	moduloB2: {
		result: convertToNumber(b) % 2,
		operationName: 'Modulo b mod 2'
	},
	moduloAB: {
		result: convertToNumber(a) % convertToNumber(b),
		operationName: 'Modulo a mod b'
	},
	moduloBA: {
		result: convertToNumber(b) % convertToNumber(a),
		operationName: 'Modulo b mod a'
	},
	exponentAB: {
		result: convertToNumber(a) ** convertToNumber(b),
		operationName: 'Exponent a^b'
	},
	exponentBA: {
		result: convertToNumber(b) ** convertToNumber(a),
		operationName: 'Exponent b^a'
	},
}

const higherThan20 = []
const lowerThan20 = []

for (const operation in arithmetic) {
	console.log(`Result for ${arithmetic[operation].operationName}: ${arithmetic[operation].result}`)
	arithmetic[operation].result > 20 ? higherThan20.push(arithmetic[operation].operationName) : lowerThan20.push(arithmetic[operation].operationName)
}

console.log(`Operations with result higher than 20: ${higherThan20.join(', ')}`)
console.log(`Operations with result lower than 20: ${lowerThan20.join(', ')}`)
