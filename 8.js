// №8. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
let arr = [1, 4, 6, 2, 99];
let res = 0; 
for (let i = 0; i < arr.length; i++) {
  res += arr[i];
}
document.write(res);