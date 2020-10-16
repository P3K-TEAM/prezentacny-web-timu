<template>
	<div class="document-item border-grey-300 py-3 px-4">
		<span class="inline-block w-1/4">
			{{ name }}
		</span>
		<div class="inline-block w-3/4 text-right">
			<a
				:href="link"
				class="bg-primary rounded text-white font-bold py-1 px-2 ml-auto"
			>
				Stiahnuť
				<i class="fas fa-download"></i>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	props: ['name', 'link']
};
</script>

<style lang="scss" scoped>
.document-item:not(:last-child) {
	@apply border-b-2;
}
</style>
