<template>
  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" @click="closeModal">
    <main class="relative flex flex-col text-3xl text-black max-w-[578px] z-50" @click.stop>
      <section class="flex flex-col px-8 py-10 w-full bg-white border-black border-solid border-[3px] rounded-[30px] max-md:px-5 max-md:max-w-full">
        <header class="flex gap-10 self-center max-w-full text-6xl text-center w-[415px] max-md:text-4xl">
          <img loading="lazy" src="/imgs/logo/Recycle%20Symbol%20Image.png" alt="" class="object-contain shrink-0 max-w-full aspect-[0.97] w-[109px]" />
          <h1 class="grow shrink my-auto w-52 max-md:text-4xl">Sign Up</h1>
        </header>
        <form @submit.prevent="handleSubmit" class="flex flex-col w-full">
          <label for="name" class="self-start mt-16 max-md:mt-10 max-md:ml-0.5">Name:</label>
          <input
              type="text"
              id="name"
              v-model="formData.name"
              class="flex shrink-0 mt-5 border-2 border-green-600 border-solid bg-zinc-300 h-[87px] max-md:max-w-full"
              required
          />

          <label for="email" class="self-start mt-6 max-md:ml-0.5">Email:</label>
          <input
              type="email"
              id="email"
              v-model="formData.email"
              class="flex shrink-0 mt-5 border-2 border-green-600 border-solid bg-zinc-300 h-[87px] max-md:max-w-full"
              required
          />

          <label for="password" class="self-start mt-6 max-md:ml-0.5">Password:</label>
          <input
              type="password"
              id="password"
              v-model="formData.password"
              class="flex shrink-0 mt-5 border-2 border-green-600 border-solid bg-zinc-300 h-[87px] max-md:max-w-full"
              required
          />

          <p class="self-center mt-4 text-2xl">
            Forgotten Password?
            <router-link to="" class="text-green-600" @click.prevent="handleResetPassword">Reset Now</router-link>
          </p>

          <button
              type="submit"
              class="self-center px-16 py-4 mt-10 max-w-full text-2xl text-center text-white whitespace-nowrap bg-blue-700 w-[260px] max-md:px-5"
          >
            Submit
          </button>

          <p class="self-center mt-24 max-md:mt-10 max-md:max-w-full">
            Already have an account?
            <router-link to="" class="text-green-600 hover:underline" @click.prevent="$emit('switchToSignIn')">Sign In</router-link>
          </p>
        </form>
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
      formData: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission
    },
    handleResetPassword() {
      // Handle password reset
    },
    closeModal() {
      this.$emit('close'); // Emit event to parent to close modal
    },
  }
}
</script>
