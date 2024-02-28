<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import ShoppingList from './ShoppingList.vue'
import SendEmail from './SendEmail.vue';
import Recepies from './RecepiesChat.vue'

</script>

<template>
  <WelcomeItem>
    <template #heading>Welcome to "My Fridge"</template>
    <h4>To add product - simple press "Enter", to remove - press "Trash bin" icon.<br>
      To add <router-link to="/about">healthy food</router-link> choose it from a list and press "+" icon.<br>
    To generate a recepies - press "Get Recipes"<br>
  To send me your skopping list - press "Send me a shopping list".</h4>
    <ShoppingList />
  </WelcomeItem>
  <SendEmail />
  <Recepies/>
</template>
