let person={
    name:'gayatri',
    age:20,
};

let person2={
    name:'aishwarya;'
}

person2.__proto__person;

console.log(Object.getPrototypeOf(person));

console.log(Object.hasOwn(person2, 'age'));