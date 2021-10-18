<template>
  <div class="container">
      <navigation-menu/>

      <!-- container for displaying image and details of product -->
      <section class="product-container">
        <div class="product-container-image" @mousemove="imageZoomOnHoverEntry($event)" @mouseleave="imageZoomOnHoverLeft">
          <img :src="product.image" class="product__image">
        </div>
        <div class="product-container-details">
          <h2 class="product-details__model">{{ transformProductTitle(product.model) }}</h2>
          <label class="product-details__price">R$ {{ product.price }}</label>
          <label class="product-details__installment">Parcelamento em até 4x sem juros</label>

          <div class="product-button-container">
            <!-- buy button -->
            <button class="product-button product-button__buy">Comprar Agora</button>

            <!-- add item to cart button -->
            <button class="product-button product-button__add-to-cart" @click="addProductToCart(product)">Adicionar ao Carrinho</button>
          </div>

          <div class="shoe-size-container">
            <div class="shoe-size-span-container">
              <span class="shoe-size-span">tamanho</span>
              <span class="shoe-measure-span">Tabelas de medidas</span>
            </div>
            <div class="shoe-size">
              <span class="shoe-size-item" v-for="size in product.sizes" v-bind:key="size"> {{ size }} </span>
            </div>
          </div>
        </div>
      </section>
      <section class="related-products-container">
        <h2 class="related-products__title">Produtos relacionados:</h2>

        <swiper
          :slides-per-view="4"
          :autoplay="{ delay: 3000 }"
          :navigation="{ clickable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          ref="mySlider"
          class="products-swiper-container">

          <swiper-slide style="products-swiper__item" v-for="product in $store.state.shoes" v-bind:key="product">
            <div class="swiper-product">
              <div class="swiper-product-image">
                <img :src="`${product.image}`">
              </div>
              <span class="swiper-product__title">{{ transformProductTitle(product.model) }}</span>
              <span class="swiper-product__section">{{ product.section }}</span>
              <span class="swiper-product__price">{{ product.price }}</span>
            </div>
          </swiper-slide>
        </swiper>
      </section>
  </div>
</template>

<script>
  import NavigationMenu from '../components/NavigationMenu.vue';

  import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import "swiper/swiper-bundle.min.css";
  // import "swiper/components/navigation/navigation.css";
  // import "swiper/components/pagination/pagination.css";

  SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

  export default {
    data() {
      return {
        product: this.findProduct(),
        }
      },
      components: {
        Swiper,
        SwiperSlide,
        NavigationMenu
      },
      methods: {
        findProduct() {
          if(this.$store.state.shoes.find((element) => element.id == this.$route.params.id)) {
            return this.$store.state.shoes.find((element) => element.id == this.$route.params.id);
          } else {
            //todo: redirects it to "product not found" special page
            this.$router.push('/');
            return;
          }
        },

        transformProductTitle(productModel) {
          return productModel.split(' ').map((element) => {
            return element.replace(element[0], element[0].toUpperCase());
          }).join(' ');
        },

        addProductToCart(product) {
          console.log('adicionado');
          return this.$store.state.cart.push(product);
        },

        imageZoomOnHoverEntry(event) {
          const general_area = document.querySelector('.product-container-image');

          const image_area = document.querySelector('.product__image');

          let clientX = event.clientX - general_area.offsetLeft;
          let clientY = event.clientY - general_area.offsetTop;

          const mWidth = general_area.offsetWidth;
          const mHeight = general_area.offsetHeight;

          clientX = clientX / mWidth * 100;
          clientY = clientY / mHeight * 100;

          image_area.style.transform = `translate(-${clientX}%, -${clientY}%) scale(2)`;
        },

        imageZoomOnHoverLeft() {
          const image_area = document.querySelector('.product__image');
          image_area.style.transform = 'translate(-50%, -50%) scale(1)'
        }
      },
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
        };
      },
  }
</script>

<!-- global styles for swiper buttons -->
<style>
    .swiper-button-next, .swiper-button-prev{
      color: #181818;
    }
</style>

<style scoped>
    /* a way to change swiper's buttons colors */
    :root {
      --swiper-theme-color: #181818;
      --swiper-navigation-color: #181818;
    }

    .product-container {
      width: 85%;
      height: auto;
      display: flex;
      flex-direction: row;
      padding: 4em;
      margin: 0 auto;
    }

    .product-container-image {
      width: 70%;
      height: 400px;
      overflow: hidden;
      background-color: #EBE9EA;
    }

    .product__image {
      max-width: 100%;
      max-height: 100%;
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .product-container-details {
      display: flex;
      flex-direction: column;
      width: 40%;
      padding: 0 1em;
    }

    .product-details__model {
      font-size: 2.4rem;
      font-weight: 400;
    }

    .product-details__price {
      font-weight: 700;
      font-size: 1.5rem;
      margin: 0.3em 0;
    }

    .product-details__installment {
      font-size: .9rem;
    }

    /* product buttons  */
    
    .product-button {
      width: 100%;
      height: 60px;
      border-radius: 30px;
      border: none;

      color: #f6f6f6;
      margin: .5em 0;
      font-size: 1rem;

      cursor: pointer;
    }

    .product-button__buy  {
      background-color: #181818;
      transition: all .5s;
    }

    .product-button__add-to-cart {
      background: none;
      color: #181818;
      border: 1px solid #ccc;
    }

    /* related products container */
    .related-products-container {
      display: flex;
      flex-direction: column;
      width: 85%;
      margin: 0 auto;
    }

    .related-products__title {
      font-weight: 500;
    }

    /* swiper styles */

    .swiper-button-next {
      right: 0;
    }

    .swiper-wrapper {
      padding: 0 3em;
    }

    .products-swiper-container {
      width: 100%;
      height: 350px;
      margin: 2em 0;
    }

    .swiper-slide {
      display: flex;
      align-items: center;
    }

    .swiper-product {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0 .5em;
    }

    .swiper-product-image {
      display: flex;
      justify-content: center;
      background-color: #ebe9eab7;
      height: 75%;
      width: 100%;
    }

    .swiper-product-image img {
      object-fit: contain;
      max-width: 100%;
      transition: all .25s ease;
    }

    .swiper-product__title {
      font-size: 0.9rem;
      font-weight: 600;
      margin: 1em 0;
    }

    .swiper-product__section {
      font-size: 0.9rem;
      font-weight: 400;
    }

    .swiper-product__price {
      font-weight: 500;
    }
    
    .shoe-size-span-container {
      display: flex;
      justify-content: space-between;
    }

    .shoe-size {
      display: grid;
    }

    .shoe-size-item {
      display: flex;
      justify-content: center;
      padding: 1em;
      width: 50%;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 5px;
      color: #181818;
    }

    .shoe-size-span-container {
      margin: 1em 0;
    }

    .shoe-size-span {
      font-weight: 700;
      font-size: 0.9rem;
      color: #8d8d8d;
      text-transform: uppercase;
    }

    .shoe-measure-span {
      font-size: 0.9rem;
      font-weight: 700;
      color: #181818;
    }

    /* hover effects */
    .swiper-product:hover .swiper-product-image img{
      transform: scale(1.03);
    }
    
</style>