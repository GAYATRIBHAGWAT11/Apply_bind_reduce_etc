

let dog={
    name:'dog',
    bark: function(){
        console.log(`${this.name} is barking`);
    }
}

let parrot={
    name:'parrot',
    chirp:function(){
        console.log(`${this.name} is chirping`);
    }
}

// let speak=dog.bark.bind(parrot);
// speak();