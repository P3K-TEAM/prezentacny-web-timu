<template>
	<div class="flex items-center contact-item">
		<div
			class="flex flex-shrink-0 justify-center items-center w-12 h-12 bg-white rounded-full shadow"
		>
			<i :class="icon" class="fa-2x text-primary" />
		</div>
		<div class="ml-5 content-center">
			<a
				v-if="link"
				:href="link"
				class="hover:border-b border-accent"
				target="_blank"
				v-html="text"
			/>
			<p v-else v-html="text" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		text: {
			required: true,
			type: String
		},
		icon: {
			required: true,
			type: String
		},
		link: String
	}
};
</script>

<style>
.contact-item:not(:last-child) {
	@apply mb-5;
}
</style>
