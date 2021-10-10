import { createStore } from "vuex";

export default createStore({
    state: {
        shoes: [
            {
                id: 1,
                model: "nike air",
                price: 300,
                description: "tranquilo",
                image: require("../assets/items/1.png"),
                hover: false,
            },
            {
                id: 2,
                model: "nike air",
                price: 300,
                description: "tranquilo",
                image: require("../assets/items/2.png"),
                hover: false,
            },
            {
                id: 3,
                model: "Air Jordan Retro Turbo Green",
                price: 300,
                description: "tranquilo",
                image: require("../assets/items/3.png"),
                hover: false,
            },
            {
                id: 4,
                model: "nike air",
                price: 300,
                description: "tranquilo",
                image: require("../assets/items/4.png"),
                hover: false,
            },
            {
                id: 5,
                model: "nike air",
                price: 300,
                description: "tranquilo",
                image: require("../assets/items/4.png"),
                hover: false,
            },
            {
                id: 6,
                model: "nike air",
                price: 300,
                description: "tranquilo",
                image: require("../assets/items/4.png"),
                hover: false,
            },
            {
                id: 7,
                model: "nike air",
                price: 300,
                description: "tranquilo",
                image: require("../assets/items/4.png"),
                hover: false,
            },
        ],
    },
});