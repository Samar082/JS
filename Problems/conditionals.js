// falsy values = 0, flase, undefined, null, NaN, document.all

if(NaN){
    console.log("yes");
} else{
    console.log("no");
}

function suggestActivity(age){
    if(age < 5){
        return "Play with toys!";
    }
    else if(age < 13){
        return "Play with friends"
    }
    else if (age < 18) {
        return "Involve yourself to extra curicculam activities!!"
    }
    else if(age < 30){
        return "Focus on your career and enjoy with your friends!!"
    }
    else if (age < 60) {
        return "Travel Travel Travel Travel"
    } else{
        return "Enjoy some relaxing activities or hobbies!"
    }
}

let a = suggestActivity(5);
console.log(a);

