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
          <h2 class="product-details__model">{{ transformProductTitle(product.model) }}</h2>
          <label class="product-details__price">R$ {{ product.price }}</label>
          <label class="product-details__installment">Parcelamento em até 4x sem juros</label>

          <div class="product-button-container">
            <!-- buy button -->
            <button class="product-button product-button__buy">Comprar Agora</button>

            <!-- add item to cart button -->
            <button class="product-button product-button__add-to-cart">Adicionar ao Carrinho</button>
          </div>

          <div class="shoe-size-container">
            <div class="shoe-size-span-container">
              <span class="shoe-size-span">tamanho</span>
              <span class="shoe-measure-span">Tabelas de medidas</span>
            </div>
            <div class="shoe-size-container">
              <span class="shoe-size" v-for="size in product.sizes" v-bind:key="size"> {{ size }} </span>
            </div>
          </div>
        </div>
      </section>
      <section class="related-products-container">
        <h2 class="related-products__title">Produtos relacionados:</h2>

        <swiper
          :slides-per-view="4"
          :space-between="10"
          navigation
          :pagination="{ clickable: true }"
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
        product: this.findProduct(),
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
        transformProductTitle(productModel) {
          return productModel.split(' ').map((element) => {
            return element.replace(element[0], element[0].toUpperCase());
          }).join(' ');
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

<style>
    :root {
      --swiper-theme-color: #181818;
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

    .products-swiper-container {
      width: 100%;
      height: 200px;
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
      max-width: 65%;
    }
    
    .shoe-size-span-container {
      display: flex;
      justify-content: space-between;
    }

    .shoe-size-container {
      display: inline-grid;
    }

    .shoe-size {
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
</style>