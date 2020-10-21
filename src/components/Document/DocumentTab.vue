<template>
	<div
		class="tab border-primary"
		:class="{ 'border-b-2': active }"
	>
		{{ title }}
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'Tab'
		},
		active: {
			type: Boolean,
			default: false
		}
	}
};
</script>
