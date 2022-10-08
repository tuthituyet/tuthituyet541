let arr1 = [1,0,2,3,4];
let arr2 = [3,5,6,7,8,13];
let max = 0;
if (arr1.length > arr2.length){
    max = arr1.length;
}
else {
    max = arr2.length;
}

let sum = [];
for (let i = 0; i < max; i++){
    if (typeof arr1[i] === 'undefined') {
        sum.push(arr2[i]);
    }
    else if (typeof arr2[i] === 'undefined'){
        sum.push(arr1[i]);
    }
    else{
        sum.push(arr1[i] + arr2[i])
    }
}
console.log(sum)
