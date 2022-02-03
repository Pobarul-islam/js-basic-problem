// 10. you have an array of numbers. display only the numbers bigger than 80


var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var largest = arr[0];

for (var i = 0; i < arr.length; i++){
    if (largest < arr[i]) {    
        largest = arr[i];    
    }   
}

  console.log(largest);
