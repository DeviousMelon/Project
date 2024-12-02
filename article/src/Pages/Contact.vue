<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <p>If you have any questions or feedback, feel free to reach out to us!</p>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Contact',
  setup() {
    const name = ref('');
    const email = ref('');
    const message = ref('');

    const submitForm = () => {
      alert(`Message sent from ${name.value} (${email.value}): ${message.value}`);
      name.value = '';
      email.value = '';
      message.value = '';
    };

    return { name, email, message, submitForm };
  },
};
</script>

<style>
.contact {
  padding: 20px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin: 10px 0 5px;
}

input, textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-top: 10px;
  padding: 10px;
  background-color: #4CAF50; /* Green button */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049; /* Darker green on hover */
}
</style>