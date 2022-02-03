// 11. write a function that takes three numbers and returns the multiplication of the three numbers


function numbers(num1, num2, num3) {
    var multiply = num1 * num2;
    var threeNum = multiply * num3;
    return threeNum;
}
var result = numbers(4, 5, 6);
console.log(result);