<template>
  <div class="button-container">
    <button @click="sendEmail(products)" class="btn btn-custom btn-sm">Send me a shopping list</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import emailjs from '@emailjs/browser';

export default defineComponent({
  data() {
    return {
      searchQuery: '',
      products: JSON.parse(localStorage.getItem('shoppingLists') || '{}'),
    };
  },
  computed: {
  },

  methods: {
sendEmail(products: string | null) {
    var templateParams = {
  to_name: 'James',
  from_name: 'JBoames',
  to_email: 'marius.viz@gmail.com',
  message: products,
};


      emailjs
        .send('SERVICE-ID', 'TEMPLATE-ID', templateParams, {
          publicKey: 'KEY',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    },

  },
});
</script>

  <style scoped>
  .btn-custom {
  background-color: #398a4c86;
  color: #fff;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.btn-custom:hover {
  background-color: #388e3c;
}
  </style>