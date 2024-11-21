<template>
  <section class="w-full pb-8">
    <h2 class="text-6xl font-extrabold text-center text-black p-2">
      Contact Us
    </h2>
    <hr class="border-b-4 border-black w-1/2 mx-auto" />
    <h3 class="text-center text-4xl p-2">We would love to hear from you...</h3>

    <form
      @submit.prevent="handleSubmit"
      class="flex flex-col w-4/5 text-3xl font-medium text-black bg-green-600 bg-opacity-10 p-8 justify-center items-center mx-auto mt-10 rounded-xl"
    >
      <div v-if="errorMessage" class="error-message text-red-500 mb-4 text-xl">
        {{ errorMessage }}
      </div>
      <div class="flex w-full md:flex-row flex-col p-4">
        <label for="name" class="text-center mr-4 md:w-1/6 w-full p-2 md:p-0"
          >Name:</label
        >
        <input
          type="text"
          id="name"
          v-model="name"
          name="name"
          class="bg-white rounded-xl h-12 w-full md:mx-4 px-4"
        />
      </div>

      <div class="flex w-full md:flex-row flex-col p-4">
        <label for="email" class="text-center mr-4 md:w-1/6 w-full p-2 md:p-0"
          >Email:</label
        >
        <input
          type="text"
          id="email"
          v-model="email"
          name="email"
          class="bg-white rounded-xl h-12 w-full md:mx-4 px-4"
        />
      </div>

      <div class="flex w-full md:flex-row flex-col p-4">
        <label for="message" class="text-center mr-4 md:w-1/6 w-full p-2 md:p-0"
          >Message:</label
        >
        <textarea
          id="message"
          v-model="message"
          name="message"
          class="bg-white rounded-xl w-full h-36 md:mx-4 p-4"
        ></textarea>
      </div>

      <button
        type="submit"
        class="px-16 pt-3.5 pb-7 mt-8 max-w-full text-3xl font-extrabold text-black whitespace-nowrap rounded-xl border border-solid bg-green-600 bg-opacity-30 border-green-600 border-opacity-30 w-[294px] max-md:px-5 hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600"
      >
        SUBMIT
      </button>
    </form>

    <!-- Modal for success message -->
    <div
      v-if="showModal"
      class="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div
        class="modal-content bg-white text-center p-8 rounded-lg shadow-lg w-3/4 max-w-md"
      >
        <p class="text-2xl font-semibold mb-4 text-green-600">
          Message sent successfully!
        </p>
        <button
          @click="closeModal"
          class="px-6 py-2 mt-4 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
        >
          OK
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";

const name = ref("");
const email = ref("");
const message = ref("");
const showModal = ref(false);
const errorMessage = ref("");

const handleSubmit = async () => {
  errorMessage.value = "";

  if (!name.value || !email.value || !message.value) {
    errorMessage.value = "Please fill in all fields.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    errorMessage.value = "Please enter a valid email address.";
    return;
  }

  // data to be sent to the backend
  const formData ={
    name: name.value,
    email: email.value,
    message: message.value,
  }; 

  try{
    //api call to send email
      const response = await axios.post('http://localhost:8081/CI4-EcoTrack/public/contact/handleContact', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data.message); // outputs 'sent successfully'
    showModal.value = true;

      name.value = "";
      email.value = "";
      message.value = "";
    } catch (error){
      //handle errors
      errorMessage.value = "Error. Please try again.";
      //console.error(errorMessage);
}};


const closeModal = () => {
  showModal.value = false;
};
</script>
