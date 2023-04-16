 const array = ["arjun","ram","suryam","jay","arjun","ram","suryam","jay"];
let uniquechars=array.filter((rar,index,arr)=>{
    return arr.indexOf(rar) ===index;

});
console.log(uniquechars)