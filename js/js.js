function validation() {

  var email = document.getElementById('email').value;
  var psw = document.getElementById('psw').value;

  if (email === "teste@teste" && psw === "123") {
    
    alterarcor("b");
    alert("Bem vindo(a) 🚀");
    
  } else {
    alterarcor("a");
    document.getElementById("error").innerHTML = "Por favor insirar um email valido!";
    document.getElementById('psw').value="";
    document.getElementById('email').value="";
    //psw.style.cssText = 'border: 2px solid red;' ALTERAR VARIOS ATRIBUTOS CSS
  }
}
  function alterarcor(tipo) {
    var icon1 = document.getElementById("alteremail");
    var icon2 = document.getElementById("lock");
    var input = document.getElementById("input-email");
    var input2 = document.getElementById("input-psw");
    var email = document.getElementById('email');
    
    if (tipo === 'a') {

      icon1.style.cssText = 'color:red;'
      icon2.style.cssText = 'color:red;'
      input.style.cssText = 'border: 2px solid red;'
      input2.style.cssText = 'border: 2px solid red;'
      email.style.cssText = 'color:red;'


    } else {

      icon1.style.cssText = 'color:white;'
      icon2.style.cssText = 'color:white;'
      input.style.cssText = 'border: 2px solid white;'
      input2.style.cssText = 'border: 2px solid white;'
      email.style.cssText = 'color:white;'


    }
  }
