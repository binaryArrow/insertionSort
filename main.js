"use strict"

let myArray = [3, 1, 2, 0, 5, 9, 8, 7, 6, 4];

console.log(insertionSort(myArray));


function insertionSort(array){
    let key;
    let i;

    for (let j = 0; j < array.length; j++) {
        key = array[j];
        i = j -1;

        while (i >= 0 && array[i] > key) {
            array[i+1] = array[i];
            i--;
            
            //console.log(array);
        }
        
        array[i+1] = key;
    }

    return array;

}