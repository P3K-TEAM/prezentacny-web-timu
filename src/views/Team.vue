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
					name: 'Ing. Juraj Petrik',
					description: 'Product Owner',
					image: 'img/valentino.png'
				},
				{
					name: 'Bc. Karin Maliniaková',
					description: 'Scrum Master, Frontend developer, UX',
					image: 'edited/karin.png'
				},
				{
					name: 'Bc. František Gič',
					description: 'Frontend developer, GitMaster, UX',
					image: 'edited/fero.png'
				},
				{
					name: 'Bc. Vladimír Svitok',
					description: 'Backend developer',
					image: 'edited/vlado.png'
				},
				{
					name: 'Bc. Anton Rusňák',
					description: 'Backend developer, NLP',
					image: 'edited/anton.png'
				},
				{
					name: 'Bc. Denisa Mensatorisová',
					description: 'Backend developer, UX',
					image: 'edited/dena.png'
				},
				{
					name: 'Bc. Kristián Toldy',
					description: 'Backend developer, Tester',
					image: 'edited/kiko.png'
				},
				{
					name: 'Bc. Oliver Kanát',
					description: 'Backend developer, NLP',
					image: 'edited/oliver.png'
				}
			]
		};
	}
};
</script>
