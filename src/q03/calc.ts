const arg1: string = process.argv[2];
const arg2: string = process.argv[3];
const arg3: string = process.argv[4];

const numA: number = Number(arg2);
const numB: number = Number(arg3);

let total: number = 0;

if (arg1 === undefined || arg2 === undefined || arg3 === undefined || isNaN(numA) || isNaN(numB)) {
	console.log("Invalid input");
} else {
	if (arg1 === "add") {
		total = numA + numB;
	} else if (arg1 === "sub") {
		total = numA - numB;
	} else if (arg1 === "mul") {
		total = numA * numB;
	} else if (arg1 === "div") {
		total = numA / numB;
	} else {
		console.log("Inavalid operator");
	}
}

console.log(total);
