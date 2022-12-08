// №9. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
function sumsq(array) {
  let sum = 0;
  let i, iTwo;
  for (i = 0, iTwo = array.length; i < iTwo; i++) {
    sum += array[i] * array[i];
  }
  return sum;
}
document.write(sumsq([4,45,2,7,-1,3]));