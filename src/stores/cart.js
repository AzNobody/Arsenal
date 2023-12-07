import { defineStore } from 'pinia'

export const useCartArrayStore = defineStore('cart', {
    state: () => ({
        cart: []
    }),
    getters: {
        getCart: (state) => state.cart
    },
    actions: {
        addToCart(gameId) {
            this.cart.push(gameId);
            console.log(`Item with ID ${gameId} added to the cart. Cart contents:`, this.cart);
        },
        removeFromCart(gameId) {
            const index = this.cart.indexOf(gameId)
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
        }
    },
})