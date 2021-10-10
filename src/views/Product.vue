<template>
  <div class="container">
      <div class="website-title">
          <h2 class="website-title__header">JordanShoes</h2>
      </div>

      <!-- container for displaying image and details of product -->
      <section class="product-container">
        <div class="product-container-image">
          <img :src="product.image" class="product__image">
        </div>
        <div class="product-container-details">
          <h2 class="product-details__model">{{ product.model }}</h2>
          <label class="product-details__price">R${{ product.price }}</label>
          <p class="product-details__description">{{ product.description }}</p>

          <!-- buy button -->
          <button class="product-button product-button__buy">Comprar Agora</button>

          <!-- add item to cart button -->
          <button class="product-button product-button__add-to-cart">Adicionar ao Carrinho</button>
        </div>
      </section>
      <section>
        <swiper
          :slides-per-view="4"
          :space-between="20"
          navigation
          :pagination="{ clickable: false }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          ref="mySlider"
          class="products-swiper-container">

          <swiper-slide style="products-swiper__item" v-for="product in $store.state.shoes" v-bind:key="product">
            <img :src="`${product.image}`">
          </swiper-slide>
        </swiper>
      </section>
  </div>
</template>

<script>
  import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import "swiper/swiper-bundle.min.css";
  // import "swiper/components/navigation/navigation.css";
  // import "swiper/components/pagination/pagination.css";

  SwiperCore.use([Navigation, Pagination, A11y]);

  export default {
    data() {
      return {
        product: this.findProduct()
        }
      },
      components: {
        Swiper,
        SwiperSlide,
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

<style>
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
      background-color: #EBE9EA;
    }

    .product__image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    .product-container-details {
      display: flex;
      flex-direction: column;
      width: 40%;
      padding: 1em;
    }

    .product-details__model {
      font-size: 3rem;
      font-weight: 400;
    }

    .product-details__price {
      font-weight: 600;
      font-size: 1.5rem;
    }

    /* product buttons  */
    
    .product-button {
      width: 100%;
      height: 50px;
      border-radius: 15px;
      border: none;

      color: #f6f6f6;
      margin: .5em 0;
      font-size: 1rem;

      cursor: pointer;
    }

    .product-button__buy  {
      background-color: #181818;
    }

    .product-button__add-to-cart {
      background: none;
      color: #181818;
      border: 1px solid #ccc;
    }

    /* products swiper container */
    .products-swiper-container {
      width: 85%;
      height: 200px;
      margin: 0 auto;
    }

    .swiper-wrapper {
      padding: 0 3em;
    }

    .swiper-slide {
      display: flex;
      align-items: center;
    }

    .swiper-slide img {
      /* height: 100%; */
      transform: scale(1.25);
      width: 80%;
    }
</style>