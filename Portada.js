function go(){

if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USUARIO'){ 
        document.form.submit(); 
    } 
    else{ 
         alert("Nombre de usuario y/o contraseña incorrectos."); 
    } 
} 