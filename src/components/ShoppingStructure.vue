<script setup lang="ts">
import ShoppingList from './ShoppingList.vue'
import SendEmail from './SendEmail.vue';
import Recepies from './RecepiesChat.vue';
</script>

<template>
  <div class="item">
    <div class="details">
      <h3>Welcome to "My Fridge"</h3>
      <h4>
        To add a product, simply press "Enter". To remove, press the "Trash bin" icon. <br>
        To add <router-link to="/healthyFood">healthy food</router-link>, choose it from the list and press the "+" icon.
        To generate recepies press "Get recepies",
        To send me your shopping list, press "Send me a Shopping list"
      </h4>
      <ShoppingList />
      <div class="centered-text">You can send me your shopping list or get random recipes from your products</div>
    </div>
  </div>
  <SendEmail />
  <Recepies />
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  text-align: center;
}

.details {
  flex: 1;
  margin-left: 1rem;
  max-width: 600px;
}

.centered-text {
  margin-top: 1rem;
  text-align: center;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
  text-align: center;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
