var fullname= "Shivam Mishra";

var obj = {
    fullname: "Error 404",

    prop:{
        fullname:"Inside Prop",
        getFullname:function(){
            return this.fullname;
        },
    },

    getFullname:function(){
        return this.fullname;
    },
    
    getFullnameV2 : ()=>this.fullname,

    getFullnameV3 : (function (){
        return this.fullname;
    }) (), // IIFE 
};

console.log(obj.prop.getFullname());//Inside Prop
console.log(obj.getFullname()); //Error404
console.log(obj.getFullnameV2());//undefined
console.log(obj.getFullnameV3());//error because it's an IIFE