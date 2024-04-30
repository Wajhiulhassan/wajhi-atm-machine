import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 8041;
let pinAnswer = await inquirer.prompt([
    {
        message: "enter your pin",
        type: "number",
        name: "pin",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast withdraw"],
        },
    ]);
    if (operationAnswer.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        console.log(`your remaining balance is ${myBalance}`);
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(myBalance);
    }
    else if (operationAnswer.operation === "fast withdraw") {
        let fastAmountAns = await inquirer.prompt([
            {
                name: "fastAmountOperation",
                message: "select your amount",
                type: "list",
                choices: ["1000", "2000", "4000", "5000"],
            },
        ]);
        let selectedAmount = parseInt(fastAmountAns.fastAmountOperation);
        myBalance -= selectedAmount;
        console.log(`your remaining balance is ${myBalance}`);
    }
}
else
    console.log("Incorrect Pin Code!");
// console.log(`your remaining balance is ${myBalance}`);
