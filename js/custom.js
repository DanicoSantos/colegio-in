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
            <a href="index.html"><img src="images/logo-negative.png" width="80"/></a>
          </div>
          <div class="site-quick-contact d-none d-lg-flex ml-auto ">
            <div class="d-flex site-info align-items-center mr-5">
              <span class="block-icon mr-3"><span class="icon-map-marker text-secondary-custom"></span></span>
              <span>Endereço <br> <span class="font-weight-bold">Colégio In</span> - Avenida Gentil Bittencourt, 436 - Nazaré <br>
              <span class="font-weight-bold">In Pré-vestibular e Cursos</span> -  Avenida Gentil Bittencourt, 439 - Nazaré
              </span>
            </div>
            <div class="d-flex site-info align-items-center">
              <span class="block-icon  mr-3"><span class="text-secondary-custom icon-clock-o"></span></span>
              <span>Segunda à Sexta das 7h às 18h <br> 
              Sábado das 8h às 13h<br>
              FECHADO aos Domingos</span>
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
              <li class=""><a href="index.html" class="nav-link">Início</a></li>
              <li><a href="about.html" class="nav-link">Conheça o In</a></li>
              <li><a href="team.html" class="nav-link">Professores</a></li>
              <li><a href="#" class="nav-link">Portal In</a></li>


            </ul>
          </nav>

          <div class="top-social ml-auto d-none d-sm-block">
            <a href="https://www.facebook.com/colegioinbelem"><span class="icon-facebook text-primary-custom"></span></a>
            <a href="https://www.instagram.com/colegioinbelem/"><span class="icon-instagram text-primary-custom"></span></a>
            <a href="https://twitter.com/colegioinbelem"><span class="icon-twitter text-primary-custom"></span></a>
            <a href="https://www.youtube.com/channel/UCR7Y_InglVoBNcZvag4_DxA"><span class="icon-youtube text-primary-custom"></span></a>
            <a href="https://www.tiktok.com/@colegioinbelem?lang=pt-BR"><span class="icon-tiktok text-primary-custom"></span></a>
          </div>
        </div>
      </div>



    </header>
`);
const footer = (`
<div class="row">
          <div class="col-lg-4">
            <h2 class="footer-heading font-weight-bold text-secondary-custom mb-3">Endereço</h2>
            <p class="address-text"><span class="font-weight-bold">Colégio In</span> - Avenida Gentil Bittencourt, 436 - Nazaré</p>
            <p class="mb-5 address-text"><span class="font-weight-bold">In Pré-vestibular e Cursos</span> -  Avenida Gentil Bittencourt, 439 - Nazaré </p>
            <p>contato@colegioin.com</p>

          </div>
          <div class="col-lg-8 ml-auto">
            <div class="row">
              <div class="col-lg-4 ml-auto">
                <h2 class="footer-heading  mb-4 text-secondary-custom">Navegação</h2>
                <ul class="list-unstyled">
                  <li><a href="about">Conheça o In</a></li>
                  <li><a href="team">Professores</a></li>
                  <li><a href="/">Portal In</a></li>
                </ul>
              </div>
              <div class="col-lg-4 ml-auto">
                <h2 class="footer-heading text-secondary-custom mb-4">Redes sociais</h2>
               <a href="https://www.facebook.com/colegioinbelem"><span class="icon-facebook text-white mr-2"></span></a>
               <a href="https://www.instagram.com/colegioinbelem/"><span class="icon-instagram text-white mx-2"></span></a>
               <a href="https://twitter.com/colegioinbelem"><span class="icon-twitter text-white ml-2"></span></a>
               <a href="https://www.youtube.com/channel/UCR7Y_InglVoBNcZvag4_DxA"><span class="icon-youtube text-white ml-2"></span></a>
               <a href="https://www.tiktok.com/@colegioinbelem?lang=pt-BR"><span class="icon-tiktok text-white ml-2"></span></a>

              </div>




            </div>
          </div>
        </div>
        
`);

const cta = (`
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-12 d-flex">
      <h2 class="text-primary-custom m-0 font-weight-bold">Converse com o time In</h2>
      <a href="https://api.whatsapp.com/send?phone=5591985430562" class="btn bg-primary-custom text-white btn-custom-1 py-3 px-3 ml-auto font-weight-bold d-flex justify-content-between"><span class="icon-whatsapp font-weight-bold mr-2" style="font-size: 1.2rem;"></span> Entre em contato</a>
    </div>
  </div>
</div>
`);

const navbarContainer = $('#navbar-container');
const footerContainer = $('#footer-container');
const ctaContainer = $('#cta-container');

const includeComponent = (component, container) => {
    container.append(component);
}

$(() => {
    includeComponent(navBar, navbarContainer);
    includeComponent(footer, footerContainer);
    includeComponent(cta, ctaContainer);
})