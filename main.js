function person(name){
    this.name=name;
}
// person('gayatri')

class Person{
constructor(name){
    this.name=name;
}
num=10;

 getName(){
    return this.name
}
}

console.log(Person.getName());

// let gayatri=new Person('gayatri');
// let aishwarya=new Person('aishwarya')
// console.log(gayatri);



