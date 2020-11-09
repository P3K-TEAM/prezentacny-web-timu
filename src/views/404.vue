<template>
	<div class="flex flex-col items-center bg-gray-100 pt-20">
		<span class="not-found text-bold text-primary leading-none">
			404
		</span>
		<span class="text-bold text-2xl">
			Ups! Nič sme nenašli...
		</span>
		<router-link
			to="/"
			class="bg-primary hover:bg-accent font-bold text-white rounded mt-5 py-2 px-4 cursor-pointer"
		>
			Ísť na domov
		</router-link>
	</div>
</template>

<style scoped>
.not-found {
	font-size: 10em;
}
</style>
