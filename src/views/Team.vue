<template>
	<div
		class="bg-gray-100"
		data-e2e-id="teamPage"
	>
		<div class="container flex flex-wrap mx-auto mb-24">
			<Person
				v-for="(person, index) in persons"
				:key="index"
				:description="person.description"
				:name="person.name"
				:image="person.image"
			/>
		</div>
	</div>
</template>

<script>
import Person from '@/components/Person/Person';

export default {
	components: {
		Person
	},
	data: function() {
		return {
			persons: [
				{
					name: 'Ing. Juraj Petrík',
					description: 'Vedúci tímu, Product Owner',
					image: 'img/juraj-petrik.png'
				},
				{
					name: 'Bc. Karin Maliniaková',
					description: 'Scrum Master, Frontend developer, UX',
					image: 'img/karin-maliniakova.png'
				},
				{
					name: 'Bc. František Gič',
					description: 'Frontend developer, GitMaster, UX',
					image: 'img/frantisek-gic.png'
				},
				{
					name: 'Bc. Vladimír Svitok',
					description: 'Backend developer',
					image: 'img/vladimir-svitok.png'
				},
				{
					name: 'Bc. Anton Rusňák',
					description: 'Backend developer, NLP',
					image: 'img/anton-rusnak.png'
				},
				{
					name: 'Bc. Denisa Mensatorisová',
					description: 'Backend developer, UX',
					image: 'img/denisa-mensatorisova.png'
				},
				{
					name: 'Bc. Kristián Toldy',
					description: 'Backend developer, Tester',
					image: 'img/kristian-toldy.png'
				},
				{
					name: 'Bc. Oliver Kanát',
					description: 'Backend developer, NLP',
					image: 'img/oliver-kanat.png'
				}
			]
		};
	}
};
</script>
