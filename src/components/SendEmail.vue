<template>
    <button @click="sendEmail(products)" class="btn btn-primary btn-sm">Get my Shopping list</button>
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
        .send('service_dv6nmor', 'template_hcoyu0o', templateParams, {
          publicKey: '8v1q8dNG7qmy4iByC',
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
  </style>