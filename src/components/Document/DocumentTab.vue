<template>
	<div
		class="tab inline-block border-primary pt-3 pb-2 text-gray-500 px-1 md:px-2 cursor-pointer hover:text-gray-600"
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

<style lang="scss">

.tab {
	@apply mr-1;
	margin-bottom: -2px;

	@media only screen and (min-width:640px){
		&{
			@apply mr-4;
			}
		&:first-child{
			@apply ml-4;
		}
	}
	
	&:first-child{
		@apply ml-1;
	}
	
}
</style>
