<template>
	<div
		class="document-item border-grey-300 py-3 px-4 group hover:bg-gray-100 flex items-center"
		data-e2e-id="documentItem"
	>
		<span class="inline-block md:w-1/4 w-3/4">
			{{ name }}
		</span>
		<span class="hidden md:inline-block w-2/4 text-right">
			{{ date }}
		</span>
		<div class="inline-block w-1/4 md:w-1/4 text-right">
			<a
				:href="link"
				class="rounded font-bold py-2 px-3 md:px-2 ml-auto visible text-gray-500 bg-gray-200 md:invisible md:text-white md:bg-primary group-hover:visible"
				target="_blank"
				data-e2e-id="documentItemDownloadButton"
			>
				<span class="mr-2 hidden md:inline">Stiahnuť</span>
				<fa-icon :icon="['fas', 'download']" />
			</a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: String,
		date: String,
		link: String
	}
};
</script>

<style scoped>
.document-item:not(:last-child) {
	@apply border-b-2;
}
</style>
