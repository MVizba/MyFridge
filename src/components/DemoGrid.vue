<script setup lang="ts">
import { ref, computed, defineProps } from 'vue';

interface DataEntry {
  [key: string]: string | number;
}

const props = defineProps<{
  data: DataEntry[];
  columns: string[];
  filterKey: string;
}>()

const sortKey = ref<string>('');
const sortOrders = ref<{ [key: string]: number }>(
  props.columns.reduce((o: { [key: string]: number }, key) => ((o[key] = 1), o), {})
);

const filteredData = computed<DataEntry[]>(() => {
  let { data, filterKey } = props
  if (filterKey) {
    filterKey = filterKey.toLowerCase()
    data = data.filter((row) => {
      return Object.keys(row).some((key) => {
        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
      })
    })
  }
  const key = sortKey.value
  if (key) {
    const order = sortOrders.value[key]
    data = data.slice().sort((a, b) => {
      const aValue = a[key] as string | number;
      const bValue = b[key] as string | number;
      return (aValue === bValue ? 0 : aValue > bValue ? 1 : -1) * order;
    })
  }
  return data
})


function sortBy(key: string) {
  sortKey.value = key
  sortOrders.value[key] *= -1
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<template>
  <table v-if="filteredData.length">
    <thead>
      <tr>
        <th v-for="key in columns"
          :key="key"
          @click="sortBy(key)"
          :class="{ active: sortKey === key }">
          {{ capitalize(key) }}
          <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, index) in filteredData" :key="index">
        <td v-for="(value, key) in entry" :key="key">
          {{ value }}
        </td>
      </tr>
    </tbody>
  </table>
  <p v-else>No matches found.</p>
</template>

<style>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  user-select: none;
}

td {
  background-color: #1b4127;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
