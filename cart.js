
// /*


// function append() {
//     var cartData = JSON.parse(localStorage.getItem('cart')) || [] ;
//     let container = document.getElementById("container")

//     cartData.forEach(function(el){
//         let div = document.createElement("div")

//         let img = document.createElement("img")
//         img.src = el.img_url
    
//         let price = document.createElement("p")
//         price.innerText = el.cost 
    
//         div.append(img, price)
//         container.append(div)
//     })
   
    
// }
// append()


// */

// cart funtionlity 
let removeBtn = document.getElementById("Button ID add here")

for(let i=0; i<removeBtn.length; i++){
    let Button = removeBtn[i]
    Button.addEventListener('click', function(event){
        let buttonClick = event.target
        buttonClick.parentElement.parentElement.remove()
        updatecartTotal()
    })

}

function updatecartTotal(){
    let cartItem = document.getElementsByClassName("cart-Item") [0]
    let cart

}