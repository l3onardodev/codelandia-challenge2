<template>
    <div class="items">
        <div class="product-item" v-for="item in items" :key="item.id" @mouseover="item['hover'] = true" @mouseleave="item['hover'] = false">
            <img v-bind:src="item.image" :title="item.model" class="product-item__image">
            <div class="product-item-hovered" v-bind:class="{ opacity1: item['hover'] }">
                <h2 class="product-item-hovered__title">{{ item.model }}</h2>
                <button class="product-item-hovered__button">ver produto</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [{
                    id: 1,
                    model: 'nike air',
                    price: 300,
                    description: 'tranquilo',
                    image: require('../assets/items/1.png'),
                    hover: false
                },
                {
                    id: 2,
                    model: 'nike naosei',
                    price: 450,
                    description: 'tenis mto bala',
                    image: require('../assets/items/2.png'),
                    hover: false
                },
                {
                    id: 3,
                    model: 'nike pika',
                    price: 500,
                    description: 'tenis mto bala',
                    image: require('../assets/items/3.png'),
                    hover: false
                },
                {
                    id: 4,
                    model: 'nike naosei',
                    price: 450,
                    description: 'tenis mto bala',
                    image: require('../assets/items/4.png'),
                    hover: false
                },
                {
                    id: 5,
                    model: 'nike naosei',
                    price: 450,
                    description: 'tenis mto bala',
                    image: require('../assets/items/5.png'),
                    hover: false
                },
                {
                    id: 6,
                    model: 'nike naosei',
                    price: 450,
                    description: 'tenis mto bala',
                    image: require('../assets/items/6.png'),
                    hover: false
                },
                {
                    id: 7,
                    model: 'nike naosei',
                    price: 450,
                    description: 'tenis mto bala',
                    image: require('../assets/items/7.png'),
                    hover: false
                },
                {
                    id: 8,
                    model: 'nike naosei',
                    price: 450,
                    description: 'tenis mto bala',
                    image: require('../assets/items/8.png'),
                    hover: false
                }]
            }
        }
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
    }

    .opacity1 {
        opacity: 1;
    }
    .product-item-hovered {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .product-item-hovered__title {
        font-size: 1.5rem;
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

</style>