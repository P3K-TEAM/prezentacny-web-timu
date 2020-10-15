<template>
	<div class="my-6 mx-auto">
		<div class="inline-block p-4 bg-green-500 hover:bg-green-600 cursor-pointer">
			<p>I'm an {{ name }}</p>
			<p class="text-green-800 font-bold" v-show="!!msg">
				{{ msg }}
			</p>
			<a
					@click="counter++"
					class="bg-black-100" :class="{'bg-red-500': counter > 10}"
			>
			Ked klikne 10 tak budem cerveny
			</a>
			<a

			>
				{{counter}}
			</a>
		</div>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			name: 'ExampleComponent.vue',
			counter: 0
		};
	},
	props: {
		msg: String
	}
};
</script>

<style lang="scss"></style>
