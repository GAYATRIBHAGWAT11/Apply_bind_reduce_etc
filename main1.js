let person={
name:'gayatri',
age:12,
};


let getData=function(place, char='adventurist'){
    console.log(`${this.name} is ${this.age} years old, she is from ${place} and she is ${char} girl`);
}

let gayatri={
    name:'aishwarya',
    age:21,
};

let aishwarya={
    name:'aishwarya',
    age:11,
};



getData.call(gayatri,'haridwar')
// getData.call(person)
getData.apply(aishwarya,['haridwar','notorious'])


