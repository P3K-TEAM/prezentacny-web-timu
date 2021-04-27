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
					},
					{
						name: 'Zápisnica č.9 - stretnutie s vedúcim',
						date: '27.11.2020',
						link:
							'/download/zapisnice/zapisnica9.pdf'
					},
					{
						name: 'Zápisnica č.9 - stretnutie v tíme',
						date: '2.12.2020',
						link:
							'/download/zapisnice/zapisnica9_9.pdf'
					},
					{
						name: 'Zápisnica č.10 - stretnutie s vedúcim',
						date: '4.12.2020',
						link:
							'/download/zapisnice/zapisnica10.pdf'
					},
					{
						name: 'Zápisnica č.11 - stretnutie s vedúcim',
						date: '16.12.2020',
						link:
							'/download/zapisnice/zapisnica11.pdf'
					},
					{
						name: 'Zápisnica č.12 - stretnutie s vedúcim',
						date: '17.2.2021',
						link:
							'/download/zapisnice/zapisnica12.pdf'
					},
					{
						name: 'Zápisnica č.12 - stretnutie v tíme',
						date: '22.2.2021',
						link:
							'/download/zapisnice/zapisnica12_12.pdf'
					},
					{
						name: 'Zápisnica č.13 - stretnutie s vedúcim',
						date: '24.2.2021',
						link:
							'/download/zapisnice/zapisnica13.pdf'
					},
					{
						name: 'Zápisnica č.13 - stretnutie v tíme',
						date: '1.3.2021',
						link:
							'/download/zapisnice/zapisnica13_13.pdf'
					},
					{
						name: 'Zápisnica č.14 - stretnutie s vedúcim',
						date: '3.3.2021',
						link:
							'/download/zapisnice/zapisnica14.pdf'
					},
					{
						name: 'Zápisnica č.14 - stretnutie v tíme',
						date: '8.3.2021',
						link:
							'/download/zapisnice/zapisnica14_14.pdf'
					},
					{
                        name: 'Zápisnica č.15 - stretnutie s vedúcim',
                        date: '10.3.2021',
                        link:
                            '/download/zapisnice/zapisnica15.pdf'
                    },
                    {
                        name: 'Zápisnica č.15 - stretnutie v tíme',
                        date: '15.3.2021',
                        link:
                            '/download/zapisnice/zapisnica15_15.pdf'
                    },
                    {
                        name: 'Zápisnica č.16 - stretnutie s vedúcim',
                        date: '17.3.2021',
                        link:
                            '/download/zapisnice/zapisnica16.pdf'
                    },
                    {
                        name: 'Zápisnica č.16 - stretnutie v tíme',
                        date: '22.3.2021',
                        link:
                            '/download/zapisnice/zapisnica16_16.pdf'
                    },
                    {
                        name: 'Zápisnica č.17 - stretnutie s vedúcim',
                        date: '24.3.2021',
                        link:
                            '/download/zapisnice/zapisnica17.pdf'
                    },
                    {
                        name: 'Zápisnica č.17 - stretnutie v tíme',
                        date: '29.3.2021',
                        link:
                            '/download/zapisnice/zapisnica17_17.pdf'
                    },
					{
                        name: 'Zápisnica č.18 - stretnutie s vedúcim',
                        date: '31.3.2021',
                        link:
                            '/download/zapisnice/zapisnica18.pdf'
                    },
                    {
                        name: 'Zápisnica č.18 - stretnutie v tíme',
                        date: '5.4.2021',
                        link:
                            '/download/zapisnice/zapisnica18_18.pdf'
                    },
					{
                        name: 'Zápisnica č.19 - stretnutie s vedúcim',
                        date: '7.4.2021',
                        link:
                            '/download/zapisnice/zapisnica19.pdf'
                    },
                    {
                        name: 'Zápisnica č.19 - stretnutie v tíme',
                        date: '12.4.2021',
                        link:
                            '/download/zapisnice/zapisnica19_19.pdf'
                    },
					{
                        name: 'Zápisnica č.20 - stretnutie s vedúcim',
                        date: '14.4.2021',
                        link:
                            '/download/zapisnice/zapisnica20.pdf'
                    },
					{
                        name: 'Zápisnica č.21 - stretnutie s vedúcim',
                        date: '21.4.2021',
                        link:
                            '/download/zapisnice/zapisnica21.pdf'
                    },

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
					},
					{
						name: 'Šprint 4',
						date: '16.12.2020',
						link:
							'/download/retrospektivy/Sprint4.pdf'
					},
					{
						name: 'Globálna retrospektíva po ZS',
						date: '16.12.2020',
						link:
							'/download/retrospektivy/Globalna_retrospektiva_ZS.pdf'
					},
					{
						name: 'Šprint 5',
						date: '3.3.2020',
						link:
							'/download/retrospektivy/Sprint5.pdf'
					},
					{
						name: 'Šprint 6',
						date: '17.3.2020',
						link:
							'/download/retrospektivy/Sprint6.pdf'
					},
					{
						name: 'Šprint 7',
						date: '31.3.2021',
						link:
							'/download/retrospektivy/Sprint7.pdf'
					},
					{
						name: 'Šprint 8',
						date: '14.4.2021',
						link:
							'/download/retrospektivy/Sprint8.pdf'
					},
					{
						name: 'Šprint 9',
						date: '21.4.2021',
						link:
							'/download/retrospektivy/Sprint9.pdf'
					},
					{
						name: 'Globálna retrospektíva po LS',
						date: '21.4.2021',
						link:
							'/download/retrospektivy/Globalna_retrospektiva_LS.pdf'
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
					},
					{
						name: 'Export úloh z 4.šprintu',
						date: '16.12.2020',
						link:
							'/download/exporty/export-uloh-sprint-4.pdf'
					},
					{
						name: 'Export úloh z 5.šprintu',
						date: '3.3.2021',
						link:
							'/download/exporty/export-uloh-sprint-5.pdf'
					},
					{
						name: 'Export úloh z 6.šprintu',
						date: '17.3.2021',
						link:
							'/download/exporty/export-uloh-sprint-6.pdf'
					}, 
					{
						name: 'Export úloh z 7.šprintu',
						date: '31.3.2021',
						link:
							'/download/exporty/export-uloh-sprint-7.pdf'
					}, 
					{
						name: 'Export úloh z 8.šprintu',
						date: '14.4.2021',
						link:
							'/download/exporty/export-uloh-sprint-8.pdf'
					},
					{
						name: 'Export úloh z 9.šprintu',
						date: '21.4.2021',
						link:
							'/download/exporty/export-uloh-sprint-9.pdf'
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
					},
					{
						name: 'Code review',
						date: '19.11.2020',
						link: '/download/metodiky/metodika-code-review.pdf'
					},
					{
						name: 'Testovanie',
						date: '20.11.2020',
						link: '/download/metodiky/metodika-testovania.pdf'
					}
				],
				'Dokumentácie': [
					{
						name: 'Dokumentácia riadenia',
						date: '27.4.2021',
						link:
							'/download/dokumentacie/dokumentacia_riadenia.pdf'
					},
					{
						name: 'Dokumentácia inžinierskeho diela',
						date: '27.4.2021',
						link:
							'/download/dokumentacie/dokumentacia_ing_diela.pdf'
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
