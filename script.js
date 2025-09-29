
// make an array 
let myArray = [10, "banana", true];

//modify the array
myArray.push([1,2,3]);
myArray.push("added string");
myArray.shift();
myArray[1] = 345;
myArray[myArray.length - 1] = false;

// printing the array elements
let i = 0;
while (i < myArray.length) {
    console.log(myArray[i]);    // print the i'th element in array
    i++;                        // increment i
}

// check data types
i = 0;
while (i < myArray.length) {
    console.log(typeof myArray[i]);
    i++;
}

// another array lol
const myScale = ["C", "D", "E", "F", "G", "A", "B"];

// data types
let n = 0;
while (n < myScale.length) {
    console.log(typeof myScale[n]);
    n++;
}

// print the whole array
console.log(myScale);

// modify values conditionally
n = 0;
while (n < myScale.length) {
    if (myScale[n] == "F") {
        myScale[n] = "F#";
    }
    if (myScale[n] == "B") {
        myScale[n] = "Bb";
    }
    n++;
}