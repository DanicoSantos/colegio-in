const navBar = (`
<div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>



    <header class="site-navbar site-navbar-target" role="banner">

      <div class="container mb-3">
        <div class="d-flex align-items-center">
          <div class="site-logo mr-auto">
            <a href="index.html">Colégio In<span class="text-primary">.</span></a>
          </div>
          <div class="site-quick-contact d-none d-lg-flex ml-auto ">
            <div class="d-flex site-info align-items-center mr-5">
              <span class="block-icon mr-3"><span class="icon-map-marker text-yellow"></span></span>
              <span>Endereço <br> Belém - Pará</span>
            </div>
            <div class="d-flex site-info align-items-center">
              <span class="block-icon mr-3"><span class="icon-clock-o"></span></span>
              <span>Segunda à Sábado das 08:00h às 18:00h <br> FECHADO aos Domingos</span>
            </div>

          </div>
        </div>
      </div>


      <div class="container">
        <div class="menu-wrap d-flex align-items-center">
          <span class="d-inline-block d-lg-none"><a href="#"
              class="text-black site-menu-toggle js-menu-toggle py-5"><span
                class="icon-menu h3 text-black"></span></a></span>



          <nav class="site-navigation text-left mr-auto d-none d-lg-block" role="navigation">
            <ul class="site-menu main-menu js-clone-nav mr-auto ">
              <li class="active"><a href="index.html" class="nav-link">Início</a></li>
              <li><a href="about.html" class="nav-link">Conheça o In</a></li>
              <li><a href="team.html" class="nav-link">Professores</a></li>
              <li><a href="/" class="nav-link">Portal In</a></li>


            </ul>
          </nav>

          <div class="top-social ml-auto">
            <a href="#"><span class="icon-facebook text-teal"></span></a>
            <a href="#"><span class="icon-twitter text-success"></span></a>
            <a href="#"><span class="icon-linkedin text-yellow"></span></a>
          </div>
        </div>
      </div>



    </header>
`);
const footer = (`
<div class="row">
          <div class="col-lg-4">
            <h2 class="footer-heading mb-3">Endereço</h2>
            <p class="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
              there live the blind texts. </p>
            <p>conta@contato.com</p>

          </div>
          <div class="col-lg-8 ml-auto">
            <div class="row">
              <div class="col-lg-4 ml-auto">
                <h2 class="footer-heading mb-4">Navegação</h2>
                <ul class="list-unstyled">
                  <li><a href="#">Conheça o In</a></li>
                  <li><a href="#">Professores</a></li>
                  <li><a href="#">Cursos</a></li>
                </ul>
              </div>
              <div class="col-lg-4 ml-auto">
                <h2 class="footer-heading mb-4">Redes sociais</h2>
                <ul class="list-unstyled">

                </ul>
              </div>




            </div>
          </div>
        </div>
        
`);

const navbarContainer = $('#navbar-container');
const footerContainer = $('#footer-container');

const includeComponent = (component, container) => {
    container.append(component);
}

$(() => {
    includeComponent(navBar, navbarContainer);
    includeComponent(footer, footerContainer);
})