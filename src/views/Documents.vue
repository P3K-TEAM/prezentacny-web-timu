<template>
	<div>
		<DocumentItem v-for="document in documents" :key="document.name" :name="document.name" :link="document.link">

		</DocumentItem>
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
			documents:[
				{name:"report.pdf", link:"/document/report.pdf"},
				{name:"report.pdf", link:"/document/report.pdf"},
				{name:"report.pdf", link:"/document/report.pdf"},
				{name:"report.pdf", link:"/document/report.pdf"}
			]
		};
	}
};
</script>
