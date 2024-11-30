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
					<label
						for="text"
						class="self-start mt-2 md:mt-6 max-md:ml-2"
						>Email:</label
					>
					<input
						type="email"
						id="email"
						v-model="email"
						class="flex shrink-0 mt-5 border-2 border-green-600 border-solid bg-zinc-300 h-[40px] md:h-[65px] max-md:max-w-full" />
					<span
						v-if="errorMessageEmail"
						class="text-red-600 text-center"
						>{{ errorMessageEmail }}</span
					>
					<label
						for="password"
						class="self-start mt-2 md:mt-6 max-md:ml-0.5"
						>Password:</label
					>
					<input
						type="password"
						id="password"
						v-model="password"
						class="flex shrink-0 mt-5 border-2 border-green-600 border-solid bg-zinc-300 h-[40px] md:h-[65px] max-md:max-w-full" />
					<span
						v-if="errorMessagePassword"
						class="text-red-600 text-center"
						>{{ errorMessagePassword }}</span
					>
					<span
						v-if="errorMessageLogin"
						class="text-red-600 text-center">
						{{ errorMessageLogin }}
					</span>

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
				errorMessageEmail: "",
				errorMessagePassword: "",
				errorMessageLogin: "",
			};
		},
		methods: {
			async handleSubmit() {
				// Clear error messages
				this.errorMessageEmail = "";
				this.errorMessagePassword = "";
				// Validate email and password
				const validation = userValidation.userLogInValidation(
					this.email,
					this.password
				);

				// Check validation result
				if (!validation.isValid) {
					if (validation.errorType === "email") {
						this.errorMessageEmail = validation.message;
					} else if (validation.errorType === "password") {
						this.errorMessagePassword = validation.message;
					}
					return;
				}

				// Handle form submission here
				const data = { email: this.email, password: this.password };
				try {
					const response = await axios.post(
						"https://72.145.1.73:8080/CI4-EcoTrack/public/login",
						data
					);
					const login = response.data;

					if (response.status === 200 && login.user_id) {
						// Store values directly without JSON.stringify
						sessionStorage.setItem("user_name", login.user_name);
						sessionStorage.setItem("user_token", login.token);
						sessionStorage.setItem("user_id", login.user_id);
						console.log("Login successful", login);
						console.log(sessionStorage.getItem("user_name"));
						console.log(sessionStorage.getItem("user_token"));
						console.log(sessionStorage.getItem("user_id"));

						this.email = "";
						this.password = "";
						this.$emit("close");
						this.$router.push("/");
						// Reload the page to update the navbar
						window.location.reload();
					}
				} catch (e) {
					this.errorMessageLogin = "Invalid email or password"; // Set login error message
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
