let reducedString=['gayatri','aishwarya','ekta'].reduce((acc,current)=>{
    console.log(acc,current);
    return acc+current
});
console.log(reducedString);


Array.prototype.myReduce=function(callback,initialValue){
    let acc=initialValue;
    for(let i=0;i<this.length;i++){
        if(acc!==undefined){
            acc=callback(acc,this[i])
        }else{
            acc=this[i]
        }
    }
    return acc;
}

let reducdNum=[1,2,3,4,5].myReduce((acc,current)=>{
    // console.log(acc,current);
    return acc+current;
});
console.log(reducdNum);