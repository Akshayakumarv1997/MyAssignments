let str = "Test Leaf";
let count = 0;

for (let i = 0; i < str.length - 1; i++) {
    if (str.charAt(i) === 'e') {
        count++;
    }
}
console.log("Count of e character using chatAt:" + count);

let str1 = "Test Leaf";
let count1 = 0;

for (let i = 0; i < str1.length - 1; i++) {
    if (str1[i] === 'e') {
        count1++;
    }
}
console.log("Count of e character:" + count1);