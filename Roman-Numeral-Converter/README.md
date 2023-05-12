# Roman Numeral Converter

Convert the given number into a roman numeral.


|Roman numerals |	Arabic numerals |
| ------------- |:-------------:|
|M |	1000|
|CM	|900|
|D |	500|
|CD |	400|
|C	|100|
|XC	|90|
|L	|50|
|XL	|40|
|X	|10|
|IX	|9|
|V	|5|
|IV	|4|
|I	|1|

All roman numerals answers should be provided in upper-case.

```
function convertToRoman(num) {

const romanNumerals = [
  {value: 1000, numeral: "M"},
  { value: 900, numeral: 'CM' },
  { value: 500, numeral: 'D' },
  { value: 400, numeral: 'CD' },
  { value: 100, numeral: 'C' },
  { value: 90, numeral: 'XC' },
  { value: 50, numeral: 'L' },
  { value: 40, numeral: 'XL' },
  { value: 10, numeral: 'X' },
  { value: 9, numeral: 'IX' },
  { value: 5, numeral: 'V' },
  { value: 4, numeral: 'IV' },
  { value: 1, numeral: 'I' }
  ];

  let result = '';

  romanNumerals.forEach((numeral) =>{
    while (num >= numeral.value){
      result += numeral.numeral;
      num -= numeral.value
    }
  })
 return result;
}

console.log(convertToRoman(649)) //debe devolver la cadena DCXLIX
console.log(convertToRoman(5)) should return the string V.
console.log(convertToRoman(2014)) should return the string MMXIV
```