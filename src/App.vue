<template>
	<div id="app">
		<Navigation />
		<router-view />
	</div>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation.vue';

export default {
	components: {
		Navigation
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
</style>
