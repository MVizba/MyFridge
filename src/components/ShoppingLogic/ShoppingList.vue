<template>
  <div id="shopping-list">
    <main>
      <div class="lists">
        <ul>
          <li v-for="(list, index) in lists" :key="index">
            {{ list }}
            <img src="../icons/delete.svg" alt="Delete" @click="removeList(index)" />
          </li>
        </ul>
      </div>
      <div class="container">
        <input type="text" placeholder="Add product" v-model="currentList" @keyup.enter="addList" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const lists = ref<string[]>([]);
const currentList = ref<string>('');

onMounted(() => {
  const storedLists = localStorage.getItem('shoppingLists');
  if (storedLists) {
    lists.value = JSON.parse(storedLists);
  }
});

const addList = () => {
  if (currentList.value.trim() !== "") {
    lists.value.push(currentList.value);
    currentList.value = "";
    saveListsToLocalStorage();
  }
};

const removeList = (index: number) => {
  lists.value.splice(index, 1);
  saveListsToLocalStorage();
};

const saveListsToLocalStorage = () => {
  localStorage.setItem('shoppingLists', JSON.stringify(lists.value));
};
</script>

<style scoped>
#shopping-list {
  padding-top: 30px;
  display: flex;
  justify-content: center;
  font-family: "Rubik", sans-serif;
}

body {
  background: #313131;
  font-size: 18px;
}

.lists {
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #24593862;
}

.container {
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 10px 0px;
  background: #10602364;
  color: #ffffff;
}

.container input {
  width: 80%;
  padding: 1px 0px;
  outline: none;
  background: transparent;
  border: none;
  color: #ffffff95;
  font-size: 15px;
}

::placeholder {
  color: #aaaaaa;
}

li {
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #aaaaaa;
}

img {
  cursor: pointer;
}
</style>
