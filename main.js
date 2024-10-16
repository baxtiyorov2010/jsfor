let arr = [
    2, 3, 4, 5, 5, 7, 8
]
console.log(arr);
let num = [

]

for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        num.push(arr[i])
    }
}
console.log(num);