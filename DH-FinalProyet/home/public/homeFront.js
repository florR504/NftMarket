window.addEventListener("load", function () {
  let $sideBar = document.getElementById("mySidebar");
  let $open = document.querySelector(".openbtn");
  let $menu = document.getElementById("menu");
  let $close = document.getElementById("close");
  let $user = document.getElementById("user_nav");
  let $login = document.getElementById("form_nav");
  let $register = document.getElementById("register_nav");
  let $buscador = document.getElementById("buscador_nav");
  let $shoppingCart = document.getElementById('shopping')
 

  function openNav() {
    $sideBar.style.width = "250px";
    $open.style.marginLeft = "250px";
    if ($login && $register) {
      $login.style.display = "none";
      $register.style.display = "none";
      $buscador.style.display = "none";
    } else if ($user) {
      $user.style.display = "none";
      $buscador.style.display = "none";
    }
  }
  function closeNav() {
    $sideBar.style.width = "0";
    $open.style.marginLeft = "0";
    if ($login && $register) {
      $login.style.display = "block";
      $register.style.display = "block";
      $buscador.style.display = "block";
    } else if ($user) {
      $user.style.display = "flex";
      $buscador.style.display = "block";
    }
  }


  $menu.addEventListener("click", openNav);
  $close.addEventListener("click", closeNav);

  
 
  
 
});
