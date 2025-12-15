const arg1: string = process.argv[2];
const arg2: string = process.argv[3];

const amountBalance: number = Number(arg1);
const withdrawalAmount: number = Number(arg2);

if (isNaN(amountBalance) || isNaN(withdrawalAmount) || amountBalance < 0 || withdrawalAmount < 0) {
	console.log("Invalid Input");
} else {
	if (withdrawalAmount > 5000) {
		console.log("Exceeds per-withdrawal limit");
	} else if (amountBalance < withdrawalAmount) {
		console.log("Insufficient balance");
	} else {
		console.log("Withdrawal approved");
	}
}
