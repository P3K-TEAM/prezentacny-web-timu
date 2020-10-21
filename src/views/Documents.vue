<template>
	<div class="bg-gray-200">
		<div class="container mx-auto mt-10">
			<h1 class="text-2xl font-bold mb-4">
				Dokumenty
			</h1>
			<div>
				<DocumentTab
					v-for="tab in Object.keys(documents)"
					:key="tab"
					:title="tab"
					:active="tab === selectedTab"
					@click.native="selectedTab = tab"
				/>
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
import DocumentTab from '@/components/Document/DocumentTab.vue';
import DocumentItem from '@/components/Document/DocumentItem.vue';

export default {
	components: {
		DocumentItem,
		DocumentTab
	},
	data: function() {
		return {
			selectedTab: 'Zápisnice',
			documents: {
				'Zápisnice': [
					{
						name: 'zapisnica_1.pdf',
						date: '08.10.2020',
						link: '/download/zapisnica_1.pdf'
					},
					{
						name: 'zapisnica_2.pdf',
						date: '11.10.2020',
						link: '/download/zapisnica_2.pdf'
					},
					{
						name: 'zapisnica_3.pdf',
						date: '21.10.2020',
						link: '/download/zapisnica_3.pdf'
					}
				],
				'Retrospektívy': [
					{
						name: 'sprint_0_retro.pdf',
						date: '22.10.2020',
						link: '/download/sprint_0_retro.pdf'
					}
				],
				'Exporty úloh': [],
				'Metodiky': [
					{
						name: 'metodika-vue.pdf',
						date: '21.10.2020',
						link: '/download/metodika-vue.pdf'
					},
					{
						name: 'metodika-git.pdf',
						date: '19.10.2020',
						link: '/download/metodika-.pdf'
					},
					{
						name: 'metodika-django.pdf',
						date: '16.10.2020',
						link: '/download/metodika-django.pdf'
					}
				]
			}
		};
	}
};
</script>
