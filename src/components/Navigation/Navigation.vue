<template>
	<nav
		data-e2e-id="navigation"
		class="absolute w-full py-6 bg-white z-10 shadow-sm"
	>
		<div
			class="w-full md:container mx-auto flex md:flex-row justify-between items-center"
			:class="isOpen ? 'flex-col' : 'flex-row'"
		>
			<div
				class="flex justify-between w-full px-6 md:px-0"
				:class="{ 'shadow md:shadow-none pb-6 md:pb-0': isOpen }"
			>
				<!-- Logo -->
				<router-link
					to="/"
					class="text-primary text-2xl font-bold flex flex-shrink-0"
				>
					P3K Team
				</router-link>

				<!-- Hamburger menu -->
				<button
					type="button"
					class="block md:hidden text-2xl h-10 w-10 rounded hover:bg-gray-200 focus:outline-none flex-shrink-0"
					@click="toggleNavigation"
				>
					<!-- https://stackoverflow.com/questions/49343425/vue-js-cant-toggle-a-font-awesome-icon -->
					<template v-if="!isOpen">
						<span>
							<i class="fas fa-bars"></i>
						</span>
					</template>
					<template v-else>
						<span>
							<i class="fas fa-times"></i>
						</span>
					</template>
				</button>
			</div>

			<ul
				class="flex w-full flex-col md:flex-row justify-center md:justify-end items-center pt-6 md:pt-0"
				:class="{ 'hidden md:flex': !isOpen }"
			>
				<NavigationItem
					v-for="(item, index) in navigationItems"
					:key="index"
					:url="item.url"
					:text="item.text"
				/>
			</ul>
		</div>
	</nav>
</template>

<script>
import NavigationItem from '@/components/Navigation/NavigationItem';

export default {
	components: {
		NavigationItem
	},
	data: function() {
		return {
			navigationItems: [
				{ url: '/', text: 'O projekte' },
				{ url: '/team', text: 'Tím' },
				{ url: '/documents', text: 'Dokumenty' },
				{ url: '/contact', text: 'Kontakt' }
			],
			isOpen: false
		};
	},
	methods: {
		toggleNavigation() {
			this.isOpen = !this.isOpen;
		}
	},
	watch: {
		$route() {
			this.isOpen = false;
		}
	}
};
</script>
