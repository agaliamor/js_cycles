// №10. Дан массив с числами. Найдите среднее арифметическое его элементов.
let arr = [4,45,2,7,-1,3];
let sum = 0; 
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
let result = sum / arr.length; 
document.write(result); 
