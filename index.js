import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from 'chalk';
const sleep = () => new Promise((resolve) => setTimeout((resolve), 2000));
async function welcomeScreen() {
    let title = chalkAnimation.rainbow(`
=======================================================================
>>>>>>>>>>>>>>>>>>>>>>>>> CURRENCY CONVERTER <<<<<<<<<<<<<<<<<<<<<<<<<<
=======================================================================
    `);
    await sleep();
    title.stop();
}
await welcomeScreen();
async function main() {
    let currency = {
        USD: {
            usd: 1,
            pkr: 230,
            lira: 19.41,
        },
        PKR: {
            pkr: 1,
            usd: 0.0035,
            lira: 0.068,
        },
        LIRA: {
            lira: 1,
            usd: 0.052,
            pkr: 14.64,
        }
    };
    const conversion = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            message: "select currecy from convert:",
            choices: ["USD", "PKR", "LIRA"],
        },
        {
            type: "list",
            name: "to",
            message: "select currency to convert:",
            choices: ["usd", "pkr", "lira"]
        },
        {
            type: "number",
            name: "amount",
            message: "enter your amount to convert:",
        },
    ]);
    let { from, to, amount } = conversion;
    let result = currency[from][to] * amount;
    console.log("\n" + chalk.magenta(result.toFixed(2)));
}
;
await main();
