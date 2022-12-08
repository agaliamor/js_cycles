// №8. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
let array = [1, 4, 6, 2, 99];
let res = 0; 
for (let i = 0; i < array.length; i++) {
  res += array[i];
}
document.write(res);