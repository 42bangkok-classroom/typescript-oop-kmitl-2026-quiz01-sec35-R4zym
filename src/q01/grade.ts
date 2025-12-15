const arg1: string = process.argv[2];

const score: number = Number(arg1);

if (isNaN(score) || score < 0 || score > 100) {
	console.log("Invalid Input");
} else {
	if (score >= 80) {
		console.log("A");
	} else if (score >= 70) {
		console.log("B");
	} else if (score >= 60) {
		console.log("C");
	} else if (score >= 50) {
		console.log("D");
	} else {
		console.log("F");
	}
}
