<template>
  <div id="app">
    <!-- Nav -->
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
            64th Annual STEAKFRY | The Gresham Rotarian Club
        </router-link>

      </div>

      <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>

      <div class="navbar-menu is-active" >
        <div id="navMenu" class="navbar-end">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>
          <router-link to="/Tickets" class="navbar-item">
            Tickets
          </router-link>
          <router-link to="/Contact" class="navbar-item">
            Contact
          </router-link>
          <a title="Visit the Gresham Rotary Club online" href="https://www.greshamrotary.com" class="navbar-item">
            Gresham Rotary Club
          </a>

        </div>
          
        </div>
      
    </nav>
  </div>

</template>
<script type="text/javascript">
  document.addEventListener('DOMContentLoaded', function (){

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check for the navbarBurgers
    if ($navbarBurgers.length > 0) {

      // Add a click event if there are any navbarBurgers
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {

            // Get the target from the data-target attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);

            // Toggle the class on both the navbar-burger and the menu
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
      });
    }
  });
</script>