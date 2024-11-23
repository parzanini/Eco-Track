<template>
	<div class="container text-center ur-container h-[500px]">
		<h2 class="font-semibold">Delete Account</h2>
		<p class="mt-4">
			Are you sure you want to delete your account? This action cannot be
			undone.
		</p>
		<button
			@click="deleteAccount"
			type="submit"
			class="px-16 py-1 my-5 text-white bg-red-700 rounded-3xl">
			Delete Account
		</button>

		<!-- Success Modal -->
		<div
			v-if="showModal"
			class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div class="bg-white p-8 rounded-lg shadow-xl text-center">
				<h3 class="text-2xl font-semibold mb-4">
					Account Deleted Successfully
				</h3>
				<p class="mb-6 text-gray-600">
					We're sad to see you go! Thank you for being part of our community.
				</p>
				<p class="mb-6 text-gray-600">We hope to see you again soon! 🌱</p>
				<button
					@click="handleClose"
					class="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
					Close
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import axios from "axios";

	const showModal = ref(false);

	async function deleteAccount() {
		try {
			const userId = sessionStorage.getItem("user_id");
			const response = await axios.delete(
				`http://localhost/CI4-EcoTrack/public/deleteUser/${userId}`
			);

			if (response.status === 200) {
				showModal.value = true;
			}
		} catch (error) {
			console.error("Error deleting account:", error);
			alert("Failed to delete account. Please try again.");
		}
	}

	function handleClose() {
		sessionStorage.clear();
		window.location.href = "/";
	}
</script>
