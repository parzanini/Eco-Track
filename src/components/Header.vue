<template>
	<header
		class="flex flex-col text-2xl font-bold text-center text-black whitespace-nowrap">
		<!-- Desktop Navbar -->
		<nav
			class="desktop-navbar flex flex-wrap gap-5 justify-between py-3 pr-14 pl-5 w-full bg-white max-md:pr-5 max-md:max-w-full">
			<router-link to="/">
				<img
					loading="lazy"
					src="/imgs/logo/EcoTrackLogo.png"
					alt="Company Logo"
					class="" />
			</router-link>
			<div class="flex flex-wrap gap-10 items-center my-auto max-md:max-w-full">
				<router-link
					v-for="link in navLinks"
					:key="link.name"
					:to="link.path"
					class="grow self-stretch my-auto hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
					tabindex="0">
					{{ link.name }}
				</router-link>
				<!-- isAuthenticated will verify is there is a token in the session storage, if there is, it will show the user's name and a logout button, if not, it will show a login button -->
				<div
					v-if="isAuthenticated"
					class="flex flex-col p-2 gap-2">
					<router-link
						to="/user-portal"
						class="flex items-center gap-2">
						<span
							class="grow self-stretch my-auto hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
							>{{ userDisplayName }}'s Portal</span
						>
					</router-link>
					<button
						@click="logout"
						class="grow self-stretch my-auto hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
						Logout
					</button>
				</div>
				<a
					v-else
					href="#"
					@click.prevent="openModal">
					<UserCircleIcon
						class="w-14 h-14 text-black-500 hover:text-green-600" />
				</a>
			</div>
		</nav>

		<!-- Mobile Navbar -->
		<nav
			class="mobile-navbar flex justify-between items-center py-3 pl-5 pr-3 bg-white relative">
			<router-link to="/">
				<img
					loading="lazy"
					src="/imgs/logo/EcoTrackLogo.png"
					alt="Company Logo"
					class="" />
			</router-link>
			<div class="flex items-center">
				<button
					@click="toggleMobileMenu"
					class="text-black-500 hover:text-green-600">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16m-7 6h7" />
					</svg>
				</button>
			</div>

			<!-- Mobile menu links -->
			<div
				v-if="isMobileMenuOpen"
				class="absolute top-full left-0 right-0 bg-white z-10">
				<div class="flex flex-col">
					<router-link
						v-for="link in navLinks"
						:key="link.name"
						:to="link.path"
						class="block px-4 py-2 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
						{{ link.name }}
					</router-link>
					<div
						v-if="isAuthenticated"
						class="flex flex-col px-4 py-2 gap-2">
						<router-link
							to="/user-portal"
							class="ml-4">
							<span class="text-black-500 hover:text-green-600"
								>{{ userDisplayName.toUpperCase() }}'S PORTAL</span
							>
						</router-link>
						<button
							@click="logout"
							class="ml-4">
							LOGOUT
						</button>
					</div>
					<a
						v-else
						href="#"
						@click.prevent="openModal"
						class="ml-4">
						<span class="text-black-500 hover:text-green-600"
							>Login/Sign Up</span
						>
					</a>
				</div>
			</div>
		</nav>
	</header>

	<!-- Modal for SignIn or SignUp -->
	<div
		v-if="isModalVisible"
		class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
		@click="closeModal">
		<div
			class="relative"
			@click.stop>
			<SignIn
				v-if="activeComponent === 'SignIn'"
				:showModal="isModalVisible"
				@switchToSignUp="switchToSignUp"
				@close="closeModal" />
			<SignUp
				v-else-if="activeComponent === 'SignUp'"
				:showModal="isModalVisible"
				@switchToSignIn="switchToSignIn"
				@close="closeModal" />
		</div>
	</div>
</template>

<script>
	import SignIn from "./SignIn.vue";
	import SignUp from "./SignUp.vue";
	import { UserCircleIcon } from "@heroicons/vue/24/solid";
	import axios from "axios";

	export default {
		components: {
			SignIn,
			SignUp,
			UserCircleIcon,
		},
		data() {
			return {
				isModalVisible: false,
				activeComponent: "SignIn",
				isMobileMenuOpen: false,
				userName: "",
				navLinks: [
					{ name: "ABOUT", path: "/about" },
					{ name: "EDUCATION", path: "/education" },
					{ name: "COMMUNITY", path: "/community" },
					{ name: "CONTACT", path: "/contact" },
				],
			};
		},
		computed: {
			isAuthenticated() {
				const token = sessionStorage.getItem("user_token");
				return !!token && token !== "null" && token !== "undefined";
			},
			userDisplayName() {
				const name = sessionStorage.getItem("user_name");
				// Return the name directly without JSON.parse
				return name || "";
			},
		},
		methods: {
			openModal() {
				this.isModalVisible = true;
			},
			closeModal() {
				this.isModalVisible = false;
				this.activeComponent = "SignIn";
				this.isMobileMenuOpen = false; // Close mobile menu on modal close
			},
			toggleMobileMenu() {
				this.isMobileMenuOpen = !this.isMobileMenuOpen; // Toggle the mobile menu state
			},
			switchToSignUp() {
				this.activeComponent = "SignUp";
			},
			switchToSignIn() {
				this.activeComponent = "SignIn";
			},
			async logout() {
				try {
					const response = await axios.post(
						"http://localhost/CI4-EcoTrack/public/logout",
						{},
						{
							headers: {
								Authorization: `Bearer ${sessionStorage.getItem("user_token")}`,
							},
						}
					);
					if (response.status === 200) {
						sessionStorage.clear();
						// Reload the page to update the navbar
						window.location.reload();
						//redirect to home page
						this.$router.push("Home");
					}
				} catch (e) {
					console.log("Error occurred", e);
				}
			},
		},
	};
</script>

<style scoped>
	/* Media queries for responsive styling */
	.desktop-navbar {
		display: flex; /* Show desktop navbar */
	}

	.mobile-navbar {
		display: none; /* Hide mobile navbar by default */
	}

	/* Show mobile navbar on smaller screens */
	@media (max-width: 768px) {
		.desktop-navbar {
			display: none; /* Hide desktop navbar on mobile */
		}
		.mobile-navbar {
			display: flex; /* Show mobile navbar on mobile */
			justify-content: space-between; /* Align items horizontally */
			align-items: center; /* Center items vertically */
		}
	}
</style>
