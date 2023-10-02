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