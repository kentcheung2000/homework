//const argvLength = process.argv.length;
const horizontalBar = "\u2501";
const verticalBar = "\u2503";
const leftMiddleBar = "\u2523";
const rightMiddleBar = "\u252b";
const bottomLeftCorner = "\u2517";
const bottomRightCorner = "\u251B";
const topLeftCorner = "\u250F";
const topRightCorner = "\u2513";


let names = [];

function drawLine(dl) {

    let hl = horizontalBar;
    return hl.repeat(dl);

}

function drawTopBorder(tb) {

    let hl = drawLine(tb);
    let topBorder = topLeftCorner + hl + topRightCorner;
    return topBorder;

}

function drawMiddleBorder(mb) {

    let hl = drawLine(mb);
    let middleBorder = leftMiddleBar + hl + rightMiddleBar;
    return middleBorder;
}

function drawBottomBorder(mb) {

    let hl = drawLine(mb);
    let bottomBorder = bottomLeftCorner + hl + bottomRightCorner;
    return bottomBorder;

}

function drawBarsAround(name, maxLengthName) {

    let space = " ";
    let spaceRemain = maxLengthName - name.length;
    let vl = verticalBar;

    return vl + name + space.repeat(spaceRemain) + vl;
}

function boxItFunction() {

    process.argv.forEach((values) => {
        names.push(values);
    });
    names.splice(0, 2);

    let namesLength = names.length;
    let maxLengthName = 0;
    if (namesLength !== 0) {

        let maxName = names.reduce(function (a, b) {
            return a.length > b.length ? a : b;
        });
        maxLengthName = maxName.length;


    }

    //console.log(namesLength);

    if (namesLength === 0) {

        let str = drawTopBorder() + "\n" + drawBottomBorder();
        console.log(str);

    } else {


        //console.log(maxLengthName);

        str = drawTopBorder(maxLengthName) + "\n";

        for (i = 0; i < namesLength; i++) {
            str += drawBarsAround(names[i], maxLengthName) + "\n";
            if (i != namesLength - 1) {
                str += drawMiddleBorder(maxLengthName) + "\n";

            }
        }

        str += drawBottomBorder(maxLengthName);
        console.log(str);

    }



}

boxItFunction();

//console.log(drawTopBorder(0));
// console.log(drawMiddleBorder(5));
// console.log(drawBottomBorder(5));
//console.log(drawBarsAround('Kent'));
//console.log(drawLine(10));
// console.log(horizontalBar);
//console.log(verticalBar);
//console.log(leftMiddleBar);
//console.log(rightMiddleBar);
//console.log(bottomLeftCorner);
//console.log(bottomRightCorner);
//console.log(topLeftCorner);
//console.log(topRightCorner);