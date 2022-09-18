

window.addEventListener('load', function(){
   //Capturo los input del form
   let $userName = document.querySelector('#user_name');
   let $userLastName = document.querySelector('#user_lastName');
   let $userEmail = document.querySelector('#user_email');
   let $userPassword = document.querySelector('#user_password');
   let $userAvatar = document.querySelector('#user_avatar')
   let $termsAndCondition = document.querySelector('#termsAndCondition');
   
   let errors = [];//Array errors
  
   $userName.focus(); //selecciono el input apenas carga la página
   //valido que los campos esten completos
   function validarVacio (event){
    let name = event.target.name //obtengo el nombre del componente donde se triggerea el evento
    if(this.value == ''){

      
      errors[name] = 'No puedes dejar este campo vacio';

      let $divError = document.querySelector('.error-'+ name); //atrapo al div correspondiente al input donde se genera el error
      let $inputError = document.querySelector('#user_'+ name);//atrapo al input correspondiente

      $inputError.classList.add('input_error')//asigno la clase de error al input
      $divError.classList.add('error')//asigno la clase de error al div

      return $divError.innerHTML = errors[name];
    }else{

      errors[name] = '';
      let $divError = document.querySelector('.error-'+ name);
      let $inputError = document.querySelector('#user_'+ name)
      $inputError.classList.remove('input_error')
      return $divError.innerHTML = errors[name];
    }
   }

   function islengthOK(min){
     return function(event){
         let name = event.target.name;
         let valueLength = this.value.length;
         console.log(valueLength )
         if(valueLength > 0 && valueLength < min){
            
            errors[name] = 'El valor ingresado debe ser mas largo';

            let $divError = document.querySelector('.error-'+ name);
            let $inputError = document.querySelector('#user_'+ name);

            $inputError.classList.add('input_error')
            $divError.classList.add('error')

            return $divError.innerHTML = errors[name];
            
      }else if( valueLength >= min){

         errors[name] = '';
         let $divError = document.querySelector('.error-'+ name);
         let $inputError = document.querySelector('#user_'+ name)
         $inputError.classList.remove('input_error')
         return $divError.innerHTML = errors[name];
     }

   }
}
   
   $userName.addEventListener('blur', validarVacio);
   $userName.addEventListener('blur', islengthOK(2))
   $userLastName.addEventListener('blur', validarVacio);
   $userLastName.addEventListener('blur', islengthOK(2))
   $userEmail.addEventListener('blur', validarVacio);
   $userPassword.addEventListener('blur', validarVacio);
   $userPassword.addEventListener('blur', islengthOK(5))
   $userAvatar.addEventListener('blur', validarVacio)
   






})