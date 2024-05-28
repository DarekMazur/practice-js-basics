// const x = 4;
 const x = prompt('Podaj liczbę!')

try {
	if (isNaN(Number(x))) {
		throw new Error('Podana wartość nie jest liczbą!')
	} else if (Number(x) % 10 !== 0 || Number(x) < 1 || Number(x) > 9) {
		throw new Error('Podaj liczbę całkowitą z z przedziału od 1 do 9')
	}
	/* rozwiązanie z pętlą for */
	console.log('Loop for');
	for (let i = 1; i < 10; i++) {
		console.log(`${x} x ${i} = ${x*i}`);
	}
	
	/* rozwiązanie z pętlą while  */
	let i = 1;
	console.log('Loop while');
	while (i < 10) {
		console.log(`4 x ${i} = ${x*i}`);
		i++;
	}
	
} catch (error) {
	console.error(error.message)
}

