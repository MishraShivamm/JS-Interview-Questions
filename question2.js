myfun();

var myfun = function (){
    console.log("first");
}

myfun();

function myfun(){
    console.log("second");
}
myfun();

/*
My answer : Answer is that it'll print second,first and first because of the same concept "hositing"*/