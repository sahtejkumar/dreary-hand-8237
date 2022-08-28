let products = [{name: 'C-Flow Face Pack, 100gm',
                cost: 698}]
// let products = JSON.parse(localStorage.getItem('products'))
// I need the data in the above format and then uncomment the above line
let product_total = 0
for(let obj of products) {
    product_total += obj.cost
}
console.log(product_total)

let flex_items = document.getElementById('flex-items')
let sub = document.getElementById('sub')
let total = document.getElementById('total')
let apply = document.getElementById('apply')
let coupon_code = 'masai100'
let input_box = document.getElementById('imp')
sub.innerText = `Rs ${product_total}`
total.innerText = `Rs ${product_total}`

products.forEach(function(el) {
    let div = document.createElement('div')
    div.setAttribute('class', 'flex')
    div.innerHTML += `
    <div class="item">
        <img src="https://www.bigbasket.com/media/uploads/p/xxl/40208842_1-bella-vita-organic-ubtanplus-face-pack.jpg">
        <p id="title">${el.name}</p>
    </div>
    <div class="item">
        <p id="price">Rs ${el.cost}</p>
    </div>
    `
    flex_items.append(div)
})

function apply_fun() {
    if(input_box.value == 'masai100')
    {
        product_total -= 100
        total.innerText = `Rs ${product_total}`
        apply.style.backgroundColor = 'lightgreen'
        apply.innerText = 'Applied'
        apply.disabled = true
    }
    else {
        alert('Invalid Coupon Code')
    }
    
}
function fun() {
    let email = document.getElementById('email').value 
    let address = document.getElementById('address').value 
    let phone = document.getElementById('phone').value 
    localStorage.setItem('email', JSON.stringify(email))
    localStorage.setItem('address', JSON.stringify(address))
    localStorage.setItem('phone', JSON.stringify(phone))
    window.location = 'payment.html'
}

function complete() {
    document.getElementById('complete').style.backgroundColor = 'green'
    document.getElementById('complete').innerText = 'Order Successful'
}
let email = JSON.parse(localStorage.getItem('email'))
let address = JSON.parse(localStorage.getItem('address'))
let phone = JSON.parse(localStorage.getItem('phone'))
document.getElementById('email_val').innerText = email
document.getElementById('address_val').innerText = address
document.getElementById('phone_val').innerText = phone 


