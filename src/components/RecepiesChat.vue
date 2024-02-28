<template>
  <div class="button-container">
    <button @click="getRecipes()" class="btn btn-custom btn-sm">Get Recipes</button>
  </div>
  <div class="response-container" v-if="response">
      <div class="response-item" v-for="(recipe, index) in response" :key="index">
        <h3>{{ recipe.title }}</h3>
        <ul>
          <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
        </ul>
        <p>{{ recipe.instructions }}</p>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { OpenAI } from 'openai';

interface Recipe {
  title: string;
  ingredients: string[];
  instructions: string;
}

const openai = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true })

export default defineComponent({
data() {
  return {
    products: JSON.stringify(JSON.parse(localStorage.getItem('shoppingLists') || '{}')),
      endpoint: "https://api.openai.com/v1/engines/davinci/completions",
      response: [] as Recipe[],
  };
},
computed: {
},

methods: {
  async getRecipes() {

      const completion = await openai.chat.completions.create({
        messages: [
          { role: "system", content: "You are a skilled chef. You will be provided with a list of ingredients. From those ingredients you will need to create return two recipes in JSON response format - [recipes]['title',['ingredients'],'instructions']"},
          { role: "user", content: this.products}
        ],
        model: "gpt-3.5-turbo"
      });

      this.response = JSON.parse(completion.choices[0].message.content || '').recipes;

    },

},
});
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
.response-container {
  display: flex;
  flex-wrap: wrap;
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
</style>
