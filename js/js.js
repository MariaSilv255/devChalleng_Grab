function validation(){

var usr ="teste@teste.com";
var senha = "12345";

var email = document.getElementById('email').value;
var psw = document.getElementById('psw').value;

if(usr === email && senha === psw){
  window.location = "pagina.html";
}else{
  document.getElementById("email").setAttribute("required", ""); 
}

}