window.addEventListener('load', function(){
   //Capturo los input del form
   let $userName = document.querySelector('#userName');
   let $userLastName = document.querySelector('#userLastName');
   let $userEmail = document.querySelector('#userEmail');
   let $userPassword = document.querySelector('#userPassword');
   let $termsAndCondition = document.querySelector('#termsAndCondition');
   //Objeto errors
   let errors = [];
   //selecciono el input apenas carga la página
   $userName.focus();
   //valido que los campos esten completos
   function validarVacio (event){
    //obtengo el nombre del componente donde se triggerea el evento
    let name = event.target.name
    if(this.value == ''){
        errors[name] = 'No puedes dejar el campo vacio';
        let $divError = document.querySelector('.error-'+ name);
         return $divError.innerHTML = errors[name];
    }
   }
   $userName.addEventListener('blur', validarVacio);
   //$userLastName.addEventListener('blur', validarVacio);
   $userEmail.addEventListener('blur', validarVacio);
   $userPassword.addEventListener('blur', validarVacio);
   






})