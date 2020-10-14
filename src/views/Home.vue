<template>
	<div>
		<ExampleComponent />
		<ExampleComponent msg="It works! 🎉" />
		<ExampleComponent :msg="message" />
	</div>
</template>

<script>
import ExampleComponent from '@/components/ExampleComponent.vue';

export default {
	components: {
		ExampleComponent
	},
	data: function() {
		return {
			message: 'It works from variable as well!'
		};
	}
};
</script>
