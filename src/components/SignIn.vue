<template>
	<div
		v-if="showModal"
		class="container-signin fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
		@click="closeModal">
		<main
			class="relative flex flex-col text-3xl text-black max-w-[350px] md:max-w-[578px] z-50"
			@click.stop>
			<section
				class="flex flex-col px-8 py-9 w-full bg-white border-black border-solid border-[3px] rounded-[30px] max-md:px-5 max-md:max-w-full">
				<header
					class="flex gap-10 self-center max-w-full text-6xl text-center w-[386px] max-md:text-4xl">
					<img
						loading="lazy"
						src="/imgs/logo/Recycle%20Symbol%20Image.png"
						alt="Sign In Logo"
						class="object-contain shrink-0 max-w-full aspect-[0.97] w-[60px] md:w-[75px]" />
					<h1 class="grow shrink my-auto w-[175px] max-md:text-4xl">Sign In</h1>
				</header>

				<form
					@submit.prevent="handleSubmit"
					class="flex flex-col w-full">
					<span
						v-if="errorMessage"
						class="text-red-600 text-center"
						>{{ errorMessage }}</span
					>
					<label
						for="text"
						class="self-start mt-2 md:mt-6 max-md:ml-2"
						>Email:</label
					>
					<input
						type="email"
						id="email"
						v-model="email"
						required
						class="flex shrink-0 mt-5 border-2 border-green-600 border-solid bg-zinc-300 h-[40px] md:h-[65px] max-md:max-w-full" />

					<label
						for="password"
						class="self-start mt-2 md:mt-6 max-md:ml-0.5"
						>Password:</label
					>
					<input
						type="password"
						id="password"
						v-model="password"
						required
						class="flex shrink-0 mt-5 border-2 border-green-600 border-solid bg-zinc-300 h-[40px] md:h-[65px] max-md:max-w-full" />

					<router-link
						to=""
						class="self-center mt-6 text-2xl"
						tabindex="0">
						Forgotten Password? <span class="text-green-600">Reset Now</span>
					</router-link>

					<button
						type="submit"
						class="self-center px-16 py-4 mt-6 max-w-full text-2xl text-center text-white whitespace-nowrap bg-blue-700 w-[260px] max-md:px-5">
						Submit
					</button>
				</form>

				<p class="self-center mt-3 md:mt-6 max-md:max-w-full text-2xl">
					Don't have an account?
					<router-link
						to=""
						class="text-green-600 hover:underline"
						@click.prevent="$emit('switchToSignUp')"
						tabindex="0"
						>Sign Up</router-link
					>
				</p>
			</section>
		</main>
	</div>
</template>

<script>
	import axios from "axios";
	import UserValidation from "../components/userPortalComponents/userValidation.js";
	const userValidation = new UserValidation();

	export default {
		props: {
			showModal: Boolean,
		},
		data() {
			return {
				email: "",
				password: "",
				errorMessage: "",
			};
		},
		methods: {
			async handleSubmit() {
				// Handle form submission here
				const data = { email: this.email, password: this.password };

				// run validation
				// const validation = userValidation.userLogInValidation(this.email, this.password);
				// console.log(validation)
				// if(!validation.isValid){
				//   // Validation failed
				//   console.log(this.email + ' ' + this.password)
				//   this.errorMessage = validation.message;
				//   return;
				// }

				try {
					const response = await axios.post(
						"http://localhost/CI4-EcoTrack/public/login", data,
						{ headers: { "Content-Type": "application/json" } }
					);
					// get the response data
					const login = response.data;

					if (response.status === 200 && login.user_id) {
						// if not null
						// login successful
						// store the token and id in session
						sessionStorage.setItem("user_id", JSON.stringify(login.user_id));
						sessionStorage.setItem("user_token", JSON.stringify(login.token));

						// Clear the fields
						this.email = "";
						this.password = "";

						// close the sign-in form
						this.$emit("close");
						// redirect to User Portal
						this.$router.push("/");
					} else {
						console.log("Invalid Credentials");
					}
				} catch (e) {
					// handle error
					console.log("Error occurred", e);
				}
			},
			closeModal() {
				this.$emit("close"); // Emit event to parent to close modal
			},
		},
	};
</script>

<style scoped>
	/*.container-signin {
  z-index: 999;
  margin-top: 15em;
  height: 20%;
}*/
</style>
