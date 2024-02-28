<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import ShoppingList from './ShoppingList.vue'
import SendEmail from './SendEmail.vue';
import Recepies from './RecepiesChat.vue'

</script>

<template>
  <WelcomeItem>
    <template #heading>Welcome to "My Fridge"</template>
    Create your shopping list and don't forget to add
    <router-link to="/about">healthy food</router-link>
    to your grocery bag.
    <ShoppingList />
  </WelcomeItem>
  <SendEmail />
  <Recepies/>
</template>
