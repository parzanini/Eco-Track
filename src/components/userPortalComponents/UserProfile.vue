<!--Date Created: 24/10/2024-->
<!--Author: K00288477 Gary O'Connor-->

<script setup>
	import { ref } from "vue";
	import axios from "axios";

	// Reactive data
	const formData = ref({
		username: "",
		email: "",
		f_name: "",
		l_name: "",
		dob: "",
		streetNumber: "",
		street: "",
		city: "",
	});
	const dateCreated = ref("");

	// State management
	const validationErrors = ref({});
	const apiMessage = ref("");
	const isSubmitting = ref(false);

	const userId = JSON.parse(sessionStorage.getItem("user_id"));
	console.log(userId);

	// Fetch user details
	const getUserDetails = async () => {
		try {
			const response = await axios.get(
				`http://72.145.1.73:8080/CI4-EcoTrack/public/viewProfile/${userId}`
			);
			const user = response.data;

			formData.value = {
				username: user.username || "",
				email: user.email || "",
				f_name: user.f_name || "",
				l_name: user.l_name || "",
				streetNumber: user.houseNumber || "",
				street: user.street || "",
				city: user.city || "",
			};

			dateCreated.value = user.date_created || "";
		} catch (error) {
			console.error("Error fetching user details:", error);
		}
	};
	getUserDetails();

	const updateUserDetails = async () => {
		isSubmitting.value = true;
		validationErrors.value = {};
		apiMessage.value = "";

		try {
			const response = await axios.put(
				`http://72.145.1.73:8080/CI4-EcoTrack/public/updateProfile/${userId}`,
				formData.value
			);
			apiMessage.value = response.data.message;
		} catch (error) {
			if (error.response?.status === 400) {
				// Log the full error response for debugging
				console.log("Full error response:", error.response);

				// Extract validation errors
				validationErrors.value = error.response.data?.errors || {};
				console.log("Validation errors:", validationErrors.value);
				apiMessage.value =
					"Validation failed. Please correct the errors above.";
			} else {
				apiMessage.value =
					error.response?.data?.message ||
					"An error occurred while updating details.";
			}
			console.error("Error updating user details:", error);
		} finally {
			isSubmitting.value = false;
		}
	};
</script>

<template>
	<!-- Profile card and form -->
	<section class="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
		<div class="flex flex-col mt-4 mx-2 user-profile">
			<!-- User Card -->
			<div class="flex flex-wrap gap-5 w-full justify-center mx-2">
				<div class="flex flex-row user-card">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/24ca7cf09a8ca79e7c7fa9ebefe33442ed8607433ac270c6808abd289e2023d6?placeholderIfAbsent=true&apiKey=527389ec12184d8eb640ce74d588a626"
						alt="User profile picture"
						class="object-contain shrink-0 max-w-16 rounded-full aspect-square w-[150px] profile-img" />
					<div class="flex flex-col justify-center mx-4 max-md:mt-10 username">
						<h3 class="text-xl text-black my-0">{{ formData.username }}</h3>
						<p class="text-md text-black text-opacity-80">
							Joined: {{ dateCreated }}
						</p>
					</div>
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/79f980ec275542a791ab5890f8049f1d94f7e693dff6038fbf19fda1c0f76543?placeholderIfAbsent=true&apiKey=527389ec12184d8eb640ce74d588a626"
						alt=""
						class="object-contain max-w-16 aspect-square w-[125px] badge" />
				</div>
			</div>
			<hr
				class="shrink-0 mt-4 w-full border border-black border-solid w-[838px]" />

			<!-- Form -->
			<h3 class="self-center mt-5 text-2xl text-center text-black">
				Personal Details
			</h3>
			<form
				class="flex flex-wrap justify-center mt-5 text-2xl text-black personal-details"
				@submit.prevent="updateUserDetails">
				<div class="flex flex-col justify-center">
					<!-- Username -->
					<div class="py-1.5 pl-1 pr-1 mb-3">
						<label
							for="username"
							class="text-md"
							>Username:</label
						>
						<input
							v-model="formData.username"
							type="text"
							id="username"
							class="border-2 border-green-600 border-solid bg-zinc-100 p-3 w-full" />
						<p
							v-if="validationErrors.username"
							class="text-red-500 text-sm">
							{{ validationErrors.username }}
						</p>
					</div>

					<!-- Email -->
					<div class="py-1.5 pl-1 pr-1 mb-3">
						<label
							for="email"
							class="text-md"
							>Email:</label
						>
						<input
							v-model="formData.email"
							type="email"
							id="email"
							class="border-2 border-green-600 border-solid bg-zinc-100 p-3 w-full" />
						<p
							v-if="validationErrors.email"
							class="text-red-500 text-sm">
							{{ validationErrors.email }}
						</p>
					</div>

					<!-- First Name -->
					<div class="py-1.5 pl-1 pr-1 mb-3">
						<label
							for="firstName"
							class="text-md"
							>First Name:</label
						>
						<input
							v-model="formData.f_name"
							type="text"
							id="firstName"
							class="border-2 border-green-600 border-solid bg-zinc-100 p-3 w-full" />
						<p
							v-if="validationErrors.f_name"
							class="text-red-500 text-sm">
							{{ validationErrors.f_name }}
						</p>
					</div>

					<!-- Last Name -->
					<div class="py-1.5 pl-1 pr-1 mb-3">
						<label
							for="lastName"
							class="text-md"
							>Surname:</label
						>
						<input
							v-model="formData.l_name"
							type="text"
							id="lastName"
							class="border-2 border-green-600 border-solid bg-zinc-100 p-3 w-full" />
						<p
							v-if="validationErrors.l_name"
							class="text-red-500 text-sm">
							{{ validationErrors.l_name }}
						</p>
					</div>

					<!-- Date of Birth -->
					<div class="py-1.5 pl-1 pr-1 mb-3">
						<label
							for="dob"
							class="text-md"
							>Date of Birth:</label
						>
						<input
							v-model="formData.dob"
							type="date"
							id="dob"
							class="border-2 border-green-600 border-solid bg-zinc-100 p-3 w-full" />
						<p
							v-if="validationErrors.dob"
							class="text-red-500 text-sm">
							{{ validationErrors.dob }}
						</p>
					</div>
				</div>

				<hr
					class="shrink-0 mt-4 max-w-full h-px border border-black border-solid w-[838px]" />

				<div class="flex flex-col self-start mt-5 form-col2">
					<!-- Street Number -->
					<div class="py-1.5 pl-1 pr-1 mb-3">
						<label
							for="streetNumber"
							class="text-md"
							>House Number:</label
						>
						<input
							v-model="formData.streetNumber"
							type="text"
							id="streetNumber"
							class="border-2 border-green-600 border-solid bg-zinc-100 p-3 w-full" />
						<p
							v-if="validationErrors.streetNumber"
							class="text-red-500 text-sm">
							{{ validationErrors.streetNumber }}
						</p>
					</div>

					<!-- Street -->
					<div class="py-1.5 pl-1 pr-1 mb-3">
						<label
							for="street"
							class="text-md"
							>Street:</label
						>
						<input
							v-model="formData.street"
							type="text"
							id="street"
							class="border-2 border-green-600 border-solid bg-zinc-100 p-3 w-full" />
						<p
							v-if="validationErrors.street"
							class="text-red-500 text-sm">
							{{ validationErrors.street }}
						</p>
					</div>

					<!-- City -->
					<div class="py-1.5 pl-1 pr-1 mb-3">
						<label
							for="city"
							class="text-md"
							>City:</label
						>
						<input
							v-model="formData.city"
							type="text"
							id="city"
							class="border-2 border-green-600 border-solid bg-zinc-100 p-3 w-full" />
						<p
							v-if="validationErrors.city"
							class="text-red-500 text-sm">
							{{ validationErrors.city }}
						</p>
					</div>

					<p class="mt-10 text-base max-md:mr-1">
						Note: Your data will only be stored and used for waste tracking
						purposes, as outlined in our
						<a
							href="#"
							class="text-blue-600"
							>Privacy Policy</a
						>. Your data will be securely stored and not shared with third
						parties.
					</p>
					<button
						type="submit"
						:disabled="isSubmitting"
						class="self-end px-16 py-1 my-5 text-base text-center text-white bg-blue-700 rounded-3xl max-md:px-5">
						{{ isSubmitting ? "Updating..." : "Update Details" }}
					</button>
				</div>
			</form>

			<!-- API Message -->
			<p
				v-if="apiMessage"
				class="text-center mt-5 text-red-600">
				{{ apiMessage }}
			</p>
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
			flex: 20%;
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
