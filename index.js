function saturdayFun(activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`);
}

saturdayFun();
saturdayFun("bathe my dog");


 function mondayWork(activity = "go to the office"){
    return (`This Monday, I will ${activity}.`);
 }

 mondayWork();
 mondayWork("work from home");


 function wrapAdjective(wrap = '*') {
    return function(result = "a hard worker" ){
        return `You are ${wrap}${result}${wrap}!`;
    };
 }


 function wrapAdjective(wrap = "||"){
    return function(result = "a dedicated programmer"){
        return `You are ${wrap}${result}${wrap}!`
    }
 }