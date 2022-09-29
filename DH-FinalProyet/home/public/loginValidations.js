window.addEventListener("load", function () {
  //Capturo los input del form
  let $loginEmail = document.querySelector("#usuario");
  let $loginPassword = document.querySelector("#contraseña");

  let errors = []; //Array errors

  $loginEmail.focus(); //selecciono el input apenas carga la página
  //valido que los campos esten completos
  function validarVacio(event) {
    let name = event.target.name; //obtengo el nombre del componente donde se triggerea el evento

    if (this.value == "") {
      errors[name] = "No puedes dejar este campo vacio";

      let $divError = document.querySelector(".error-" + name); //atrapo al div correspondiente al input donde se genera el error

      $divError.classList.add("error"); //asigno la clase de error al div

      return ($divError.innerHTML = errors[name]);
    } else {
      errors[name] = "";
      let $divError = document.querySelector(".error-" + name);

      return ($divError.innerHTML = errors[name]);
    }
  }

  function islengthOK(min) {
    return function (event) {
      let name = event.target.name;
      let valueLength = this.value.length;

      if (valueLength > 0 && valueLength < min) {
        errors[name] = "El valor ingresado debe ser mas largo";

        let $divError = document.querySelector(".error-" + name);

        $divError.classList.add("error");

        return ($divError.innerHTML = errors[name]);
      } else if (valueLength >= min) {
        errors[name] = "";
        let $divError = document.querySelector(".error-" + name);

        return ($divError.innerHTML = errors[name]);
      }
    };
  }

  $loginEmail.addEventListener("blur", validarVacio);
  $loginEmail.addEventListener("blur", islengthOK(2));

  $loginPassword.addEventListener("blur", validarVacio);
  $loginPassword.addEventListener("blur", islengthOK(2));
});
