<template>
  <div>
    <v-app :theme="cartStore.getTheme">
      <Header />
      <v-main>
        <v-container>
          <RouterView />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script setup>
import { useCartStore } from './store/cart'
const cartStore = useCartStore()
</script>
