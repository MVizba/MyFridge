<template>
  <div class="button-container">
    <button @click="sendEmail(products)" class="btn btn-custom btn-sm">Send me a shopping list</button>
  </div>
  <div v-if="messageSent" class="message success">Message sent!</div>
  <div v-if="errorMessage" class="message error">{{ errorMessage }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import emailjs from '@emailjs/browser';

export default defineComponent({
  data() {
    return {
      searchQuery: '',
      products: JSON.parse(localStorage.getItem('shoppingLists') || '{}'),
      messageSent: false,
      errorMessage: '',
    };
  },
  methods: {
    sendEmail(products: string | null) {
      var templateParams = {
        to_name: 'James',
        from_name: 'Bond',
        to_email: 'nobadycare@gmail.com',
        message: products,
      };

      emailjs
        .send(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, templateParams, {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        })
        .then(
          () => {
            this.messageSent = true;
            setTimeout(() => {
              this.messageSent = false;
            }, 2000);
          },
          (error) => {
            console.log('FAILED...', error.text);
            this.errorMessage = 'Failed to send. Please try again.';
            setTimeout(() => {
              this.errorMessage = '';
            }, 2000);
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

.message {
  text-align: center;
  margin-top: 10px;
  padding: 5px;
}

.success {
  color: rgb(146, 212, 146);
}

.error {
  color: rgba(215, 44, 44, 0.785);
}
</style>
