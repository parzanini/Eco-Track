<!--Date Created: 2024-10-28-->
<!--Author: K00288477 Gary O'Connor-->

<script setup>
  import { ref } from 'vue';
  import UserValidation from "../components/userPortalComponents/userValidation.js";
  const userValidation = new UserValidation();

  // State
  const itemDescription = ref('')
  const selectedCategory = ref('')
  const categories = ref([
  'Paper',
  'Plastic',
  'Organic',
  'General Waste',
  'Other'
  ])
  const errorMessage = ref('');


  // Methods
  const submitForm = () => {
    // validate inputs
    const validation = userValidation.userWasteValidation(itemDescription.value, selectedCategory.value);

    if(!validation.isValid){
      errorMessage.value = validation.message;
      return;
    }

    // clear error message
    errorMessage.value = '';


    // send form data to backend

}
</script>

<template>
  <div class=" main-container">
    <div class="container flex flex-col mx-auto w-[90%] mb-4 mt-10">
      <div class="self-start w-[50px]"><img alt="recycling logo" src="/imgs/logo/Recycle%20Symbol%20Image.png"></div>
      <h1 class="self-center text-2xl">Enter Waste Details</h1>
    </div>

    <!-- user waste logger form -->
    <form class="container flex flex-col mx-auto w-[90%] mb-14" @submit.prevent="submitForm">
      <span v-if="errorMessage" class="text-red-600">{{ errorMessage }}</span>
      <div>
        <label class="block text-sm mb-1">Item Description:</label>
        <input
            type="text"
            v-model="itemDescription"
            class="w-full p-2 border-2 border-[#36BA24] focus:outline-none focus:ring-2 focus:ring-green-500 mb-6"
        />
      </div>

      <div>
        <label class="block text-sm mb-2">Category:</label>
        <div class="flex flex-wrap gap-2">
          <label
              v-for="cat in categories"
              :key="cat"
              :class="[
              'px-4 py-2 rounded-[0.5rem] border-600 border-[#36BA24] cursor-pointer border',
              selectedCategory === cat
                ? 'bg-green-500 text-white border-green-500'
                : 'bg-white border-green-200 hover:bg-green-50'
            ]"
          >
            <input
                type="radio"
                name="category"
                :value="cat"
                v-model="selectedCategory"
                class="hidden"
            />
            {{ cat }}
          </label>
        </div>
      </div>
<div class="flex flex-col">
  <button type="submit" class="px-16 py-1 my-5 text-white bg-blue-700 rounded-3xl w-[90%] mx-auto">Log Waste</button>
  <p class="">Note: Recycling more often will help you reach the next milestone</p>
</div>
    </form>

<!--    end of main container-->
  </div>

</template>

<style scoped>

@media (min-width: 1024px){
  .main-container {
    border: 2px solid black;
    border-radius: 4rem;
    width: 40%;
    margin: 4rem auto;
    padding-bottom: 4rem;
  }

}


</style>