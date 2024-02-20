const shivam={
    name:"Shivam Mishra",
    sayName: function (){
        console.log(this.name);
    },
};

const jhon ={
    name:"Jhon Doe",
    sayName: function (){
        console.log(this.name);
    }
};

jhon.sayName.call(shivam);
jhon.sayName();

/*
Answer of this will be Shivam Mishra . Reason for this will be that here we are using (.call) with (jhon.sayName). If we don't use .call  it'll print Jhon Deo 
*/