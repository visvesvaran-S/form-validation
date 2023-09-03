document.getElementById("myForm").addEventListener("submit", function(e){
if(!formValidation()){
  e.preventDefault()
 }
 });

 
 function formValidation(){

   var names = document.getElementById('name').value
   // console.log(name);
   var lastName = document.getElementById('lastName').value
   // console.log(lastName);
   var status =true;
   var email = document.getElementById('email').value
     var att = email.indexOf("@");
     var dot = email.lastIndexOf(".");


   // console.log(email);
   var password = document.getElementById('password').value
   // console.log(password);
   var confirmPassword = document.getElementById('confirmPassword').value
   // console.log(confirmPassword);


   if(names ===''){
      alert('please enter your name')  
      status = false
   }else if(( lastName==null) ||(lastName== '')){
      alert('please enter your lastname')
      status = false

    }else if(att<1 || dot<att+2 || dot+2>=email.length){
      alert( "please enter your valid mail id" )
      status = false

   }else if(password.length<4){
      alert("please enter minimum 4 chracter password")
      status = false

   }else if(password !== confirmPassword){
      alert("password not matched ")
      status = false

   }
   else{
      alert('sucess')
   }

   sessionStorage.setItem(`names`,names)
   sessionStorage.setItem(`lastnames`,lastName)
   sessionStorage.setItem(`email`,email)
   sessionStorage.setItem(`password`,password)
   sessionStorage.setItem(`confirmpassword`,confirmPassword)
    return status
   
}
  

 
