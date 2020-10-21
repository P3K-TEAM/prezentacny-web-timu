<template>
	<div class="bg-gray-100 flex items-center">
		<div class="flex justify-center w-1/2 bg-primary py-32 skewed-wrapper">
			<div class="w-3/5 text-white">
				<h1 class="text-xl font-bold">Napíšte nám</h1>
				<p>
					V prípade akýchkoľvek otázok nás neváhajte kontaktovať na
					jednom z uvedených linkov.
				</p>
			</div>
		</div>
		<div class="w-1/2 ml-10">
			<div>
				<ContactItem
					v-for="(item, index) in items"
					:key="index"
					:text="item.text"
					:icon="item.icon"
					:link="item.link"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import ContactItem from '@/components/Contact/ContactItem.vue';

export default {
	components: {
		ContactItem
	},
	data: function() {
		return {
			items: [
				{
					icon: 'far fa-envelope',
					text: 'tim10fiit@googlegroups.com',
					link: 'mailto:tim10fiit@googlegroups.com'
				},
				{
					icon: 'fas fa-map-marker-alt',
					text: `Fakulta informatiky a informačných technologií<br>
						   Slovenská Technická Univerzita v Bratislave<br>
						   Iľkovičova 2<br>
						   842 16 Bratislava`,
					link: 'https://goo.gl/maps/UP19hKHWFhYcea9q8'
				}
			]
		};
	}
};
</script>

<style lang="scss">
.skewed-wrapper {
	clip-path: polygon(0 0, 100% 0%, 85% 100%, 0% 100%);
}
</style>
