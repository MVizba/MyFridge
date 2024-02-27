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
            <button @click="handleButtonClick(product)" class="btn btn-primary btn-sm">Add</button>
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
