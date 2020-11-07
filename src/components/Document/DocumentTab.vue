<template>
	<div
		class="tab inline-block border-primary pt-3 pb-2 text-gray-500 px-1 md:px-2 cursor-pointer hover:text-gray-600 whitespace-no-wrap"
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
	@apply mx-4;

	// smaller screens
	@media only screen and (max-width: 640px) {
		& {
			@apply mx-2;
		}
	}
}
</style>
