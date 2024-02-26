<template>
  <div class="about">
    <h1>Healthy food list</h1>
    <div>
      <form id="search">
        Search <input name="query" v-model="searchQuery" class="search-input">
      </form>

      <div class="tables-container">
        <DemoGrid
          :data="gridData"
          :columns="WholeGrains"
          :filter-key="searchQuery">
        </DemoGrid>

        <DemoGrid
          :data="Vegetables"
          :columns="['Vegetables']"
          :filter-key="searchQuery">
        </DemoGrid>

        <DemoGrid
          :data="Fruits"
          :columns="['fruits']"
          :filter-key="searchQuery">
        </DemoGrid>

        <DemoGrid
          :data="NutsSeedsHealthyFats"
          :columns="['Nuts Seeds Fats']"
          :filter-key="searchQuery">
        </DemoGrid>

        <DemoGrid
          :data="LeanMeatsFishEggs"
          :columns="['Lean Meats Fish Eggs']"
          :filter-key="searchQuery">
        </DemoGrid>

        <DemoGrid
          :data="BeansAndLegumes"
          :columns="['Beans And Legumes']"
          :filter-key="searchQuery">
        </DemoGrid>

        <DemoGrid
          :data="Dairy"
          :columns="['dairy']"
          :filter-key="searchQuery">
        </DemoGrid>

      </div>
    </div>
  </div>
</template>

<script setup>
import DemoGrid from '../components/Grid.vue'
import { ref } from 'vue'

const searchQuery = ref('')
const WholeGrains = ['Whole Grains']
const gridData = [
  { 'Whole Grains': 'Wheat' },
  { 'Whole Grains': 'Wholegrain rice' },
  { 'Whole Grains': 'Quinoa' },
  { 'Whole Grains': 'Farro' },
  { 'Whole Grains': 'Bulgur wheat' },
  { 'Whole Grains': 'Barley' },
  { 'Whole Grains': 'Wholegrain bread' }
]

const Vegetables = [
  { Vegetables: 'Tomatoes' },
  { Vegetables: 'Cucumber' },
  { Vegetables: 'Zucchini' },
  { Vegetables: 'Eggplant' },
  { Vegetables: 'Bell peppers' },
  { Vegetables: 'Carrots' },
  { Vegetables: 'Onions' },
  { Vegetables: 'Garlic' },
  { Vegetables: 'Spinach' },
  { Vegetables: 'Kale' },
  { Vegetables: 'Swiss Chard' },
  { Vegetables: 'Bok Choy' },
  { Vegetables: 'Lettuce' },
  { Vegetables: 'Broccoli' },
  { Vegetables: 'Potatoes' },
  { Vegetables: 'Sweet Potato' },
  { Vegetables: 'Cauliflower' },
  { Vegetables: 'Asparagus' },
  { Vegetables: 'Swiss Chard' },
  { Vegetables: 'Mushrooms' },
]

const Fruits = [
  { fruits: 'Apples' },
  { fruits: 'Oranges' },
  { fruits: 'Grapefruit' },
  { fruits: 'Pomegranates' },
  { fruits: 'Bananas' },
  { fruits: 'Watermelon' },
  { fruits: 'Melon' },
  { fruits: 'Pears' },
  { fruits: 'Peaches' },
  { fruits: 'Strawberries' },
  { fruits: 'Mango' },
  { fruits: 'Pineapple' },
  { fruits: 'Kiwi' },
  { fruits: 'Raspberries' },
  { fruits: 'Blueberries' },
  { fruits: 'Cherries' },
]

const NutsSeedsHealthyFats = [
  { 'Nuts Seeds Fats': 'Almonds' },
  { 'Nuts Seeds Fats': 'Hazelnuts' },
  { 'Nuts Seeds Fats': 'Peanuts' },
  { 'Nuts Seeds Fats': 'Macadamia nuts' },
  { 'Nuts Seeds Fats': 'Cashews' },
  { 'Nuts Seeds Fats': 'Walnuts' },
  { 'Nuts Seeds Fats': 'Pumpkin seeds' },
  { 'Nuts Seeds Fats': 'Sunflower seeds' },
  { 'Nuts Seeds Fats': 'Chia seeds' },
  { 'Nuts Seeds Fats': 'Avocados' },
  { 'Nuts Seeds Fats': 'Olive Oil' },
  { 'Nuts Seeds Fats': 'Peanut Butter' },
  { 'Nuts Seeds Fats': 'nut butters' },
]

const LeanMeatsFishEggs = [
  {'Lean Meats Fish Eggs': 'Chicken' },
  {'Lean Meats Fish Eggs': 'Turkey' },
  {'Lean Meats Fish Eggs': 'Pork' },
  {'Lean Meats Fish Eggs': 'Beef' },
  {'Lean Meats Fish Eggs': 'Salmon' },
  {'Lean Meats Fish Eggs': 'Shrimp' },
  {'Lean Meats Fish Eggs': 'Cod' },
  {'Lean Meats Fish Eggs': 'Oysters' },
  {'Lean Meats Fish Eggs': 'Mussels' },
  {'Lean Meats Fish Eggs': 'Eggs' },
]

const BeansAndLegumes = [
  {'Beans And Legumes': 'Black Beans'},
  {'Beans And Legumes': 'White Beans'},
  {'Beans And Legumes': 'Kidney Beans'},
  {'Beans And Legumes': 'Lentils'},
  {'Beans And Legumes': 'Chickpeas'},
  {'Beans And Legumes': 'Split Peas'},
]

const Dairy = [
  {dairy: 'Milk'},
  {dairy: 'Yogurt'},
  {dairy: 'Greek Yogurt'},
  {dairy: 'Unprocessed Cheese'},
]

</script>

<style>
.about {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tables-container {
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px ;
}

.tables-container > * {
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
