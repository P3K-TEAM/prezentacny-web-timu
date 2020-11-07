<template>
	<li
		class="inline-block w-full md:w-auto py-2 md:py-0 uppercase  hover:bg-cyan-100 md:hover:bg-transparent"
	>
		<router-link
			:to="url"
			class="flex w-full justify-center text-md font-semibold md:font-bold whitespace-no-wrap  md:hover:text-accent"
			data-e2e-id="navigationItem"
		>
			{{ text }}
		</router-link>
	</li>
</template>

<script>
export default {
	props: {
		url: String,
		text: String
	}
};
</script>

<style lang="scss" scoped>
li {
	.router-link-exact-active {
		@apply text-primary;
	}

	// md+ screens
	@media only screen and (min-width: 768px) {
		&:not(:last-child) {
			@apply mr-8;
		}
	}
}
</style>
