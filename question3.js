var variable = 10;
(()=>{
    console.log(variable);

    variable=20;
    
    console.log(variable);
})(); //IIFE(immediately invoked function expression)

console.log(variable);
var variable=30;

/*
Answer is that it'll print undefined, 20 , 10 . Reason we are trying to access the variable before intializing a value to it .  */
