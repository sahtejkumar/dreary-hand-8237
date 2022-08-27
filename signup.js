let user=JSON.parse(localStorage.getItem('user')) ||[]
function signup(){
    event.preventDefault()
    let name=document.getElementById('Name').value;
    let lname=document.getElementById("last").value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let enter=new products(name,lname,email,password)
    console.log(name,lname,email,password)
    user.push(enter)
    localStorage.setItem("user",JSON.stringify(user))
    location.href="login.html"
}
function products(name,lname,email,password){
    this.name=name;
    this.lname=lname;
    this.email=email;
    this.password=password;
    console.log(name,lname,email,password)
}