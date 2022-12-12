// №9. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
function sumsq(arr) {
  let sum = 0;
  let i, iLen;
  for (i = 0, iLen = arr.length; i < iLen; i++) {
    sum += arr[i] * arr[i];
  }
  return sum;
}
document.write(sumsq([4,45,2,7,-1,3]));