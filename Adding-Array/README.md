# Adding Arrays

_Create an algorithm that receives from the console two lists of
numbers separated by commas, each list being separated by a slash:_

```
// numbers => "1,2,3/3,2,1"
```
_Creates two lists from the received text and prints a new list by adding all the values
from the two previous lists._
```
"// numbers = 1,2,3/3,2,1" => [1, 2, 3] [3,2,1]
// [1, 2, 3] + [3,2,1] => [4, 4, 4]
Remember that to print you must use console.log()
```
## Solution 🚀
```
function sumArray(numbers) {
  let newArray = [];
  let arr = numbers.split("/", 2);
  let array1 = arr[0].split(",", 3);
  let array2 = arr[1].split(",", 3);

  for (let i = 0; i < array1.length; i++) {
    newArray.push(Number(array1[i]) + Number(array2[i]));
  }
  console.log(newArray);
} 
sumArray("1,2,3/3,2,1"); // print in console (4,4,4)

```
