<template>
    <div class="container">
        <div class="promotion">
          <h2 class="promotion__header">{{ promotion__header }}</h2>
        </div>
        <navigation-menu/>
        <header>
          <div class="header-texts">
            <h2 class="header__title">A melhor loja de Jordan</h2>
            <p class="header__paragraph">O tenis jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p> 
          </div>
        </header>
        <section class="products">
          <h2 class="products__title">Destaques</h2>
          <p class="products__paragraph">Frete gratis e chinelo de brinde é só aqui, aproveite por tempo limitado.</p>
          <div class="products-items">
            <!-- <Shoes></Shoes> -->
            a
          </div>
        </section>
        <Footer/>
    </div>
</template>

<script>
  // import Shoes from './../components/Shoes.vue';
  import NavigationMenu from '../components/NavigationMenu.vue'
  import Footer from '../components/Footer.vue'

  export default {
    name: 'Home',
    created() {
      document.title = 'JordanShoes';
    },
    components: {
      NavigationMenu,
      Footer
    },
    data() {
      return {
        promotion__header: 'Ganhe R$10,00 de desconto no frete.',
      }
    }
  }
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    width: auto;
    font-family: 'Montserrat', sans-serif;
  }
  .container {
    width: 100%;
    height: auto;
  }
  .promotion {
    height: 60px;
    width: 100%;
    background-color: #181818;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .promotion__header {
    font-size: 1rem;
    font-weight: 500;
    color: #f9f9f9;
  }

  header {
    height: 378px;
    width: 100%;
    background-image: url('../assets/header-bg.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: #f6f6f6;
  }
  header::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 378px;
    background: rgb(0, 0, 0, 0.6);
    z-index: 1;
  }
  .header-texts {
    width: 85%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    color: #f9f9f9;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }
  .header__title {
    font-size: 2rem;
  }
  .header__paragraph {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: .5px;
    line-height: 30px;
    width: 50%;
  }
  /* products section */
  .products {
    height: auto;
    width: 85%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 3em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .products__title {
    font-size: 2rem;
    font-weight: 600;
  }

  .products__paragraph {
    margin: 1em 0;
  }
  
  .products-items {
    width: 100%;
  }
</style>