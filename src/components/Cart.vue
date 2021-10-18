<template>
    <div class="cart">
        <div @mouseover="cartOpenedState = true">
            <img src="../assets/page-nav/cart.png" class="cart__icon">
        </div>
        <div class="cart-opened" v-if="cartOpenedState" @mouseover="cartOpenedState = true" @mouseleave="cartOpenedState = false">
            <span class="cart-opened__span" v-if="$store.state.cart.length === 0">Nenhum produto no carrinho</span>

            <div class="cart-item" v-for="product in $store.state.cart" :key="product.id">
                <div class="cart-item__content">
                    <img :src="product.image" class="cart-item__content__image">
                    <div class="cart-item__content__details">
                        <h3>{{ product.model }}</h3>
                        <label> {{ product.price }} </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cartOpenedState: false
        }
    }
}
</script>

<style scoped>
    .cart {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
    }
    
    .cart__icon {
        max-width: 30px;
        cursor: pointer;
    }

    /* cart-opened style */

    .cart-opened {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 100%;
        right: 0;
        bottom: 0;
        width: 400px;
        height: 100%;
        color: #181818;
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 10px 15px rgb(1, 1, 1, 0.5);
        z-index: 3;
        overflow: hidden;
    }

    .cart-opened__span {
        text-align: center;
        font-size: 1.25rem;
        font-weight: 600;
    }

    .cart-item {
        margin: 1em 0;
    }

    .cart-item__content {
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .cart-item__content__image {
        max-width: 100px;
        object-fit: cover;
    }

    .cart-item__content__details {
        width: 60%;
    }
</style>