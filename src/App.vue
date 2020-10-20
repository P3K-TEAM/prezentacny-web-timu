<template>
	<div id="app" class="flex flex-col h-full">
		<Navigation />
		<router-view class="flex-auto" />
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

<style lang="scss">
#app {
	font-family: Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

html,
body {
	height: 100%;
	margin: 0;
}
</style>
