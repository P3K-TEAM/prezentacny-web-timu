<template>
	<nav data-e2e-id="navigation">
		<div class="container flex mx-auto py-6">
			<router-link
				to="/"
				class="text-primary text-2xl font-bold flex flex-shrink-0"
			>
				P3K Team
			</router-link>
			<ul class="flex w-full justify-end items-center">
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
			]
		};
	}
};
</script>
