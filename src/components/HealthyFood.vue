<template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Search product..." class="form-control mb-3" />
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Type</th>
          <th>Product</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in filteredProducts" :key="index">
          <td>{{ product.type }}</td>
          <td>{{ product.name }}</td>
          <td>
            <img width="20" height="20" @click="handleButtonClick(product)" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/add--v1.png" alt="add" style="cursor: pointer;" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      searchQuery: '',
      products: [
        { type: 'Whole Grains', name: 'Wheat' },
        { type: 'Whole Grains', name: 'Wholegrain rice' },
        { type: 'Whole Grains', name: 'Quinoa' },
        { type: 'Whole Grains', name: 'Farro' },
        { type: 'Whole Grains', name: 'Bulgur wheat' },
        { type: 'Whole Grains', name: 'Barley' },
        { type: 'Whole Grains', name: 'Wholegrain bread' },
        { type: 'Vegetables', name: 'Tomatoes' },
        { type: 'Vegetables', name: 'Cucumber' },
        { type: 'Vegetables', name: 'Zucchini' },
        { type: 'Vegetables', name: 'Eggplant' },
        { type: 'Vegetables', name: 'Bell peppers' },
        { type: 'Vegetables', name: 'Carrots' },
        { type: 'Vegetables', name: 'Onions' },
        { type: 'Vegetables', name: 'Garlic' },
        { type: 'Vegetables', name: 'Spinach' },
        { type: 'Vegetables', name: 'Kale' },
        { type: 'Vegetables', name: 'Swiss Chard' },
        { type: 'Vegetables', name: 'Bok Choy' },
        { type: 'Vegetables', name: 'Lettuve' },
        { type: 'Vegetables', name: 'Broccoli' },
        { type: 'Vegetables', name: 'Sweet potato' },
        { type: 'Vegetables', name: 'Cauliflower' },
        { type: 'Vegetables', name: 'Asparagus' },
        { type: 'Vegetables', name: 'Swiss Chard' },
        { type: 'Vegetables', name: 'Mushrooms' },
        { type: 'Fruits', name: 'Apples' },
        { type: 'Fruits', name: 'Oranges' },
        { type: 'Fruits', name: 'Grapefruit' },
        { type: 'Fruits', name: 'Pomegranates' },
        { type: 'Fruits', name: 'Bananas' },
        { type: 'Fruits', name: 'Watermelon' },
        { type: 'Fruits', name: 'Melon' },
        { type: 'Fruits', name: 'Pears' },
        { type: 'Fruits', name: 'Peaches' },
        { type: 'Fruits', name: 'Strawberries' },
        { type: 'Fruits', name: 'Mango' },
        { type: 'Fruits', name: 'Pineapple' },
        { type: 'Fruits', name: 'Kiwi' },
        { type: 'Fruits', name: 'Raspberries' },
        { type: 'Fruits', name: 'Cherries' },
        { type: 'Nuts Seeds Fats', name: 'Almonds' },
        { type: 'Nuts Seeds Fats', name: 'Hazelnuts' },
        { type: 'Nuts Seeds Fats', name: 'Peanuts' },
        { type: 'Nuts Seeds Fats', name: 'Macadamia nuts' },
        { type: 'Nuts Seeds Fats', name: 'Cashews' },
        { type: 'Nuts Seeds Fats', name: 'Walnuts' },
        { type: 'Nuts Seeds Fats', name: 'Pumpkin seeds' },
        { type: 'Nuts Seeds Fats', name: 'Sunflower seeds' },
        { type: 'Nuts Seeds Fats', name: 'Chia seeds' },
        { type: 'Nuts Seeds Fats', name: 'Avocados' },
        { type: 'Nuts Seeds Fats', name: 'Olive Oil' },
        { type: 'Nuts Seeds Fats', name: 'Peanut butter' },
        { type: 'Nuts Seeds Fats', name: 'Nut butter' },
        { type: 'Lean Meats Fish Eggs', name: 'Chicken' },
        { type: 'Lean Meats Fish Eggs', name: 'Turkey' },
        { type: 'Lean Meats Fish Eggs', name: 'Pork' },
        { type: 'Lean Meats Fish Eggs', name: 'Beef' },
        { type: 'Lean Meats Fish Eggs', name: 'Salmon' },
        { type: 'Lean Meats Fish Eggs', name: 'Shrimp' },
        { type: 'Lean Meats Fish Eggs', name: 'Cod' },
        { type: 'Lean Meats Fish Eggs', name: 'Oysters' },
        { type: 'Lean Meats Fish Eggs', name: 'Mussels' },
        { type: 'Lean Meats Fish Eggs', name: 'Eggs' },
        { type: 'Beans And Legumes', name: 'Black Beans' },
        { type: 'Beans And Legumes', name: 'White Beans' },
        { type: 'Beans And Legumes', name: 'Kidney Beans' },
        { type: 'Beans And Legumes', name: 'Lentils' },
        { type: 'Beans And Legumes', name: 'Chickpeas' },
        { type: 'Beans And Legumes', name: 'Split Peas' },
        { type: 'Dairy', name: 'Milk' },
        { type: 'Dairy', name: 'Yogurt' },
        { type: 'Dairy', name: 'Greek Yogurt' },
        { type: 'Dairy', name: 'Unprocessed Cheese' },
      ],
    };
  },
  computed: {
    filteredProducts() {
      const query = this.searchQuery.toLowerCase();
      return this.products.filter(product =>
        product.name.toLowerCase().includes(query) || product.type.toLowerCase().includes(query)
      );
    },
  },
  methods: {
    handleButtonClick(product: { type: string; name: string }) {
      const currentLists = localStorage.getItem('shoppingLists');
      let lists = currentLists ? JSON.parse(currentLists) : [];
      lists.push(product.name);
      localStorage.setItem('shoppingLists', JSON.stringify(lists));
      console.log(`Button clicked for product: ${product.name}`);
    },
  },
});
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th, .table td {
  padding: 1px;
  text-align: left;
}

.table th {
  background-color: #4cb765;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #20d27c91;
}

.btn {
  padding: 6px 12px;
}

.form-control {
  width: 20%;
}
</style>
