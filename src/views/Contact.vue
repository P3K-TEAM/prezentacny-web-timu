<template>
	<div class="bg-gray-200">
		<div class="container mt-40 flex mx-auto text-left">
			<div class="w-1/2 my-5">
				<div>
					<strong class="text-xl">Napíšte nám</strong>
					<p>
						V prípade akýchkoľvek otázok nás neváhajte kontaktovať
						na jednom z uvedených linkov.
					</p>
				</div>
			</div>
			<div class="w-1/2 mx-24">
				<div>
					<ContactItem
						v-for="(item, index) in items"
						:key="index"
						:text="item.text"
						:icon="item.icon"
						:link="item.link"
					>
					</ContactItem>
				</div>
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
