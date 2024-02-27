<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import ShoppingIcon from './icons/IconShopping.vue'
import ShoppingList from './ShoppingList.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <ShoppingIcon />
    </template>
    <template #heading>Welcome to "My Fridge"</template>
    Create your shopping list and don't forget to add
    <router-link to="/about">healthy food</router-link>
    to your grocery bag.
    <ShoppingList />
  </WelcomeItem>
</template>
