<template>
	<li class="block mr-auto sm:mr-8 sm:inline-block font-bold uppercase text-md hover:text-accent">
		<router-link
			:to="url"
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

<style lang="scss">
li {
	.router-link-exact-active {
		@apply text-primary;
	}
	text-align: center;
}
</style>
