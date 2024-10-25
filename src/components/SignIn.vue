<template>
  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" @click="closeModal">
    <main class="relative flex flex-col text-3xl text-black max-w-[578px] z-50" @click.stop>
      <section class="flex flex-col px-8 py-9 w-full bg-white border-black border-solid border-[3px] rounded-[30px] max-md:px-5 max-md:max-w-full">
        <header class="flex gap-10 self-center max-w-full text-6xl text-center w-[386px] max-md:text-4xl">
          <img loading="lazy" src="/imgs/logo/Recycle%20Symbol%20Image.png" alt="Sign In Logo" class="object-contain shrink-0 max-w-full aspect-[0.97] w-[109px]" />
          <h1 class="grow shrink my-auto w-[175px] max-md:text-4xl">Sign In</h1>
        </header>

        <form @submit.prevent="handleSubmit" class="flex flex-col w-full">
          <label for="email" class="self-start mt-11 max-md:mt-10 max-md:ml-2">Email:</label>
          <input
              type="email"
              id="email"
              v-model="email"
              required
              class="flex shrink-0 mt-5 border-2 border-green-600 border-solid bg-zinc-300 h-[87px] max-md:max-w-full"
          />

          <label for="password" class="self-start mt-5 max-md:ml-0.5">Password:</label>
          <input
              type="password"
              id="password"
              v-model="password"
              required
              class="flex shrink-0 mt-5 border-2 border-green-600 border-solid bg-zinc-300 h-[87px] max-md:max-w-full"
          />

          <router-link to="" class="self-center mt-6 text-2xl" tabindex="0">
            Forgotten Password? <span class="text-green-600">Reset Now</span>
          </router-link>

          <button
              type="submit"
              class="self-center px-16 py-4 mt-8 max-w-full text-2xl text-center text-white whitespace-nowrap bg-blue-700 w-[260px] max-md:px-5"
          >
            Submit
          </button>
        </form>

        <p class="self-center mt-32 max-md:mt-10 max-md:max-w-full">
          Don't have an account?
          <router-link to="" class="text-green-600 hover:underline" @click.prevent="$emit('switchToSignUp')" tabindex="0">Sign Up</router-link>
        </p>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    showModal: Boolean
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission here
    },
    closeModal() {
      this.$emit('close'); // Emit event to parent to close modal
    }
  }
};
</script>
