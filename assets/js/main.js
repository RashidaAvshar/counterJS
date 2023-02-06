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
        document.querySelector("#count").innerHTML = count;
        document.querySelector("#fTotal").innerHTML = count * price
        }

})

// nan yoxdu daha, yoxla gorek basqa nese catismazlig var


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
         document.querySelector("#sTotal").innerHTML = newPrice *counter
         

     }
 })
 
 
function totalSum(){
    document.querySelector("#sum").innerHTML = Number(document.querySelector("#fTotal").innerHTML) + Number(document.querySelector("#sTotal").innerHTML)
  
}


document.addEventListener("click",totalSum)
