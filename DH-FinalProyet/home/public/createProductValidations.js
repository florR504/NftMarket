window.addEventListener('load', function(){
    //Capturo los input del form
    let $NftPrice = document.querySelector('#nft_price');
    let $NftOddity = document.querySelector('#nft_oddity');
    let $NftName = document.querySelector('#nft_titulo');
    let $NftColeccion = document.querySelector('#nft_coleccion')
   
    
    let errors = [];//Array errors
   
    $NftName.focus(); //selecciono el input apenas carga la página
    //valido que los campos esten completos
    function validarVacio (event){
     let name = event.target.name //obtengo el nombre del componente donde se triggerea el evento
     if(this.value == ''){
 
       
       errors[name] = 'No puedes dejar este campo vacio';
 
       let $divError = document.querySelector('.error-'+ name); //atrapo al div correspondiente al input donde se genera el error
       let $inputError = document.querySelector('#nft_'+ name);//atrapo al input correspondiente
 
       $inputError.classList.add('input_error')//asigno la clase de error al input
       $divError.classList.add('error')//asigno la clase de error al div
 
       return $divError.innerHTML = errors[name];
     }else{
 
       errors[name] = '';
       let $divError = document.querySelector('.error-'+ name);
       let $inputError = document.querySelector('#nft_'+ name)
       $inputError.classList.remove('input_error')
       return $divError.innerHTML = errors[name];
     }
    }
 
    function betweenNumber(min, max){
      return function(event){
          let name = event.target.name;
          let value = this.value
       
          if(value < min || value > max ){
             
             errors[name] = 'No es posible agregar ese valor ';
 
             let $divError = document.querySelector('.error-'+ name);
             let $inputError = document.querySelector('#nft_'+ name);
 
             $inputError.classList.add('input_error')
             $divError.classList.add('error')
 
             return $divError.innerHTML = errors[name];
             
       }else if( value >= min){
 
          errors[name] = '';
          let $divError = document.querySelector('.error-'+ name);
          let $inputError = document.querySelector('#nft_'+ name)
          $inputError.classList.remove('input_error')
          return $divError.innerHTML = errors[name];
      }
 
    }
 }
    
    $NftName.addEventListener('blur', validarVacio);
   
    $NftOddity.addEventListener('blur', validarVacio);
    $NftOddity.addEventListener('blur', betweenNumber(2,10));
    $NftPrice.addEventListener('blur', validarVacio)
    $NftColeccion.addEventListener('blur', validarVacio);

    
    
 
 
 
 
 
 
 })