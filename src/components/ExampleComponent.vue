<template>
	<div class="my-6 mx-auto">
		<div class="inline-block p-4 bg-green-500 hover:bg-green-600 cursor-pointer">
			<p>I'm an {{ name }}</p>
			<p class="text-green-800 font-bold" v-show="!!msg">
				{{ msg }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			name: 'ExampleComponent.vue'
		};
	},
	props: {
		msg: String
	}
};
</script>

<style lang="scss"></style>
