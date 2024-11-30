<script>
	import axios from "axios";

	export default {
		props: {
			showModal: Boolean,
		},
		data() {
			return {
				formData: {
					name: "",
					email: "",
					password: "",
					confirmPassword: "",
				},
				errors: {
					name: "",
					email: "",
					password: "",
					confirmPassword: "",
				},
			};
		},
		methods: {
			validateName() {
				if (!this.formData.name) {
					this.errors.name = "Name is required";
					return false;
				}
				if (this.formData.name.length < 2) {
					this.errors.name = "Name must be at least 2 characters";
					return false;
				}
				this.errors.name = "";
				return true;
			},
			validateEmail() {
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (!this.formData.email) {
					this.errors.email = "Email is required";
					return false;
				}
				if (!emailRegex.test(this.formData.email)) {
					this.errors.email = "Please enter a valid email";
					return false;
				}
				this.errors.email = "";
				return true;
			},
			validatePassword() {
				if (!this.formData.password) {
					this.errors.password = "Password is required";
					return false;
				}
				if (this.formData.password.length < 6) {
					this.errors.password = "Password must be at least 6 characters";
					return false;
				}
				this.errors.password = "";
				return true;
			},
			validateConfirmPassword() {
				if (!this.formData.confirmPassword) {
					this.errors.confirmPassword = "Please confirm your password";
					return false;
				}
				if (this.formData.password !== this.formData.confirmPassword) {
					this.errors.confirmPassword = "Passwords do not match";
					return false;
				}
				this.errors.confirmPassword = "";
				return true;
			},
			async handleSubmit() {
				const isNameValid = this.validateName();
				const isEmailValid = this.validateEmail();
				const isPasswordValid = this.validatePassword();
				const isConfirmPasswordValid = this.validateConfirmPassword();

				if (
					isNameValid &&
					isEmailValid &&
					isPasswordValid &&
					isConfirmPasswordValid
				) {
					// Proceed with form submission
					console.log("Form submitted successfully");
					const data = {
						f_name: this.formData.name,
						email: this.formData.email,
						password: this.formData.password,
					};

					try {
						const response = await axios.post(
							"72.145.1.73:8080/CI4-EcoTrack/public/register",
							data,
							{ headers: { "Content-Type": "application/json" } }
						);

						// Handle successful registration
						if (response.status === 201) {
							alert("Registration successful, please sign in");
							this.$emit("switchToSignIn"); // Switch to Sign-In modal
						} else {
							// Handle unexpected success responses
							alert("Registration failed, please try again");
						}
					} catch (error) {
						if (error.response) {
							// Server responded with a status other than 2xx
							if (error.response.status === 409) {
								alert("Registration failed, email already exists");
							} else {
								alert("Registration failed, please try again");
							}
						} else if (error.request) {
							// Request was made but no response received
							alert("No response from server. Please try again later.");
						} else {
							// Something else triggered the error
							alert("An unexpected error occurred.");
						}

						console.error("Error occurred during registration:", error);
					}
				}
			},
		},
	};
</script>

<template>
	<div
		v-if="showModal"
		class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
		@click="closeModal">
		<main
			class="relative flex flex-col text-3xl text-black max-w-[350px] md:max-w-[578px] z-50 max-h-[750px]"
			@click.stop>
			<section
				class="flex flex-col px-8 py-8 w-full bg-white border-black border-solid border-[3px] rounded-[30px] max-md:px-5 max-md:max-w-full">
				<!-- Header remains the same -->

				<form
					@submit.prevent="handleSubmit"
					class="flex flex-col w-full">
					<label
						for="name"
						class="self-start mt-2 md:mt-6 max-md:ml-0.5"
						>Name:</label
					>
					<input
						type="text"
						id="name"
						v-model="formData.name"
						@blur="validateName"
						class="flex shrink-0 mt-2 border-2 border-green-600 border-solid bg-zinc-300 h-[40px] md:h-[65px] max-md:max-w-full" />
					<span
						v-if="errors.name"
						class="text-red-500 text-sm mt-1"
						>{{ errors.name }}</span
					>

					<label
						for="email"
						class="self-start mt-2 md:mt-6 max-md:ml-0.5"
						>Email:</label
					>
					<input
						type="email"
						id="email"
						v-model="formData.email"
						@blur="validateEmail"
						class="flex shrink-0 mt-2 border-2 border-green-600 border-solid bg-zinc-300 h-[40px] md:h-[65px] max-md:max-w-full" />
					<span
						v-if="errors.email"
						class="text-red-500 text-sm mt-1"
						>{{ errors.email }}</span
					>

					<label
						for="password"
						class="self-start mt-2 md:mt-6 max-md:ml-0.5"
						>Password:</label
					>
					<input
						type="password"
						id="password"
						v-model="formData.password"
						@blur="validatePassword"
						class="flex shrink-0 mt-2 border-2 border-green-600 border-solid bg-zinc-300 h-[40px] md:h-[65px] max-md:max-w-full" />
					<span
						v-if="errors.password"
						class="text-red-500 text-sm mt-1"
						>{{ errors.password }}</span
					>
					<label
						for="confirmPassword"
						class="self-start mt-2 md:mt-6 max-md:ml-0.5"
						>Confirm Password:</label
					>

					<input
						type="password"
						id="confirmPassword"
						v-model="formData.confirmPassword"
						@blur="validateConfirmPassword"
						class="flex shrink-0 mt-5 border-2 border-green-600 border-solid bg-zinc-300 h-[40px] md:h-[65px] max-md:max-w-full" />
					<span
						v-if="errors.confirmPassword"
						class="text-red-500 text-sm mt-1"
						>{{ errors.confirmPassword }}</span
					>

					<button
						type="submit"
						class="self-center px-16 py-4 mt-6 max-w-full text-2xl text-center text-white whitespace-nowrap bg-blue-700 w-[260px] max-md:px-5">
						Submit
					</button>
					<p class="self-center mt-3 md:mt-6 max-md:max-w-full text-2xl">
						Already have an account?
						<router-link
							to=""
							class="text-green-600 hover:underline"
							@click.prevent="$emit('switchToSignIn')"
							>Sign In</router-link
						>
					</p>
				</form>
			</section>
		</main>
	</div>
</template>

<style scoped>
	.text-sm {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
