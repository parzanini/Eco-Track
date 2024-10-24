<!--Date Created: 24/10/2024-->
<!--Author: K00288477 Gary O'Connor-->

<script setup>

</script>

<template>
<!--  profile card-->
  <section class="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
    <div class="flex flex-col mt-4 mx-2 user-profile">
      <div class="flex flex-wrap gap-5 w-full justify-center mx-2">
        <div class="flex flex-row user-card">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/24ca7cf09a8ca79e7c7fa9ebefe33442ed8607433ac270c6808abd289e2023d6?placeholderIfAbsent=true&apiKey=527389ec12184d8eb640ce74d588a626" alt="User profile picture" class="object-contain shrink-0 max-w-16 rounded-full aspect-square w-[150px] profile-img" />
          <div class="flex flex-col justify-center mx-4 max-md:mt-10 username">
            <h3 class="text-xl text-black my-0">Gary.oconnor94</h3>
            <p class="text-md text-black text-opacity-80">Joined: 11/10/2024</p>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/79f980ec275542a791ab5890f8049f1d94f7e693dff6038fbf19fda1c0f76543?placeholderIfAbsent=true&apiKey=527389ec12184d8eb640ce74d588a626" alt="" class="object-contain max-w-16 aspect-square w-[125px] badge" />
        </div>
      </div>
      <hr class="shrink-0 mt-4 max-w-full h-px border border-black border-solid w-[838px]" />

      <!--  form: personal details-->
      <!--user will be able to update their personal details from here-->
      <h3 class="self-center mt-5 text-2xl text-center text-black">Personal Details</h3>

      <form class="flex flex-wrap justify-center mt-5 text-2xl text-black personal-details">
        <div class="flex flex-col justify-center">
          <div class="py-1.5 pl-1 pr-1 mb-3 ">
            <label for="username" class="text-md">Username:</label>
            <input type="text" id="username" value="gary.oconnor94" class="border-2 border-green-600 border-solid bg-zinc-100 p-3 w-full" />
          </div>

          <div class="py-1.5 pl-1 pr-1 mb-3">
          <label for="email" class="text-md">Email:</label>
            <input type="email" id="email" value="gary.oconnor94@gmail.com" class="border-2 border-green-600 border-solid bg-zinc-100 p-3 w-full" />
          </div>

          <div class="py-1.5 pl-1 pr-1 mb-3">
          <label for="firstName" class="text-md">First Name:</label>
            <input type="text" id="firstName" value="Gary" class="border-2 border-green-600 border-solid bg-zinc-100 p-3 w-full" />
          </div>

          <div class="py-1.5 pl-1 pr-1 mb-3">
          <label for="lastName" class="text-md">Surname:</label>
            <input type="text" id="lastName" value="O'Connor" class="border-2 border-green-600 border-solid bg-zinc-100 p-3 w-full" />
          </div>

          <div class="py-1.5 pl-1 pr-1 mb-3">
          <label for="dob" class="text-md">Date of Birth:</label>
            <input type="text" id="dob" value="26/03/9999" class="border-2 border-green-600 border-solid bg-zinc-100 p-3 w-full" />
          </div>
        </div>

        <hr class="shrink-0 mt-4 max-w-full h-px border border-black border-solid w-[838px]" />

        <div class="flex flex-col self-start mt-5 form-col2">
          <div class="py-1.5 pl-1 pr-1 mb-3">
          <label for="streetNumber" class="text-md">House Number:</label>
            <input type="text" id="streetNumber" value="123" class="border-2 border-green-600 border-solid bg-zinc-100 p-3 w-full" />
          </div>

          <div class="py-1.5 pl-1 pr-1 mb-3">
          <label for="street" class="text-md">Street:</label>
            <input type="text" id="street" value="Fake Street" class="border-2 border-green-600 border-solid bg-zinc-100 p-3 w-full" />
          </div>

          <div class="py-1.5 pl-1 pr-1 mb-3">
          <label for="city" class="text-md">City:</label>
            <input type="text" id="city" value="Limerick" class="border-2 border-green-600 border-solid bg-zinc-100 p-3 w-full" />
          </div>

          <p class="mt-10 text-base max-md:mr-1">
            Note: Your data will only be stored and used for waste tracking purposes, as outlined in our <a href="#" class="text-blue-600">Privacy Policy</a>. Your data will be securely stored and not shared with third parties.
          </p>
          <button type="submit" class="self-end px-16 py-1 my-5 text-base text-center text-white bg-blue-700 rounded-3xl max-md:px-5">
          Update Details
        </button>
        </div>


      </form>
    </div>
  </section>
</template>

<style scoped>

@media (min-width: 1024px) {
  .user-profile {
    width: 100%;
    align-items: center;
    margin-top: 2em;
  }
  .user-card {
    width: 100%;
  }
  .profile-img {
    min-width: 7em;
    flex: 20%;
  }
  .username {
    width: 100%;
    flex: 60%;
  }
  .badge {
    min-width: 7em;
    flex: 20%
  }
  .personal-details {
    display: grid;
    grid-column-gap: 4em;
    grid-template-columns: 1fr 1fr;
    font-size: 1em;
  }
  form hr {
    display: none;
  }
  .form-col2 {
    margin-top: 0;
    margin-bottom: 0.75rem;
  }
}
</style>