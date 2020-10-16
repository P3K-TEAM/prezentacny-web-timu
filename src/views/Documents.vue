<template>
	<div class="bg-gray-200">
		<div class="container mx-auto mt-10">
			<h1 class="text-2xl font-bold mb-4">
				Dokumenty
			</h1>
			<div class="bg-white rounded shadow">
				<DocumentItem
					v-for="document in documents"
					:key="document.name"
					:name="document.name"
					:link="document.link"
				>
				</DocumentItem>
			</div>
		</div>
	</div>
</template>

<script>
import DocumentItem from '@/components/DocumentItem.vue';

export default {
	components: {
		DocumentItem
	},
	data: function() {
		return {
			documents: [
				{ name: 'Report.pdf', link: '/download/report.pdf' },
				{ name: 'Report.pdf', link: '/download/report.pdf' },
				{ name: 'Report.pdf', link: '/download/report.pdf' },
				{ name: 'Report.pdf', link: '/download/report.pdf' }
			]
		};
	}
};
</script>
