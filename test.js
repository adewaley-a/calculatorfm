
let percent = document.getElementById('tippercent')
percent.addEventListener('change', function(){
let bill = document.getElementById('billamount').value
console.log(bill)
let percent = document.getElementById('tippercent').value
console.log(percent)

let x=  bill*percent/100
let tip =document.getElementById('tip').value =x

})
let bill = document.getElementById('billamount')
bill.addEventListener('change', function(){
    let bill = document.getElementById('billamount').value
    console.log(bill)
    let percent = document.getElementById('tippercent').value
    console.log(percent)
    
    let x=  bill*percent/100
    let tip =document.getElementById('tip').value =x
    
    })