<!--Date Created: 2024-10-28-->
<!--Author: K00288477 Gary O'Connor-->

<script setup>
	import { ref } from "vue";
	import UserValidation from "../components/userPortalComponents/userValidation.js";
	import axios from "axios";
	import router from "@/router/index.js";
	const userValidation = new UserValidation();
	const user_id = JSON.parse(sessionStorage.getItem("user_id"));
	// State
	const itemDescription = ref("");
	const selectedCategory = ref("");
	const selectedType = ref("");
	const wasteType = ref(["Single Entry", "12L bag", "30L bag", "50L bag"]);
	const categories = ref([
		"Paper",
		"Plastic",
		"Organic",
		"General Waste",
		"General Recycling",
	]);
	const errorMessage = ref("");
	const successMessage = ref("");

	// Methods
	const submitForm = async () => {
		// validate inputs
		const validation = userValidation.userWasteValidation(
			itemDescription.value,
			selectedCategory.value
		);

		if (!validation.isValid) {
			errorMessage.value = validation.message;
			return;
		}

		const formData = {
			description: itemDescription.value,
			category: selectedCategory.value,
			wasteType: selectedType.value,
			user_id: user_id,
		};
		// clear error message
		errorMessage.value = "";

		// API call
		try {
			const response = await axios.post(
				`http://72.145.1.73:8080/CI4-EcoTrack/public/insertWasteEvent`,
				formData,
				{ headers: { "Content-Type": "application/json" } }
			);
			// Display message on success code
			if (response.status === 200 || response.status === 201) {
				// Display feedback to the user
				successMessage.value = "Waste Event Logged Successfully";

				// Redirect after 5 seconds
				setTimeout(() => {
					router.push("/");
				}, 3000);
			}
		} catch (e) {
			console.log(e);
		}
	};
</script>

<template>
	<div class="main-container">
		<div class="container flex flex-col mx-auto w-[90%] mb-4 mt-10">
			<div class="self-start w-[50px]">
				<img
					alt="recycling logo"
					src="/imgs/logo/Recycle%20Symbol%20Image.png" />
			</div>
			<h1 class="self-center text-2xl">Enter Waste Details</h1>
		</div>

		<!-- user waste logger form -->
		<form
			class="container flex flex-col mx-auto w-[90%] mb-14"
			@submit.prevent="submitForm">
			<span
				v-if="errorMessage"
				class="text-red-600"
				>{{ errorMessage }}</span
			>
			<div>
				<label class="block text-sm mb-1">Item Description:</label>
				<input
					type="text"
					v-model="itemDescription"
					class="w-full p-2 border-2 border-[#36BA24] focus:outline-none focus:ring-2 focus:ring-green-500 mb-6" />
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
								: 'bg-white border-green-200 hover:bg-green-50',
						]">
						<input
							type="radio"
							name="category"
							:value="cat"
							v-model="selectedCategory"
							class="hidden" />
						{{ cat }}
					</label>
				</div>
			</div>

			<div>
				<label class="block text-sm mb-2">Waste Type:</label>
				<div class="flex flex-wrap gap-2">
					<label
						v-for="type in wasteType"
						:key="type"
						:class="[
							'px-4 py-2 rounded-[0.5rem] border-600 border-[#36BA24] cursor-pointer border',
							selectedType === type
								? 'bg-green-500 text-white border-green-500'
								: 'bg-white border-green-200 hover:bg-green-50',
						]">
						<input
							type="radio"
							name="category"
							:value="type"
							v-model="selectedType"
							class="hidden" />
						{{ type }}
					</label>
				</div>
			</div>
			<div class="flex flex-col">
				<span
					class="text-center font-semibold text-[#15803d] mt-4"
					v-if="successMessage"
					>{{ successMessage }}</span
				>
				<button
					type="submit"
					class="px-16 py-1 my-5 text-white bg-blue-700 rounded-3xl w-[90%] mx-auto">
					Log Waste
				</button>
				<p class="">
					Note: Recycling more often will help you reach the next milestone
				</p>
			</div>
		</form>

		<!--    end of main container-->
	</div>
</template>

<style scoped>
	@media (min-width: 1024px) {
		.main-container {
			border: 2px solid black;
			border-radius: 4rem;
			width: 40%;
			margin: 4rem auto;
			padding-bottom: 4rem;
		}
	}
</style>
