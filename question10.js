const obj={
    height:30,
};

console.log(obj.height);

delete obj.height;
console.log(obj.height);




/*
My answer: (30 
undefined)

When we create the object in this way 
const obj = Object.create({
    height:30,
});

so when we'll try to delete the height of object we won't be able to reason because the above method stores the value in prototype not in object.
*/