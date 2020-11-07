<template>
	<div id="app" class="flex flex-col h-full">
		<Navigation />
		<router-view class="flex-auto mt-20" />
		<Footer />
	</div>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
	components: {
		Navigation,
		Footer
	}
};
</script>
