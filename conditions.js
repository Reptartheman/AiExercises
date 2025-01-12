const thing1 = true;
const thing2 = false;
function whatWhat() {
    if (thing1) {
        console.log('I AM what'); // <--- RUNS BECAUSE TRUE
    }
    else {
        console.log('what');
    }
}
function whyWhy() {
    if (thing2) {
        console.log('I AM why');
    }
    else {
        console.log('why'); // <---- RUNS BECAUSE ABOVE LINE IS FALSE
    }
}


function howHow() {
    if (!thing1) {
        console.log('I AM how');
    }
    else {
        console.log('how'); /// <---- RUNS BECAUSE OPPOSITE OF TRUE
    }
}

function whereWhere() {
    if (!thing2) {
        console.log('I AM where'); // <---- RUNS BECAUSE OPPOSITE OF FALSE
    }
    else {
        console.log('noWhere');
    }
}


whatWhat();
whyWhy();
howHow();
whereWhere();
