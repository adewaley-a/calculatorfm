

let billin = document.getElementById('billin')
let newdialog = document.createElement('p')
newdialog.innerHTML=``
billin.addEventListener('change', function(){
    let reset = document.getElementById('res')
    res.style.backgroundColor="hsl(172, 67%, 45%)"

    let nopin = document.getElementById('nopin').value
    
    if (nopin ==  ''){
        let numb = document.getElementById('numb')
        numb.appendChild(newdialog)
        newdialog.innerHTML= `can't be zero`
        newdialog.style.color="red"
        let nopin = document.getElementById('nopin')
       
        
    }
   
    
}

 


)



let nopin = document.getElementById('nopin')
nopin.addEventListener('change', function(){
if(nopin.value!=''){
    let numb = document.getElementById('numb')
    numb.appendChild(newdialog)
    newdialog.innerHTML= `can't be zero`
    
    
   
    
let billin = document.getElementById('billin').value
console.log(billin)
let custy = document.getElementById('custy').value
console.log(custy)
let nopin = document.getElementById('nopin').value
console.log(nopin)

let x = (billin*custy/100)/nopin
console.log(x)
let zero = document.getElementById('zero')
zero.innerHTML='$' + x.toFixed(2)

let y = (Number(billin)+x*nopin)/nopin
console.log(y)
let zeroth = document.getElementById('zero2')
zeroth.innerHTML = '$' + y.toFixed(2)

let reset = document.getElementById('res')
res.style.backgroundColor="hsl(172, 67%, 45%)"

let five =document.getElementById('five')
five.addEventListener('click', function(){
five.style.backgroundColor="hsl(172, 67%, 45%)"
five.style.color="hsl(183, 100%, 15%)"



let ten = document.getElementById('ten')
let fifteen = document.getElementById('fifteen')
let twentyfive = document.getElementById('twenty-five')
let fifty = document.getElementById('fifty')
ten.style.backgroundColor="hsl(183, 100%, 15%)"
ten.style.color="white"
fifteen.style.backgroundColor="hsl(183, 100%, 15%)"
fifteen.style.color="white"
twentyfive.style.backgroundColor="hsl(183, 100%, 15%)"
twentyfive.style.color="white"
fifty.style.backgroundColor="hsl(183, 100%, 15%)"
fifty.style.color="white"


let billin = document.getElementById('billin').value
console.log(billin)
let nopin = document.getElementById('nopin').value
console.log(nopin)

let one = (billin*5/100)/nopin
let zero = document.getElementById('zero')
zero.innerHTML = '$' + one.toFixed(2)

let ones = (Number(billin)+one*nopin)/nopin
let zeroth = document.getElementById('zero2')
zeroth.innerHTML = '$' + ones.toFixed(2)

let reset = document.getElementById('res')
res.style.backgroundColor="hsl(172, 67%, 45%)"


res.addEventListener('click', function(){
    res.style.backgroundColor="hsl(186, 14%, 43%)"

    billin.value=''
    custy.value=''
    nopin.value=''
    zero.innerHTML= '$0.00'
    zeroth.innerHTML= '$0.00'

    five.style.backgroundColor="hsl(183, 100%, 15%)"
    five.style.color="white"

    
})
if (nopin ==  ''){
    let numb = document.getElementById('numb')
    numb.appendChild(newdialog)
    newdialog.innerHTML= `can't be zero`
    newdialog.style.color="red"
    let nopin = document.getElementById('nopin')
   
    
}
})

let ten =document.getElementById('ten')
ten.addEventListener('click', function(){
ten.style.backgroundColor="hsl(172, 67%, 45%)"
ten.style.color="hsl(183, 100%, 15%)"

let billin = document.getElementById('billin').value
console.log(billin)
let nopin = document.getElementById('nopin').value
console.log(nopin)

let five = document.getElementById('five')
let fifteen = document.getElementById('fifteen')
let twentyfive = document.getElementById('twenty-five')
let fifty = document.getElementById('fifty')
five.style.backgroundColor="hsl(183, 100%, 15%)"
five.style.color="white"
fifteen.style.backgroundColor="hsl(183, 100%, 15%)"
fifteen.style.color="white"
twentyfive.style.backgroundColor="hsl(183, 100%, 15%)"
twentyfive.style.color="white"
fifty.style.backgroundColor="hsl(183, 100%, 15%)"
fifty.style.color="white"


let one = (billin*10/100)/nopin
let zero = document.getElementById('zero')
zero.innerHTML = '$' + one.toFixed(2)

let ones = (Number(billin)+one*nopin)/nopin
let zeroth = document.getElementById('zero2')
zeroth.innerHTML = '$' + ones.toFixed(2)

let reset = document.getElementById('res')
res.style.backgroundColor="hsl(172, 67%, 45%)"

res.addEventListener('click', function(){
    res.style.backgroundColor="hsl(186, 14%, 43%)"

    billin.value=''
    custy.value=''
    nopin.value=''
    zero.innerHTML= '$0.00'
    zeroth.innerHTML= '$0.00'

    ten.style.backgroundColor="hsl(183, 100%, 15%)"
    ten.style.color="white"
 
})  

if (nopin ==  ''){
    let numb = document.getElementById('numb')
    numb.appendChild(newdialog)
    newdialog.innerHTML= `can't be zero`
    newdialog.style.color="red"
    let nopin = document.getElementById('nopin')
   
    
}
})

let fifteen =document.getElementById('fifteen')
fifteen.addEventListener('click', function(){
fifteen.style.backgroundColor="hsl(172, 67%, 45%)"
fifteen.style.color="hsl(183, 100%, 15%)"

let billin = document.getElementById('billin').value
console.log(billin)
let nopin = document.getElementById('nopin').value
console.log(nopin)

let ten = document.getElementById('ten')
let five = document.getElementById('five')
let twentyfive = document.getElementById('twenty-five')
let fifty = document.getElementById('fifty')
ten.style.backgroundColor="hsl(183, 100%, 15%)"
ten.style.color="white"
five.style.backgroundColor="hsl(183, 100%, 15%)"
five.style.color="white"
twentyfive.style.backgroundColor="hsl(183, 100%, 15%)"
twentyfive.style.color="white"
fifty.style.backgroundColor="hsl(183, 100%, 15%)"
fifty.style.color="white"


let one = (billin*15/100)/nopin
let zero = document.getElementById('zero')
zero.innerHTML = '$' + one.toFixed(2)

let ones = (Number(billin)+one*nopin)/nopin
let zeroth = document.getElementById('zero2')
zeroth.innerHTML = '$' + ones.toFixed(2)

let reset = document.getElementById('res')
res.style.backgroundColor="hsl(172, 67%, 45%)"

res.addEventListener('click', function(){
    res.style.backgroundColor="hsl(186, 14%, 43%)"

    billin.value=''
    custy.value=''
    nopin.value=''
    zero.innerHTML= '$0.00'
    zeroth.innerHTML= '$0.00'

    fifteen.style.backgroundColor="hsl(183, 100%, 15%)"
    fifteen.style.color="white"

})
if (nopin ==  ''){
    let numb = document.getElementById('numb')
    numb.appendChild(newdialog)
    newdialog.innerHTML= `can't be zero`
    newdialog.style.color="red"
    let nopin = document.getElementById('nopin')
   
    
}
})

let twentyfive =document.getElementById('twenty-five')
twentyfive.addEventListener('click', function(){
twentyfive.style.backgroundColor="hsl(172, 67%, 45%)"
twentyfive.style.color="hsl(183, 100%, 15%)"

let billin = document.getElementById('billin').value
console.log(billin)
let nopin = document.getElementById('nopin').value
console.log(nopin)

let ten = document.getElementById('ten')
let fifteen = document.getElementById('fifteen')
let five = document.getElementById('five')
let fifty = document.getElementById('fifty')
ten.style.backgroundColor="hsl(183, 100%, 15%)"
ten.style.color="white"
fifteen.style.backgroundColor="hsl(183, 100%, 15%)"
fifteen.style.color="white"
five.style.backgroundColor="hsl(183, 100%, 15%)"
five.style.color="white"
fifty.style.backgroundColor="hsl(183, 100%, 15%)"
fifty.style.color="white"


let one = (billin*25/100)/nopin
let zero = document.getElementById('zero')
zero.innerHTML = '$' + one.toFixed(2)

let ones = (Number(billin)+one*nopin)/nopin
let zeroth = document.getElementById('zero2')
zeroth.innerHTML = '$' + ones.toFixed(2)

let reset = document.getElementById('res')
res.style.backgroundColor="hsl(172, 67%, 45%)"

res.addEventListener('click', function(){
    res.style.backgroundColor="hsl(186, 14%, 43%)"

    billin.value=''
    custy.value=''
    nopin.value=''
    zero.innerHTML= '$0.00'
    zeroth.innerHTML= '$0.00'

    twentyfive.style.backgroundColor="hsl(183, 100%, 15%)"
    twentyfive.style.color="white"

})
if (nopin ==  ''){
    let numb = document.getElementById('numb')
    numb.appendChild(newdialog)
    newdialog.innerHTML= `can't be zero`
    newdialog.style.color="red"
    let nopin = document.getElementById('nopin')
   
    
}
})

let fifty =document.getElementById('fifty')
fifty.addEventListener('click', function(){
fifty.style.backgroundColor="hsl(172, 67%, 45%)"
fifty.style.color="hsl(183, 100%, 15%)"

let billin = document.getElementById('billin').value
console.log(billin)
let nopin = document.getElementById('nopin').value
console.log(nopin)

let ten = document.getElementById('ten')
let fifteen = document.getElementById('fifteen')
let twentyfive = document.getElementById('twenty-five')
let five = document.getElementById('five')
ten.style.backgroundColor="hsl(183, 100%, 15%)"
ten.style.color="white"
fifteen.style.backgroundColor="hsl(183, 100%, 15%)"
fifteen.style.color="white"
twentyfive.style.backgroundColor="hsl(183, 100%, 15%)"
twentyfive.style.color="white"
five.style.backgroundColor="hsl(183, 100%, 15%)"
five.style.color="white"


let one = (billin*50/100)/nopin
let zero = document.getElementById('zero')
zero.innerHTML = '$' + one.toFixed(2)

let ones = (Number(billin)+one*nopin)/nopin
let zeroth = document.getElementById('zero2')
zeroth.innerHTML = '$' + ones.toFixed(2)

let reset = document.getElementById('res')
res.style.backgroundColor="hsl(172, 67%, 45%)"

res.addEventListener('click', function(){
    res.style.backgroundColor="hsl(186, 14%, 43%)"

    billin.value=''
    custy.value=''
    nopin.value=''
    zero.innerHTML= '$0.00'
    zeroth.innerHTML= '$0.00'

    fifty.style.backgroundColor="hsl(183, 100%, 15%)"
    fifty.style.color="white"

})
if (nopin ==  ''){
    let numb = document.getElementById('numb')
    numb.appendChild(newdialog)
    newdialog.innerHTML= `can't be zero`
    newdialog.style.color="red"
    let nopin = document.getElementById('nopin')
   
    
}
})


}})

res.addEventListener('click', function(){
    res.style.backgroundColor="hsl(186, 14%, 43%)"

    billin.value=''
    custy.value=''
    nopin.value=''
    zero.innerHTML= '$0.00'
    zeroth.innerHTML= '$0.00'
    newdialog.style.display="none"
    if (nopin ==  ''){
        let numb = document.getElementById('numb')
        numb.appendChild(newdialog)
        newdialog.innerHTML= `can't be zero`
        newdialog.style.color="red"
        let nopin = document.getElementById('nopin')
        
        
    }
})








