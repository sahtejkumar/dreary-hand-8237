

let items = JSON.parse(localStorage.getItem('products'))



let item = +items.length
let sum = 0;

console.log('item:', item)



function append() {
    
    let container = document.getElementById("container")
    let row = document.getElementById("row-1")
    let row2 = document.getElementById("row-2")
    // let total = document.getElementById("cart-total")
    
    container.innerHTML = null

    items.map(function(el){
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = el.img_url

    
        let price = document.createElement("p")
        price.innerText = el.cost 

        // let price2 = document.getElementById("p")
        // price2.innerHTML = el.cost
          
    
        
        row.append(img)
        row2.append(price)
        // total.append(price2)
     
        container.append(div)


        let row3 = document.getElementById("row-3")
        // row3.innerHTML = null
        let buttondiv = document.createElement('div')
        buttondiv.setAttribute('id','buttondiv')
 
        let minusbtn = document.createElement('button')
        minusbtn.setAttribute('id','minus')
        minusbtn.innerText = "-";
 
        let No_of_items = document.createElement('div')
        No_of_items.setAttribute('id','countNum')
        
 
        let plusbtn = document.createElement('button')
        plusbtn.setAttribute('id','plus');
        plusbtn.innerText = "+";
 
        let addbutton = document.createElement('button')
        addbutton.innerText = "ADD TO CART"
        addbutton.setAttribute('id','addtocart')
        addbutton.addEventListener('click',cartfun)
        
        buttondiv.append(minusbtn,No_of_items,plusbtn);
        row3.append(buttondiv)
    })

    let plus = document.getElementById('plus')
    plus.addEventListener('click',incfun)
    
    let count = JSON.parse(localStorage.getItem('countvalue')) || 1;
    
    function incfun(){
       count = count+1;
    
    
       console.log(count)
      localStorage.setItem('countvalue',count)
      window.location.reload()
    }
    
    let minus = document.getElementById('minus')
    minus.addEventListener('click',decfun)
    
    function decfun(){
       count = count-1;
    
       
       console.log(count)
      localStorage.setItem('countvalue',count)
    
      window.location.reload()
     }
    
     let money = document.getElementById('cost')
    
     let updatecost = money*count;
    //  document.getElementById('cost').innerHTML = `₹${updatecost}`;
    let text = document.getElementById('countNum')
    text.innerText = count;
    
    
}
append(items)


function cartfun()
{
items = JSON.parse(localStorage.getItem('products'))

cartItem.push(productData[0])

localStorage.setItem('cartItem',JSON.stringify(cartItem));

// window.location = "./cart.html"
}