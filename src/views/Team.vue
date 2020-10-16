<template>
	<div class="bg-gray-200">
		<div class="container flex flex-wrap mx-auto pt-40">
			<Person
				v-for="(person, index) in persons"
				:key="index"
				:description="person.description"
				:name="person.name"
				:image="person.image"
			>
			</Person>
		</div>
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
