<template>
	<div
		class="tab flex border-primary pt-3 pb-2 text-gray-500 cursor-pointer hover:text-gray-600 whitespace-no-wrap"
		:class="{ 'border-b-3': active }"
		data-e2e-id="documentTabItem"
		:data-e2e-active="active"
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

<style lang="scss" scoped>
.tab {
	@apply px-4;

	// smaller screens
	@media only screen and (max-width: 640px) {
		& {
			@apply px-2;
		}
	}
}
</style>
