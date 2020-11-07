<template>
	<div class="flex items-center contact-item" data-e2e-id="contactItem">
		<div
			class="flex flex-shrink-0 justify-center items-center w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow"
		>
			<i :class="icon" class="text-xl lg:text-2xl text-primary" />
		</div>
		<div class="ml-5" :class="{ 'group cursor-pointer': !!link }">
			<a
				v-if="link"
				:href="link"
				class="group-hover:border-b border-accent"
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

<style scoped>
.contact-item:not(:last-child) {
	@apply mb-5;
}
</style>
