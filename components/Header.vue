<template>
    <v-app-bar>
        <v-toolbar-title class="toolbar" @click="$router.push('/')">
            Shopping Website
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="text-none" stacked @click="$router.push('/cart')">
            <v-badge :content="cartStore.cartCount" color="error">
                <v-icon>
                    mdi-cart-outline
                </v-icon>
            </v-badge>
        </v-btn>

        <v-btn :prepend-icon="cartStore.getTheme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
            @click="cartStore.toggleTheme()">
        </v-btn>
    </v-app-bar>
</template>
<script setup>
import { useCartStore } from '@store/cart'

const cartStore = useCartStore()
</script>
<style scoped>
.toolbar {
    cursor: pointer;
}
</style>