<template>
    <div class="container-general-nav" :class="{ navScrolled : isScrolled }" ref="navBar">
        <nav class="nav-container">
            <div class="nav-title">
                <h2 class="nav-title__header">JordanShoes</h2>
            </div>
            <ul class="nav-menu">
                <li>
                    <router-link to="/" class="router-link-formatation"><a href="" class="nav-menu__link">Home</a></router-link>
                </li>
                <li>
                    <a href="" class="nav-menu__link">Shoes</a>
                </li>
                <li>
                    <a href="" class="nav-menu__link">Boys</a>
                </li>
                <li>
                    <a href="" class="nav-menu__link">Women</a>
                </li>
            </ul>
            <div class="nav-assets">
                <div class="nav-assets__search-bar">
                    <input type="text" placeholder="Procurar" class="nav-assets__search-bar__input">
                    <img src="../assets/page-nav/search.png" class="nav-assets__search-bar__icon">
                </div>
                <div class="nav-assets__favorite-products">
                    <img src="../assets/page-nav/heart.png" class="nav-assets__icon">
                </div>
                <cart/>
            </div>
        </nav>
    </div>
</template>

<script>
import Cart from './Cart.vue';

export default {
    data() {
        return {
            isScrolled: false
        }
    },
    components: {
        Cart,
    },
    //mounted is executed when the component is added to the DOM. It is mostly used to fetch data from an api that will be used in this compontent.
    mounted() {
        window.addEventListener('scroll', this.setIsScrolled, { passive: true });
        this.setIsScrolled();
    },
    
    methods: {
        setIsScrolled() {
            //isScrolled when the navBar container becomes fixed.
            this.isScrolled = this.$refs.navBar.getBoundingClientRect().top === 0;
        }
    }
}
</script>

<style scoped>
    @keyframes teste {
        from {
            transform: translateY(-50px);
        } to {
            transform: translateY(0);
        }
    }

    @keyframes teste2 {
        from {
            background: #181818;
            color: #fff;
        } to {
            background: none;
            color: #181818;
        }
    }

    .container-general-nav {
        width: 100%;
        background: none;
        color: #181818;
        transition: all .25s ease;
        position: -webkit-sticky; /* Safari */
        position: sticky;
        z-index: 3;
        top: 0;
    }

    .navScrolled {
        /* animation: teste .3s ease-in-out; */
        background-color: #181818;
        color: #fff;
    }

    .nav-container {
        width: 90%;
        height: 50px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .nav-title__header {
        font-weight: 700;
        font-size: 1.2rem;
        text-transform: uppercase;
    }

    .nav-menu {
        list-style: none;
    }

    .nav-menu li {
        float: left;
    }

    .nav-menu__link {
        text-decoration: none;
        font-weight: 500;
        color: inherit;

        margin: 0 1em;

        text-transform: uppercase;
    }

    .router-link-formatation {
        text-decoration: none;
        color: inherit;
    }

    /* nav assets styles */

    .nav-assets {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .nav-assets__search-bar {
        display: flex;
        align-items: center;
        background-color: #EBE9EA;
        height: 70%;
        padding: 0 .6em;
    }

    .nav-assets__search-bar__input {
        border: none;
        background: none;
        font-size: 0.8rem;
    }

    .nav-assets__search-bar__input:focus {
        outline: none;
    }

    .nav-assets__search-bar__icon {
        max-width: 20px;
    }

    .nav-assets__icon {
        max-width: 30px;
    }

</style>