<template>
	<div class="tab">
		{{ title }}
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'Tab'
		}
	}
};
</script>
