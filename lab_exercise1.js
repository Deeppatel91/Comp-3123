
//Question-1
function capitalizeFirstLetterOfEachWord(inputString) {
    const words = inputString.split(' ');//Split the string in to words
    //map over each word to capitalize the first letter and combine rest words 
    const capitalizedWords = words.map(word => {
        if (word.length > 0) {
            //captilize first word and combine it with other words
           return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return word;// returen word if it is not empty
    });
    return capitalizedWords.join(' ');//.join back the words in to a single string with spaces 
}
const inputString = "The quick brown fox";
const result = capitalizeFirstLetterOfEachWord(inputString);
console.log(result); // Outputs: "The QUick Brown Fox"

//Question-2
//max function takes any number of arguments and return the largest one 
function max(a, b, c) {
    return Math.max(a, b, c);
}
console.log(max(1, 0, 1));      // Outputs: 1
console.log(max(0, -10, -20));  // Outputs: 0
console.log(max(1000, 510, 440)); // Outputs: 1000

//Question-3
function right(str) {
    //check if length of string is greater than or equal to 3
    if (str.length >= 3) {
        //extract last3 characters
        const lastThree = str.slice(-3);
        //extract rest of strings
        const rest = str.slice(0, -3);
        //combine the last 3 characters with rest characters
        return lastThree + rest;
    }
    return str;//if length is less than 3.
}
console.log(right("Python"));       // Outputs: "honPyt"
console.log(right("JavaScript"));  // Outputs: "iptJavaScr"
console.log(right("Hi"));           // Outputs: "Hi"

//Question-4
function angle_Type(degrees) {
    if (degrees > 0 && degrees < 90) {
        return "Acute angle";
    } else if (degrees === 90) {
        return "Right angle";
    } else if (degrees > 90 && degrees < 180) {
        return "Obtuse angle";
    } else if (degrees === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle";
    }
}
console.log(angle_Type(47));   // Outputs: "Acute angle"
console.log(angle_Type(90));   // Outputs: "Right angle"
console.log(angle_Type(145));  // Outputs: "Obtuse angle"
console.log(angle_Type(180));  // Outputs: "Straight angle"

//Question-5
function array_max_sum(arr, k) {
    if (arr.length < k || k <= 0) return 0;
    let maxSum = 0;
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }
    maxSum = currentSum;
    for (let i = k; i < arr.length; i++) {
        currentSum = currentSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2)); // Outputs: 19
console.log(array_max_sum([2, 3, 5, 1, 6], 3));  // Outputs: 12
console.log(array_max_sum([9, 3, 5, 1, 7], 2));  // Outputs: 12
