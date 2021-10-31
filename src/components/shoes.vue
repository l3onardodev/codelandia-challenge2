<template>
    <div class="items">
        <div class="product-item" v-for="item in $store.state.shoes" :key="item.id" @mouseover="item['hover'] = true" @mouseleave="item['hover'] = false">
            <img :src="item.image" :title="item.model" class="product-item__image">

            <div class="product-item-hovered" v-bind:class="{ opacity1: item['hover'] }">
                <h2 class="product-item-hovered__title">{{ $store.state.transformTitle(item.model) }}</h2>
                <router-link :to="`/product/${item.id}`"><button class="product-item-hovered__button" @click="item['hover'] = false">ver produto</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Shoes',
}

</script>

<style>
    .product-item {
        height: 302px;
        width: 24.5%;
        max-width: 300px;
        background-color: #EBE9EA;
        display: flex;
        border-radius: 2.5px;
        margin: 1em 0;
    }

    .product-item__image {
        width: 100%;
        object-fit: cover;
        object-position: center;
        align-self: center;
    }

    .items {
        display: flex;
        justify-content: space-between;
        flex-wrap:wrap;
    }

    .product-item-hovered {
        position: absolute;
        height: 302px;
        width: 21%;
        max-width: 295px;
        background-color: rgb(0, 0, 0, 0.65);
        color: #f6f6f6;
        opacity: 0;
        transition: all .25s ease;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .product-item-hovered__title {
        text-align: center;
        font-size: 1.1rem;
        font-weight: 600;
        width: 60%;
    }

    .product-item-hovered__button {
        border: 2px solid #f6f6f6;
        background: none;
        color: #f6f6f6;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 0.9rem;
        font-family: inherit;
        font-weight: 600;
        padding: .5em 1em;
        margin: 1em 0;
        transition: all .25s ease;
    }

    .product-item-hovered__button:hover {
        background-color: #f6f6f6;
        color: #181818;
    }

    .opacity1 {
        opacity: 1;
    }

</style>