<template>
	<div class="flex">
		<Person v-for="person in persons" :key="person.id" :description="person.description" :name="person.name" :image="person.image"
		>

		</Person>
	</div>
</template>

<script>
import Person  from '../components/Person';


export default {
	components: {
		Person
	},
	data: function() {
		return {
			message: 'It works from variable as well!',
			persons:[
				{id:1, name:"Valentino Vranic", description:"Avendzenders", image:"../assets/imgs/valentino.png"},
				{id:2, name:"Valentino Vranic", description:"Avendzenders", image:"../assets/imgs/valentino.png"},
				{id:3, name:"Valentino Vranic", description:"Avendzenders", image:"../assets/imgs/valentino.png"},
				{id:4, name:"Valentino Vranic", description:"Avendzenders", image:"../assets/imgs/valentino.png"},

			]
		};
	}
};
</script>
