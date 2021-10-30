<template>
    <div class="cart">
        <div @mouseover="cartOpenedState = true">
            <font-awesome-icon icon="cart-plus" size="2x" class="cart__icon"/>
        </div>
        <div class="cart-opened" v-if="cartOpenedState" @mouseover="cartOpenedState = true" @mouseleave="cartOpenedState = false">
            <span class="cart-opened__span" v-if="$store.state.cart.length === 0">Nenhum produto no carrinho</span>

            <div class="cart-item" v-for="product in $store.state.cart" :key="product.id">
                <div class="cart-item__content">
                    <img :src="product.image" class="cart-item__content__image">
                    <div class="cart-item__content__details">
                        <h4>{{ $store.state.transformTitle(product.model) }}</h4>
                        <span> {{ product.price }} </span>
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
        display: flex;
        align-items: center;
        height: 100%;
        position: relative;
    }
    
    .cart__icon {
        cursor: pointer;
    }

    /* cart-opened style */

    .cart-opened {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        right: 0;
        bottom: 0;
        width: 350px;
        height: 300px;
        color: #181818;
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 10px 15px rgb(1, 1, 1, 0.5);
        z-index: 3;
        overflow-y: scroll;
        padding: 1em .5em;
    }

    .cart-opened__span {
        text-align: center;
        font-size: 1rem;
        font-weight: 600;
    }

    .cart-item {
        position: relative;
        padding-bottom: 1em;
        cursor: pointer;
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
        padding: 0 1em;
        width: 100%;
    }
</style>