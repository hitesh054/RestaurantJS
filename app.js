const readline = require("readline");
const { genBill } = require('./utils/utils')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let menuMap = new Map([
    ['Dosa', 90.00],
    ['Idli', 40.00],
    ['Vada Sambhar', 40.00],
    ['Uttapam', 60.00],
    ['Poha', 20.00],
    ['Sabudana Wada', 40.00]
]);

console.log(`**Welcome to Morning Lovers Cafe**\n Please choose from the menu:\n\nItem : price`)
menuMap.forEach(function (value, key) {
    console.log(`${key} : ${value}`);
})
let bill = 0;

rl.question("What would you like to have ? ", function (items) {
    if (items !== "No") {
        bill += genBill(items, menuMap);
    } else {
        rl.close();
    }
    rl.question("Would you like to have anything else ? ", function (items) {
        if (items !== "No") {
            bill += genBill(items, menuMap);
        }
        rl.close();
    });

});
rl.on("close", function () {
    console.log(`Your Total Bill is ${bill}\n Thanks for coming,Visit again!!`)
    process.exit(0);
});
