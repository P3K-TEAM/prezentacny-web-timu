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
				'Zápisnice': [
					{
						name: 'Zápisnica č.1 - stretnutie s vedúcim',
						date: '2.10.2020',
						link:
							'/download/zapisnice/zapisnica1.pdf'
					},
					{
						name: 'Zápisnica č.1 - stretnutie v tíme',
						date: '7.10.2020',
						link:
							'/download/zapisnice/zapisnica1_1.pdf'
					},
					{
						name: 'Zápisnica č.2 - stretnutie s vedúcim',
						date: '9.10.2020',
						link:
							'/download/zapisnice/zapisnica2.pdf'
					},
					{
						name: 'Zápisnica č.2 - stretnutie v tíme',
						date: '14.10.2020',
						link:
							'/download/zapisnice/zapisnica2_2.pdf'
					},
					{
						name: 'Zápisnica č.3 - stretnutie s vedúcim',
						date: '16.10.2020',
						link:
							'/download/zapisnice/zapisnica3.pdf'
					},
					{
						name: 'Zápisnica č.3 - stretnutie v tíme',
						date: '21.10.2020',
						link:
							'/download/zapisnice/zapisnica3_3.pdf'
					},
					{
						name: 'Zápisnica č.4 - stretnutie s vedúcim',
						date: '23.10.2020',
						link:
							'/download/zapisnice/zapisnica4.pdf'
					},
					{
						name: 'Zápisnica č.4 - stretnutie v tíme',
						date: '28.10.2020',
						link:
							'/download/zapisnice/zapisnica4_4.pdf'
					},
					{
						name: 'Zápisnica č.5 - stretnutie s vedúcim',
						date: '30.10.2020',
						link:
							'/download/zapisnice/zapisnica5.pdf'
					},
					{
						name: 'Zápisnica č.5 - stretnutie v tíme',
						date: '4.11.2020',
						link:
							'/download/zapisnice/zapisnica5_5.pdf'
					},
					{
						name: 'Zápisnica č.6 - stretnutie s vedúcim',
						date: '6.11.2020',
						link:
							'/download/zapisnice/zapisnica6.pdf'
					},
					{
						name: 'Zápisnica č.6 - stretnutie v tíme',
						date: '11.11.2020',
						link:
							'/download/zapisnice/zapisnica6_6.pdf'
					},
					{
						name: 'Zápisnica č.7 - stretnutie s vedúcim',
						date: '13.11.2020',
						link:
							'/download/zapisnice/zapisnica7.pdf'
					},
					{
						name: 'Zápisnica č.7 - stretnutie v tíme',
						date: '18.11.2020',
						link:
							'/download/zapisnice/zapisnica7_7.pdf'
					},
					{
						name: 'Zápisnica č.8 - stretnutie s vedúcim',
						date: '20.11.2020',
						link:
							'/download/zapisnice/zapisnica8.pdf'
					},
					{
						name: 'Zápisnica č.8 - stretnutie v tíme',
						date: '25.11.2020',
						link:
							'/download/zapisnice/zapisnica8_8.pdf'
					}
				],
				'Retrospektívy': [
					{
						name: 'Šprint 1',
						date: '23.10.2020',
						link:
							'/download/retrospektivy/Sprint1.pdf'
					},
					{
						name: 'Šprint 2',
						date: '6.11.2020',
						link:
							'/download/retrospektivy/Sprint2.pdf'
					},
					{
						name: 'Šprint 3',
						date: '20.11.2020',
						link:
							'/download/retrospektivy/Sprint3.pdf'
					}
				],
				'Exporty úloh': [
					{
						name: 'Export úloh z 1.šprintu',
						date: '23.10.2020',
						link:
							'/download/exporty/export-uloh-sprint-1.pdf'
					},
					{
						name: 'Export úloh z 2.šprintu',
						date: '6.11.2020',
						link:
							'/download/exporty/export-uloh-sprint-2.pdf'
					},
					{
						name: 'Export úloh z 3.šprintu',
						date: '20.11.2020',
						link:
							'/download/exporty/export-uloh-sprint-3.pdf'
					}
				],
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
