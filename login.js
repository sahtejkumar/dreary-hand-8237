let user=JSON.parse(localStorage.getItem("user")) || []
    
console.log(user)
function login(){
    let arr=user.filter((elem)=>{
        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;
        return elem.email==email && password==elem.password

    })  
      console.log(arr) ;
      if (arr.length>=1){
        alert("Login successful!")
        window.location.href="index.html"
      }
     else {
        alert("Email or password is incorrect")
        // window.location.href="signup.html"
     }
     
}