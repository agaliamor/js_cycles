// №7. Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
let arr = [1, 5, 6, 3, -98]; 
for (let i = 0; i < arr.length; i++) {
  if(arr[i] === 5) {
    console.log(i); 
    break; 
  }
}