var productData = JSON.parse(localStorage.getItem('products'))



let product_imgage = document.getElementById('product_img');
let product_details = document.getElementById('product_details');

function append(){
   productData.forEach(function(elem){
       

       let img = document.createElement('img')
       img.src = elem.img_url;
       

        let pro_name = document.createElement('div')

       let name = document.createElement('h2')
       name.innerText  = elem.name;

       let des = document.createElement('h3')
       des.innerText = elem.description;
       des.setAttribute('id','description')

       let prcostdiv = document.createElement('div')
       prcostdiv.setAttribute('id','costdiv')
       
       let cost = document.createElement('h2')
       cost.innerText = `₹${elem.cost}`;
       cost.setAttribute('id','cost')
       cost.value = elem.cost;

   

       let strikecost = document.createElement('h3')
       strikecost.innerText = elem.strikecost;
       strikecost.setAttribute('id','strikecosts')

       let rating = document.createElement('h3')
       rating.innerText = elem.rating;
       rating.setAttribute('id','rating');

       document.getElementById('rate').innerText = elem.rating;


       //----------- Offers and discounts and delivery check section--------//

       let offers = document.createElement('h1')
       offers.innerText = "Offers";
       offers.setAttribute('id','Offers')

       let discountdiv = document.createElement('div')
       
       let discount = document.createElement('h2')
       discount.innerText = "7% Discount";
       discount.setAttribute('class','green')

       

       let para = document.createElement('p')
       para.innerText = "New Users can avail 7% discount on their first order with a minimum order value of ₹499. Cannot be clubbed with any other offers or Bella Cash.";
       para.setAttribute('class','para')


       discountdiv.append(discount,para)

       let pricediv = document.createElement('div')

       let priceof3 = document.createElement('h2')
       priceof3.innerText = "4 at the price of 3";
       priceof3.setAttribute('class','green')


       let para2 = document.createElement('p')
       para2.innerText = "Get 4 products for the price of 3! Just add 4 products to your cart and use the code '4FOR3'.  Cannot be clubbed with any other offers or Bella Cash. Offer not valid on Boxes.";
       para2.setAttribute('class','para')

       

       pricediv.append(priceof3,para2)

       //-------------------close----------------//
       //---------delivery check section--------//
       let pincodediv = document.createElement('div')


       let input =  document.createElement("input");
       
       // input.setAttribute("value",'default')
       input.placeholder = "Enter delivery pincode";
       input.setAttribute('id','pincode')

       let checkbtn = document.createElement('button')
       checkbtn.innerText = "CHECK";
       checkbtn.setAttribute('id','checkbtn')
       checkbtn.addEventListener('click',checkfun)

       let order_not = document.createElement('h3')
       order_not.setAttribute('id','order_not')
       
      


       pincodediv.append(input,checkbtn,order_not)

       

       prcostdiv.append(cost,strikecost,rating)

       pro_name.append(name,des,prcostdiv)

       product_img.innerHTML = null;
       product_details.innerHTML = null;

       //window.location.reload();

       product_img.append(img);
       
       product_details.append(pro_name)


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

       product_details.append(buttondiv,addbutton,offers,discountdiv,pricediv,pincodediv);
   
       
   
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

 let money = document.getElementById('cost').value;

 let updatecost = money*count;
 document.getElementById('cost').innerText = `₹${updatecost}`;
let text = document.getElementById('countNum')
text.innerText = count;
}
append(productData)

let pincodearr = ["531127","531126","530013"];
function checkfun(){
//let val = document.getElementsByClassName('pincode')[0].innerText;
let value = document.getElementById('pincode').value;
if(pincodearr.includes(value)){ 
document.getElementById('order_not').innerText = "Deliver of Order is available !";
document.getElementById('order_not').style.color = "green";
}
else{
document.getElementById('order_not').innerText = "Delivery is not available / Select any near by place";
document.getElementById('order_not').style.color = "red";
}
}




cartItem = JSON.parse(localStorage.getItem('cartItem')) || [];
function cartfun()
{
productData = JSON.parse(localStorage.getItem('products'))

cartItem.push(productData[0])

localStorage.setItem('cartItem',JSON.stringify(cartItem));

window.location = "./cart.html"
}