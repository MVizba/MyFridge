<template>
  <div class="button-container">
    <button @click="fetchRecipes" class="btn btn-custom btn-sm">Get Recipes</button>
  </div>
  <div class="response-container" v-if="recipes.length">
    <div class="response-item" v-for="(recipe, index) in recipes" :key="index">
      <h3>{{ recipe.title }}</h3>
      <ul>
        <li v-for="(ingredient, ingredientIndex) in recipe.ingredients" :key="ingredientIndex">{{ ingredient }}</li>
      </ul>
      <p>{{ recipe.instructions }}</p>
    </div>
  </div>
  <div v-if="loading" class="loading-message">Loading recipes...</div>
  <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { OpenAI } from 'openai';

interface Recipe {
  title: string;
  ingredients: string[];
  instructions: string;
}

const openai = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

const recipes = ref<Recipe[]>([]);
const products = ref<string>(JSON.stringify(JSON.parse(localStorage.getItem('shoppingLists') || '{}')));
const loading = ref(false);
const errorMessage = ref('');

const fetchRecipes = async () => {
  loading.value = true;
  errorMessage.value = '';

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a skilled chef. You will be provided with a list of ingredients. From those ingredients you will need to create return two recipes in JSON response format - [recipes]['title',['ingredients'],'instructions']"},
        { role: "user", content: products.value }
      ],
      model: "gpt-3.5-turbo"
    });

    recipes.value = JSON.parse(completion.choices[0].message.content || '').recipes;
  } catch (error) {
    errorMessage.value = 'Failed. Please try again.';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.response-container {
  display: flex;
  flex-wrap: wrap;
}

.response-item {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}

.button-container {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.btn-custom {
  background-color: #398a4c86;
  color: #fff;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 20px;
}

.btn-custom:hover {
  background-color: #388e3c;
}

.loading-message {
  text-align: center;
  margin-top: 20px;
  color: rgb(146, 212, 146);
}

.error-message {
  color: rgba(215, 44, 44, 0.785);
  text-align: center;
  margin-top: 20px;
}
</style>
