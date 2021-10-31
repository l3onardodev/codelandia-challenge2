<template>
    <div class="container-general-nav" :class="{ navScrolled : isScrolled }" ref="navBar">
        <transition name="slide" appear>
            <div class="menu-mobile" v-if="mobileMenuOpened">
                <div class="menu-mobile__close">
                    <font-awesome-icon icon="times" size="3x" class="menu-mobile__close__icon" @click="mobileMenuOpened = false"/>
                </div>
                <ul class="menu-mobile__items">
                    <li>home</li>
                    <li>shoes</li>
                    <li>men</li>
                    <li>women</li>
                </ul>
            </div>
        </transition>
        <nav class="nav-container">
            <div class="nav-container__assets">
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

                <div class="nav-container__assets-icons">
                    <div class="nav-menu-mobile">
                        <font-awesome-icon icon="bars" size="2x" @click="mobileMenuOpened = !mobileMenuOpened" style="cursor: pointer;"/>
                    </div>
                    <cart/>
                </div>
            </div>
            <div class="nav-search-bar">
                <font-awesome-icon icon="search" size="1x"/>
                <input type="text" placeholder="Procurar" class="nav-search-bar__input">
            </div>
        </nav>
    </div>
</template>

<script>
import Cart from './Cart.vue';

export default {
    data() {
        return {
            isScrolled: false,
            mobileMenuOpened: false,
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
    .container-general-nav {
        width: 100%;
        background: none;
        color: #181818;
        position: -webkit-sticky; /* Safari */
        position: sticky;
        z-index: 3;
        top: 0;
        transition: background-color .5s;
    }

    .navScrolled {
        background-color: #181818;
        color: #fff;
    }

    .nav-container {
        width: 100%;
        max-width: 1200px;
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
        height: 100%;
    }

    .nav-menu li {
        float: left;
        display: flex;
        align-items: center;
        height: 100%;
        transition: background-color .5s ease;
    }

    .nav-menu li:hover {
        background-color: #181818;
        color: #fff;
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

    .nav-container__assets {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav-container__assets-icons {
        display: flex;
    }

    .nav-menu-mobile {
        padding: 0 1em;
    }

    /* nav assets styles */

    .nav-search-bar {
        display: flex;
        align-items: center;
        background-color: #EBE9EA;
        height: 70%;
        padding: 0 .6em;
        margin: 0 .5em;
    }

    .nav-search-bar__input {
        border: none;
        background: none;
        font-size: 0.8rem;
        margin-left: 1em;
        width: 100%;
    }

    .nav-search-bar__input:focus {
        outline: none;
    }

    .nav-search-bar__icon {
        max-width: 20px;
    }

    /* menu-mobile styles */
    .menu-mobile {
        width: 90vw;
        height: 100vh;
        padding: 1em;

        position: absolute;
        right: 0;
        z-index: 10;

        background-color: #181818;
        color: #fff;

        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        /* align-items: center; */
    }

    .menu-mobile__close {
        width: 100%;
        text-align: right;
    }

    .menu-mobile__close__icon {
        cursor: pointer;
    }

    .menu-mobile__items {
        list-style: none;
        text-align: center;
        padding: .5em 0;
    }

    .menu-mobile__items li {
        color: #f9f9f9;
        font-size: 2.5rem;
        letter-spacing: 8px;
        text-transform: uppercase;

        padding: .5em 0;

        cursor: pointer;
    }

    .menu-mobile__items li:hover, .menu-mobile__items li:focus {
        color: #474747;
    }

    /* enter and leave animations */
    .slide-enter-active {
        transition: all .3s ease-in;
    }
    .slide-leave-active {
        transition: all .3s ease-out;
    }
    .slide-enter-from, .slide-leave-to {
        transform: translateX(400px);
    }

    @media screen and (max-width: 480px) {
        .nav-container {
            height: 120px;
            flex-direction: column;
            padding: 1em 0;
        }

        .nav-container__assets {
            padding: 0 1.5em;
            padding-bottom: 0.5em;
        }

        .nav-search-bar {
            width: 90%;
            height: 45%;
        }

        .nav-menu {
            display: none;
        }
    }

    @media screen and (min-width: 481px) {
        .nav-menu-mobile {
            display: none;
        }
    }

</style>