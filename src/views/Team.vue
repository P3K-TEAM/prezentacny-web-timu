<template>
	<div class="bg-gray-100">
		<div class="container flex flex-wrap mx-auto mb-24">
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
					name: 'Ing. Juraj Petrík',
					description: 'Vedúci tímu, Product Owner',
					image: 'edited/juraj-petrik.png'
				},
				{
					name: 'Bc. Karin Maliniaková',
					description: 'Scrum Master, Frontend developer, UX',
					image: 'edited/karin-maliniakova.png'
				},
				{
					name: 'Bc. František Gič',
					description: 'Frontend developer, GitMaster, UX',
					image: 'edited/frantisek-gic.png'
				},
				{
					name: 'Bc. Vladimír Svitok',
					description: 'Backend developer',
					image: 'edited/vladimir-svitok.png'
				},
				{
					name: 'Bc. Anton Rusňák',
					description: 'Backend developer, NLP',
					image: 'edited/anton-rusnak.png'
				},
				{
					name: 'Bc. Denisa Mensatorisová',
					description: 'Backend developer, UX',
					image: 'edited/denisa-mensatorisova.png'
				},
				{
					name: 'Bc. Kristián Toldy',
					description: 'Backend developer, Tester',
					image: 'edited/kristian-toldy.png'
				},
				{
					name: 'Bc. Oliver Kanát',
					description: 'Backend developer, NLP',
					image: 'edited/oliver-kanat.png'
				}
			]
		};
	}
};
</script>
