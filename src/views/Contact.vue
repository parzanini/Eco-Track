<template>
	<section class="w-full pb-8">
		<h2 class="md:text-6xl text-3xl font-extrabold text-center text-black p-2">
			Contact Us
		</h2>
		<hr class="border-b-4 border-black w-1/2 mx-auto" />
		<h3 class="text-center text-2xl md:text-4xl p-2">
			We would love to hear from you...
		</h3>

		<form
			@submit.prevent="handleSubmit"
			class="flex flex-col w-4/5 text-2xl md:text-3xl font-medium text-black bg-green-600 bg-opacity-10 p-8 justify-center items-center mx-auto mt-10 rounded-xl">
			<div
				v-if="errorMessage"
				class="error-message text-red-500 mb-4 text-xl">
				{{ errorMessage }}
			</div>
			<div class="flex w-full md:flex-row flex-col p-4">
				<label
					for="name"
					class="text-center mr-4 md:w-1/6 w-full p-2 md:p-0 text-xl md:text-2xl"
					>Name:</label
				>
				<input
					type="text"
					id="name"
					v-model="name"
					name="name"
					class="bg-white rounded-xl h-12 w-full md:mx-4 md:px-4" />
			</div>

			<div class="flex w-full md:flex-row flex-col p-4 text-xl md:text-2xl">
				<label
					for="email"
					class="text-center mr-4 md:w-1/6 w-full p-2 md:p-0"
					>Email:</label
				>
				<input
					type="text"
					id="email"
					v-model="email"
					name="email"
					class="bg-white rounded-xl h-12 w-full md:mx-4 md:px-4" />
			</div>

			<div class="flex w-full md:flex-row flex-col p-4 text-xl md:text-2xl">
				<label
					for="message"
					class="text-center mr-4 md:w-1/6 w-full p-2 md:p-0"
					>Message:</label
				>
				<textarea
					id="message"
					v-model="message"
					name="message"
					class="bg-white rounded-xl w-full h-36 md:mx-4 p-4"></textarea>
			</div>

			<!--      overlay-->
			<div
				v-show="isLoading"
				class="flex flex-col align-items-middle">
				<div class="fixed inset-0 bg-black bg-opacity-10 z-50"></div>
				<!--  loading message-->
				<div
					v-show="isLoading"
					class="flex mt-12 w-20 mx-auto z-[90]">
					<svg
						aria-hidden="true"
						class="ml-4 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-green-600"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor" />
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill" />
					</svg>
					<p class="sr-only">Loading...</p>
				</div>
			</div>

			<button
				type="submit"
				class="px-16 md:pt-3.5 p-4 md:pb-7 md:mt-8 max-w-full text-xl md:text-3xl font-extrabold text-black rounded-xl border border-solid bg-green-600 bg-opacity-30 border-green-600 border-opacity-30 w-[294px] max-md:px-5 hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600">
				SUBMIT
			</button>
		</form>

		<!-- Modal for success message -->
		<div
			v-if="showModal"
			class="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div
				class="modal-content bg-white text-center p-8 rounded-lg shadow-lg w-3/4 max-w-md">
				<p class="text-2xl font-semibold mb-4 text-green-600">
					Message sent successfully!
				</p>
				<button
					@click="closeModal"
					class="px-6 py-2 mt-4 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none">
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
	const isLoading = ref(false);
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
		const formData = {
			name: name.value,
			email: email.value,
			message: message.value,
		};

		try {
			isLoading.value = true; // show spinner
			//api call to send email
			const response = await axios.post(
				`http://https://72.145.1.73:8080/CI4-EcoTrack/public/contact/handleContact`,
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			isLoading.value = false; // hide spinner
			console.log(response.data.message); // outputs 'sent successfully'
			showModal.value = true;

			name.value = "";
			email.value = "";
			message.value = "";
		} catch (error) {
			//handle errors
			errorMessage.value = "Error. Please try again.";
			//console.error(errorMessage);
		}
	};

	const closeModal = () => {
		showModal.value = false;
	};
</script>
