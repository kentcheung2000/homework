const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let menuItems = [
    ["Take out the trash", 1],
    ["Buy toothpaste", 1],
    ["Buy Snickerdoodles", 0],
    ["Fix the climaate", 0],
    ["Find a cure for aging", 0]
]

// let menuItems = [];
let check = "\u2713";
let unCheck = " ";

function printWelcome() {
    process.stdout.write("\n\nWelcome to Todo CLI!\n");
    process.stdout.write("--------------------\n");
}


function printMenu() {

    process.stdout.write("(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit\n\n");
}

function printMenuItems() {
    for (i = 0; i < menuItems.length; i++) {
        let checkStatus = menuItems[i][1] === 1 ? check : unCheck;
        process.stdout.write(i + " " + "[" + checkStatus + "] " + (menuItems[i][0] + '\n'));
    }
}


function selectMenuItems(input) {

    let c = input.split("");

    switch (c[0]) {
        case 'v':
            viewItems(runToDoCLI);
            break;
        case 'n':
            newItem(runToDoCLI);
            break;
        case 'c':
            completeItem(c[1], runToDoCLI);
            break;
        case 'd':
            deleteItem(c[1], runToDoCLI);
            break;
        default:
            console.log('\nIncorrect choice.  Choose again.\n');
            runToDoCLI()
            break;
    }

}

function viewItems(callback) {

    menuItems.length === 0 ? console.log('\nList is empty.\n\n') : printMenuItems();

    return callback();
}

function newItem(callback) {


    interface.question('\nWhat: ', input => {
        menuItems.push([input, 0]);
        callback();
    });




    // interface.on('line', () => {
    //     callback();
    // });

}


function completeItem(itemNum, callback) {

    if (itemNum > menuItems.length) {
        console.log('\nIncorrect item number.  Try again.\n');
        callback();
    } else {
        menuItems[itemNum][1] = 1;
        callback();
    }

}

function deleteItem(itemNum, callback) {

    if (itemNum > menuItems.length) {
        console.log('\nIncorrect item number.  Try again.\n');
        callback();
    } else {
        menuItems.splice(itemNum, 1);
        callback();
    }
}


function runToDoCLI() {

    printMenu();
    //interface.prompt();

    interface.question('\nWhat is your choice? ', answer => {

        if (answer.toLowerCase() === 'q') {
            process.stdout.write("See you soon!\n\n");
            process.exit();
        } else {
            selectMenuItems(answer);
        }
    });
}

printWelcome();
runToDoCLI();