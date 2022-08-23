
let getData=function(place, char='adventurist'){
    console.log(`${this.name} is ${this.age} years old, she is from ${place} and she is ${char} girl`);
}


let gayatri={
    name:'aishwarya',
    age:21,
};


let gayatriData=getData.bind(gayatri,'haridwar');
console.log(gayatriData);



// let persons=[{
//     obj:{
//         name:'gaytri',
//         age:21,
//     }, 
// params:['haridwar','notorious'],
// },{
//      obj:{
//     name:'aishwarya',
//     age:21,
// },
// params:['haridwar','notorious'],
// },  { 
//      obj:{
//     name:'ekta',
//     age:21,
// },
// params:['haridwar','notorious'],
// } ]

// for(let data of persons){
//     console.log(data);
//     console.log(data.obj);
//     console.log(data.params);
// }
