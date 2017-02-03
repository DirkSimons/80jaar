Vue.component("slc-nav", {
    template: `
    <div class="container">
    <nav class="nav">
        <div class="nav-left">
            <a class="nav-item">
                <!-- <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo"> -->
                <img src="img/logo.png" alt="SLCadix logo">

            </a>
        </div>
        <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
        <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
        <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
        </span>

        <!-- This "nav-menu" is hidden on mobile -->
        <!-- Add the modifier "is-active" to display it on mobile -->

        <div class="nav-right nav-menu">

          <span class="nav-item">
            <a class="button is-primary">
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
              <router-link to="/event-ingave" tag="span">Gebeurtenis</router-link>
            </a>

          </span>

          <span class="nav-item">
            <a class="button is-primary">
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
              <router-link to="/lln-ingave" tag="span">LLN-aantal</router-link>
              </a>
          </span>

          <span class="nav-item">
            <a class="button is-primary">
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
              <router-link to="/lkr-ingave" tag="span">LKR-aantal</router-link>
            </a>
            </span>

        </div>
    </nav>
    </div>
    `
});
