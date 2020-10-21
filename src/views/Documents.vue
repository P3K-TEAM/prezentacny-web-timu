<template>
	<div class="bg-gray-200">
		<div class="container mx-auto mt-10">
			<h1 class="text-2xl font-bold mb-4">
				Dokumenty
			</h1>
			<div>
				<div
					v-for="tab in Object.keys(documents)"
					:key="tab"
					:title="tab"
					@click="selectedTab = tab"
				>
					{{ tab }}
				</div>
			</div>
			<div class="bg-white rounded shadow">
				<DocumentItem
					v-for="document in documents[selectedTab]"
					:key="document.name"
					:name="document.name"
					:date="document.date"
					:link="document.link"
				/>
			</div>
		</div>
	</div>
</template>

<script>
//import Tab from '@/components/Document/DocumentTab.vue';
import DocumentItem from '@/components/Document/DocumentItem.vue';

export default {
	components: {
		DocumentItem
		//Tab
	},
	data: function() {
		return {
			selectedTab: 'Zápisnice',
			documents: {
				'Zápisnice': [
					{
						name: 'Zapisnice.pdf',
						date: '21.10.2020',
						link: '/download/report.pdf'
					}
				],
				'Retrospektívy': [
					{
						name: 'retrospektivy.pdf',
						date: '21.10.2020',
						link: '/download/report.pdf'
					}
				],
				'Exporty úloh': [
					{
						name: 'Export.pdf',
						date: '21.10.2020',
						link: '/download/report.pdf'
					}
				],
				'Metodiky': [
					{
						name: 'Metodika.pdf',
						date: '21.10.2020',
						link: '/download/report.pdf'
					}
				]
			}
		};
	},
};
</script>


