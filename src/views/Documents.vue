<template>
	<div
		class="bg-gray-200"
		data-e2e-id="documentsPage"
	>
		<div class="px-6 md:px-0 container mx-auto my-10">
			<h1 class="text-2xl font-bold mb-4">
				Dokumenty
			</h1>
			<div class="bg-white rounded shadow">
				<div class="border-b-2 border-gray-300 overflow-x-auto flex">
					<DocumentTab
						v-for="tab in Object.keys(documents)"
						:key="tab"
						:title="tab"
						:active="tab === selectedTab"
						@click.native="selectedTab = tab"
					/>
				</div>
				<DocumentItem
					v-for="document in documents[selectedTab]"
					:key="document.name"
					:name="document.name"
					:date="document.date"
					:link="document.link"
				/>
				<div
					v-if="documents && selectedTab && !documents[selectedTab].length"
					class="text-gray-500 px-4 py-3"
				>
					Ospravedlňujeme sa, v danej kategórií nie sú k dispozícií
					žiadne dokumenty.
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DocumentTab from '@/components/Document/DocumentTab.vue';
import DocumentItem from '@/components/Document/DocumentItem.vue';

export default {
	components: {
		DocumentItem,
		DocumentTab
	},
	data: function() {
		return {
			selectedTab: '',
			documents: {
				'Zápisnice': [],
				'Retrospektívy': [],
				'Exporty úloh': [],
				'Metodiky': [
					{
						name: 'Definition of Done',
						date: '21.10.2020',
						link:
							'/download/metodiky/metodika-definition-of-done.pdf'
					},
					{
						name: 'Definition of Ready',
						date: '21.10.2020',
						link:
							'/download/metodiky/metodika-definition-of-ready.pdf'
					},
					{
						name: 'Komunikácia v tíme',
						date: '21.10.2020',
						link:
							'/download/metodiky/metodika-komunikacie-v-time.pdf'
					},
					{
						name: 'Písanie a zmena metodík',
						date: '21.10.2020',
						link: '/download/metodiky/metodika-pisania-metodik.pdf'
					},
					{
						name: 'Verziovanie zdrojového kódu',
						date: '5.11.2020',
						link: '/download/metodiky/metodika-git.pdf'
					}
				]
			}
		};
	},
	mounted() {
		this.selectedTab = Object.keys(this.documents)[0];
	}
};
</script>
