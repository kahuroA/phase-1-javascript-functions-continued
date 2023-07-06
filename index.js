// code your solution here
function saturdayFun(act="roller-skate"){
    return `This Saturday, I want to ${act}!`;
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}


function wrapAdjective(flair="*"){
    return function(name="special"){
        return `You are ${flair}${name}${flair}!`;
    }
}


//console.log(saturdayFun());