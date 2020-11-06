<template>
	<div
		class="bg-gray-100 flex flex-col lg:flex-row items-center"
		data-e2e-id="contactPage"
	>
		<div class="flex justify-center w-full lg:w-1/2 bg-primary py-20 lg:py-32 skewed-wrapper">
			<div class="w-4/5 lg:w-3/5 text-white">
				<h1 class="text-4xl lg:text-2xl font-bold">
					Napíšte nám
				</h1>
				<p class="text-xl lg:text-base">
					V prípade akýchkoľvek otázok nás neváhajte kontaktovať na
					jednom z uvedených linkov.
				</p>
			</div>
		</div>
		<div class="sm:pt-auto py-16 lg:pt-8 lg:pb-0 ml-10">
			<ContactItem
				v-for="(item, index) in items"
				:key="index"
				:text="item.text"
				:icon="item.icon"
				:link="item.link"
			/>
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
@media only screen and (min-width:1024px){
.skewed-wrapper {
	clip-path: polygon(0 0, 100% 0%, 85% 100%, 0% 100%);
	min-width: 640px;
}}

</style>
