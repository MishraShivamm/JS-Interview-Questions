//Mostly time this questions is asked in the interview 

// for(var i=0;i< 10; i++){
//     setTimeout(()=>console.log(i), 1000);
// }

for(let i=0;i< 10; i++){
    setTimeout(()=>console.log(i), 1000);
}

/*
Wrong answer:This answer is correct for let not for var(My answer is that it'll print 0 to 9 after print 1 it'll print 2 after one sec and same process will continue till 9)

For declaration of i using var will give us 10 times 10 .
*/