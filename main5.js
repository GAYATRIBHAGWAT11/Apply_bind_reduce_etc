let person={
    name:'gayatri',
    age:20,
};

person['name']='ekta';
console.log(person);

Object.freeze(person);

person['age']='60';
console.log(person);


// Object.defineProprty()  =>


