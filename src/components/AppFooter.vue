<template>

<footer class="main-footer">
    <div class="container">
      <div class="footer-top">
        <p>Simple search. Simple browse. Simple buy.</p>
        <div class="footer-social">
          <p>Follow us on</p>

          <ul class="footer-menu footer-menu-social">
            <li><a href="" title="Follow us on twitter"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="" title="Follow us on instagram"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="" title="Follow us on youtube"><i class="fa-brands fa-youtube"></i></a></li>
            <li><a href="" title="Follow us on facebook"><i class="fa-brands fa-facebook"></i></a></li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="footer-bottom">
        <p>2023 Groocery</p>
        <ul class="footer-menu">
          <li><a href="" title="Terms and conditions">Terms and conditions</a></li>
          <li><a href="" title="Privacy policy">Privacy policy</a></li>
          <li><a href="" title="Cookies">Cookies</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
    export default {
        name: 'AppFooter',
        components: {}
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap');

    :root {
        --heading-color: #242d31;
        --text-color: #2b2b2b;
        --accent-color: #85a2b7;
        --contrast-color: #ef8283;
        --accent-color-light: #dde8ef;
        --accent-dark-color: #345974;
        --contrast-light-color: #d99a9a;
        --neutral-color: #444a4c;
        --neutral-light-color: #f8f8f8;
        --bg-dark-color: #2b2c4d;
        --bg-light-color: #f5f5f5;
        --text-family: 'Outfit';
        --text-neutral-color: #bebfc1;
        --border-light-color: #f5f5f5;
        --border-radius: 10px;
        --box-shadow-light: 10px 10px 26px -21px rgba(0,0,0,0.75);
        --margin-between-sections: 0 0 100px 0;

        /* screen sizes */
        --screen-size-mobile-min: 480px;
        --screen-size-tablet-min: 481px;
        --screen-size-tablet-max: 1024px;
        --screen-size-desktop-min: 1025px;

    }

    body {
        font-family: 'Outfit', sans-serif !important;
        min-width: 360px !important;
        font-size: 1rem;
        color: #2b2b2b;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none !important;
    }

    a:hover {
        color: #85a2b7;
    }

    .btn {
        background-color: #85a2b7;
        border: none;
    }

    .btn:hover {
        background-color: #345974;
    }

    h1, h2, h3, h4, h5, h6 {
        color: #242d31;
    }

    /* header and nav */

    .main-header {
        background-color: #fff;
        width: 100%;
        z-index: 10;
        position: sticky;
        top: 0;
    }

    .navbar-header {
        height: 100px;

    }

    .navbar-header .container {
        flex-wrap: nowrap;
        gap: 5em;
    }


    @media (max-width: 1024px) {
        .navbar-header .container {
            gap: 10px;
        }
    }


    .logo {
        padding: 0;
    }

    .logo-img {
        max-height: 70px;
        width: 10em;
    }

    .logo-img--mobile {
        display: none;
        max-height: 50px;
        max-width: 50px;
    }


    @media (max-width: 481px) {
        .logo-img--mobile {
            display: block;
        }

        .logo-img--full {
            display: none;
        }
    }


    .main-header {
        box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, .25);
    }

    .navbar-light .navbar-nav .nav-link {
        color: #2b2b2b;
        font-size: 16px;
        font-weight: 600;
        
    }

    .navbar-light .navbar-nav .nav-link:hover {
        color: #85a2b7;
        
    }

    .navbar-toggler {
        border: 0;
        padding: 1px 2px;
    }

    .logo {
        margin-right: 0;
    }

    .nav-buttons {
        display: flex;
    }

    .btn-register {
        margin-right: 10px;
    }

    .main-header__navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .search {
        flex: 1 1 500px;
        margin: auto;
        display: inline-flex;
        align-items: center;
        border-radius: 5px;
        padding: 10px 0;
        background-color: #f8f8f8;
    }

    .search__icon {
        padding: 6px 10px 6px 10px;
        color: #444a4c;
    }

    .search .form-control {
        border: 0;
        background-color: inherit;
    }

    .search .form-control:focus {
        box-shadow: none;
    }


    /* Navbar categories*/
    .navbar-categories {
        color: #f8f8f8 !important;
        background-color: #85a2b7;
        box-shadow: none;
        
    }

    .navbar-categories a {
        color: #f8f8f8;
    }

    .user-options a:hover {
        color: #444a4c;
    }


    .navbar-categories ul {
        display: inline-flex;
        gap: 1rem;
    }

    /* user options */
    .user-options {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        color: #444a4c;
    }




    /* main body */
    .main-body {
        flex: 80;
        margin-top: 30px;
    }

    /* Home */
    .main-body__home {
        display: flex;
    }
    .carousel-featured {
        border-radius: 10px;
        background-color: #f8f8f8;
        height: 500px;
        overflow: hidden;
        margin: 0 0 100px 0;
    }

    .carousel-inner {
        height: 100%;
    }

    .carousel-item {
        height: 100%;
    }

    .carousel-item:nth-child(1) {
        background-color: #e9d7d9;
    }

    .carousel-item:nth-child(2) {
        background-color: #dbe0c7;
    }

    .carousel-item:nth-child(3) {
        background-color: #c5d4e0;
    }



    .carousel-featured .carousel-caption {
        /* background-color: rgba(97, 97, 97, 0.377);
        color: #f8f8f8; */
        border-radius: 10px;
        width: auto;
        text-align: left;
        bottom: 0;
    }


    .carousel-featured .carousel-caption h5 {
        font-size: 3em;
    }

    .carousel-featured .carousel-caption p {
        font-size: 1.5em;
    }

    @media (max-width: 1024px) {
        .carousel-featured{
            height: 300px;
        }
        
    }

    .carousel-featured img {
        /* height: 100%;
        max-width: 100%; */
        height: 100%;
        margin: auto;
        float: right;
    }



    /* Product card */
    .product-card {
        width: 300px;
        height: 325px;
        border-radius: 10px;
        box-shadow: 10px 10px 26px -21px rgba(0,0,0,0.75);
        overflow: hidden;
        animation: card-out 0.5s ease 0s 1 backwards;
    }

    @keyframes card-out {
        0% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0px);
        }
    }


    .product-card:hover {
        animation: card-in 0.5s ease 0s 1 forwards;

    }

    @keyframes card-in {
        0% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(-10px);
        }
    }

    .product-card a {
        display: block;
        height: 100%;
    }
    .product-card a:hover {
        color: inherit;
    }

    .product-card__top {
        max-height: 175px;
        overflow: hidden;
    }

    .product-card__image {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .product-card__discount {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 70px;
        height: 70px;
        background-color: #ef8283;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #f8f8f8;
        font-size: 1.5em;
    }

    .product-card__bottom {
        padding: 20px;
        background-color: #f8f8f8;
    }

    .product-card__description{
        height: 85px;
    }


    .product-card__description h2{
        font-weight: bold;
        font-size: 1em;
    }

    .product-card__description p{
        color: #bebfc1;
        font-size: 0.7em;
        line-height: 1.2em;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;

    }

    .product-card__price {
        font-size: 1.5em;
        font-weight: bold;
    }

    /* Top offers */
    .top-offers {
        background-color: #345974;
        background: linear-gradient(186deg, rgba(2,0,36,1) 0%, rgba(64,28,64,1) 64%, rgba(110,48,110,1) 100%);
        padding: 20px 0;
        margin: 0 0 100px 0;
    }
    .top-offers .container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    @media (max-width: 1024px) {
        .top-offers .container {
            flex-direction: column;
        }
    }

    .top-offers__title {
        color: #f8f8f8;
        font-weight: bold;
        font-size: 2em;
    }
    .top-offers-grid {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        gap: 30px;
        overflow-x: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
        width: 100%;
        scroll-snap-type: x mandatory;
        scroll-padding: 24px;
        box-sizing: border-box;
    }

    .top-offers-grid::-webkit-scrollbar {
        height: 10px;
        background-color: rgba(255, 255, 255, 0.178);
    }

    .top-offers-grid::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.521);
        border-radius: 20px;
    }

    .top-offers-grid::-webkit-scrollbar-thumb:hover {
        background-color:#f8f8f8;
    }


    .top-offers-grid > * {
        flex: 0 0 250px;
        scroll-snap-align: start;
        box-sizing: border-box;
        
    }

    /* Grid products */
    .products-grid {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        flex-wrap: wrap;

        /* Grid mode */
        /* display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        align-items: center; */
    }

    .products-grid > * {
        flex: 0 0 240px; 
    }

    @media (max-width: 1024px) {
        .products-grid > * {
            flex: 0 0 45%;
        }
    }

    /*Products categories*/
    .categories-products-grid {
        margin: 0 0 100px 0;
    }
    .categories-products-grid .container{
        display: flex;
        gap: 30px;
    }

    .categories-products-grid__categories {
        flex: 0 0 15%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    @media (max-width: 481px) {
        .categories-products-grid .container {
            flex-direction: column;
        }

        .categories-products-grid__categories {
            flex-direction: row;
        }
        .categories-products-grid__category {
            width: auto;
            flex: 1 1 30%;
        }
    }

    .categories-products-grid__category {
        width: 100%;
        height: 60px;
        background-color: #f8f8f8;
        color: #444a4c;
        box-shadow: 10px 10px 26px -21px rgba(0,0,0,0.75);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 1em;
        cursor: pointer;
    }

    .categories-products-grid__category:hover {
        color: #85a2b7;
    }

    .categories-products-grid__category.active{
        background-color: #85a2b7 !important;
    }

    /* Featured banner */
    .newsletter {
        width:100%;
        background-color: #345974;
        background-image: url(../images/backgrounds/background_triangle.svg);
        background-position: center;
        background-size: cover;
        margin: 0 0 100px 0;
        padding: 50px;
        color: #f8f8f8;
    }

    .newsletter h2 {
        color: #f8f8f8;
    }

    .newsletter .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .newsletter form {
        display: flex;
        flex-direction: row;
        gap: 1em;
    }

    @media (max-width: 481px) {
        .newsletter form {
            flex-direction: column;
        }
    }
    
    /* Footer */
    .main-footer {
        margin-top: 50px;
        background-color: #85a2b7;
        color: #f8f8f8;
    }

    .main-footer a {
        color: #f8f8f8;
    }

    .main-footer a:hover {
        color: #444a4c;
    }

    .main-footer p {
        margin: 0;
    }

    .main-footer .container {
        padding: 20px;
        display: flex;
        flex-direction: column;
    }

    .footer-bottom {
        font-size: 0.8em;
    }

    .footer-top, .footer-bottom {
        padding: 20px;
    }

    .footer-top, .footer-social, .footer-bottom, .footer-menu  {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;
        align-items: center;
    }

    @media (max-width: 481px) {
        .footer-top, .footer-bottom {
            flex-direction: column;
        }
    }

    .footer-menu-social {
        color: #444a4c;

}
</style>