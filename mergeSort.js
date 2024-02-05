function mergesort (array){
    if(array.length <= 1){
        return array
    }

    const length = array.length;
    const middle = Math.floor(array.length /2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle, length);

    return merge(mergesort(leftHalf),mergesort(rightHalf));
}

function merge(leftHalf,rightHalf) {
    let newArray=[];
    let i=0,j=0; 
    while(i<leftHalf.length && j<rightHalf.length) {
        if(leftHalf[i]<rightHalf[j]) {
            newArray.push(leftHalf[i++]); 
        }
        else{
            newArray.push(rightHalf[j++]);
        }
    }
    while(i<leftHalf.length) {
        newArray.push(leftHalf[i++]); 
    }
    while(j<rightHalf.length) {
        newArray.push(rightHalf[j++]); 
    }
    return newArray;
}

console.log(mergesort([3, 2, 1, 13, 8, 5, 0, 1]))

