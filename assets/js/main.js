let decrement = document.querySelector("#decrement");
let increment = document.querySelector("#increment");
let totalFirst = document.querySelector("#fTotal");
let totalSecond = document.querySelector("#sTotal");
let dec = document.querySelector("#dec");
let inc = document.querySelector("#inc");
let sum = document.querySelector("#sum");
let count = 0;
let counter = 0;
let price = 110;
let newPrice = 86;

increment.addEventListener("click", ()=>{
   count ++;
    document.querySelector("#count").innerHTML = count
    document.querySelector("#fTotal").innerHTML = count * price
})
decrement.addEventListener("click", ()=>{
    if(count == 0){
        alert("Məhsul əlavə edin")
    }else{
        count --;
        document.querySelector("#count").innerHTML = count
        if(count !== 0)
        document.querySelector("#fTotal").innerHTML = price - count
    }
})



inc.addEventListener("click", ()=>{
    counter ++;
     document.querySelector("#counter").innerHTML = counter
     document.querySelector("#sTotal").innerHTML = counter * newPrice
 })
 dec.addEventListener("click", ()=>{
     if(counter == 0){
         alert("Məhsul əlavə edin")
     }else{
         counter --;
         document.querySelector("#counter").innerHTML = counter
         document.querySelector("#sTotal").innerHTML = newPrice - counter

     }
 })
 

// function totalSum(){
//     document.querySelector("#sum").innerHTML = totalFirst + totalSecond
// }
// console.log(totalSum)

