const shivam = {
    name:"Shivam Mishra",
    sayName : function (){
        console.log(this.name);
    },
};

setTimeout(shivam.sayName, 3 * 1000);// undefined

const fnc =shivam.sayName.bind(shivam);
setTimeout(fnc, 3 * 1000);//Shivam Mishra

setTimeout(()=>shivam.sayName(), 3 * 1000);//Shivam Mishra



/*

*/