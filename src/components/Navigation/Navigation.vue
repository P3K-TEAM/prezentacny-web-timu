<template>
	<nav data-e2e-id="navigation">
		<header
			class="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
		>
			<div class="flex items-center justify-between px-4 py-3 sm:p-0">
				<div>
					<router-link
						to="/"
						class="text-primary text-2xl font-bold flex flex-shrink-0"
					>
						P3K Team
					</router-link>
				</div>
				<div class="sm:hidden">
					<button
						@click="isOpen = !isOpen"
						type="button"
						class="block focus:outline-none"
					>
						<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
							<path
								v-if="isOpen"
								fill-rule="evenodd"
								d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
							/>
							<path
								v-if="!isOpen"
								fill-rule="evenodd"
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
							/>
						</svg>
					</button>
				</div>
			</div>
			<nav
				:class="isOpen ? 'block' : 'hidden'"
				class="px-2 pt-2 pb-4 sm:flex sm:p-0"
			>
				<a
					href="#"
					class="block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 font-semibold rounded"
				><NavigationItem
					v-for="(item, index) in navigationItems"
					:key="index"
					:url="item.url"
					:text="item.text"
				/>
				</a>
			</nav>
		</header>
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
	}
};
</script>
