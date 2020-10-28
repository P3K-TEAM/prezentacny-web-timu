<template>
	<div
		class="document-item border-grey-300 py-3 px-4 group hover:bg-gray-100"
		data-e2e-id="documentItem"
	>
		<span class="inline-block w-1/4">
			{{ name }}
		</span>
		<span class="inline-block w-2/4 text-right">
			{{ date }}
		</span>
		<div class="inline-block w-1/4 text-right">
			<a
				:href="link"
				class="bg-primary rounded text-white font-bold py-1 px-2 ml-auto invisible group-hover:visible"
				data-e2e-id="documentItemDownloadButton"
			>
				<span class="mr-2">Stiahnuť</span>
				<i class="fas fa-download" />
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

<style lang="scss" scoped>
.document-item:not(:last-child) {
	@apply border-b-2;
}
</style>
