<template>
    <div>
        <v-row class="my-5">
            <v-col cols="12">
                <v-btn @click="grid = !grid" :class="{ 'bg-primary': grid }">
                    <v-icon>
                        mdi-view-list
                    </v-icon>
                </v-btn>
                <v-btn @click="grid = !grid" :class="{ 'bg-primary': !grid }" class="ml-3">
                    <v-icon>
                        mdi-apps
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-row v-show="grid">
                    <v-col v-for="(product, i) in products" :key="i" sm="6" lg="4" cols="12">
                        <v-card class="mx-auto pb-2">
                            <v-img :src="product.imageUrl" height="200px" cover>
                                <template v-slot:placeholder>
                                    <v-row align="center" class="fill-height ma-0" justify="center">
                                        <v-progress-circular color="grey lighten-5" indeterminate></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                            <v-card-title class="text-capitalize">{{ product.name }}</v-card-title>
                            <v-card-subtitle>${{ product.price }}</v-card-subtitle>
                            <v-card-actions>
                                <v-btn color="primary"> Read More </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn class="bg-error" @click="cartStore.addToCart(product.id)">
                                    Add to Cart
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row v-show="!grid" v-for="(product, i) in products" :key="i">
                    <v-col cols="4">
                        <v-img :src="product.imageUrl" height="200px" cover>
                            <template v-slot:placeholder>
                                <v-row align="center" class="fill-height ma-0" justify="center">
                                    <v-progress-circular color="grey lighten-5" indeterminate></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                    </v-col>
                    <v-col cols="12" md="8">
                        <v-card-title class="text-capitalize">
                            {{ product.name }}
                        </v-card-title>

                        <v-card-subtitle> ${{ product.price }} </v-card-subtitle>
                        <v-card-text>
                            Features:
                        </v-card-text>
                        <v-card-subtitle v-for="(feature, i) in product.features" :key="i">
                            {{ feature }}</v-card-subtitle>
                        <v-card-actions>
                            <v-btn color="primary"> Read More </v-btn>
                            <v-btn class="ml-2 bg-error" @click="cartStore.addToCart(product.id)">
                                Add to Cart
                            </v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

    </div>
</template>
<script setup>
import data from "../data.json";
import { useCartStore } from "../store/cart";
const products = ref(data.products.phones);
const grid = ref(true);
const cartStore = useCartStore()
</script>