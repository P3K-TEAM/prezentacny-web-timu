<template>
	<div class="flex">
		<Person
			v-for="person in persons"
			:key="person.id"
			:description="person.description"
			:name="person.name"
			:image="person.image"
		>
		</Person>
	</div>
</template>

<script>
import Person from '../components/Person';

export default {
	components: {
		Person
	},
	data: function() {
		return {
			message: 'It works from variable as well!',
			persons: [
				{
					name: 'Karin Maliniaková',
					description: 'Vedúcka',
					image: 'img/karin_maliniakova.jpeg'
				},
				{
					name: 'Valentino Vranić',
					description: 'Avendžendžer a Thanos v jednom, SuperGarant',
					image: 'img/valentino.png'
				},
				{
					name: 'Valentino Vranić',
					description: 'Avendžendžer a Thanos v jednom, SuperGarant',
					image: 'img/valentino.png'
				},
				{
					name: 'Valentino Vranić',
					description: 'Avendžendžer a Thanos v jednom, SuperGarant',
					image: 'img/valentino.png'
				}
			]
		};
	}
};
</script>
