function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); // it can access username because username is a parent class of two(is baat ko hum kuch ayse samajhte hai agar parent bacho se ice-cream mange wo acha nhi hota lakin agar bacha parents se ice-cream mange to wo acha lagta hai)
    }
    // console.log(website);//will show error because it is outside the scope
}

// console.log(username); // will show error because it is outside the scope


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5) //will show error because it have declare a function in a variable and it try to access it before(ise ko hosting kehte hai js me aage or detial me padhenge)
const addTwo = function(num){
    return num + 2
}