<template>
	<div class="w-1/4 mb-32">
		<div class="h-64 flex relative items-end">
			<img
				class="w-full h-auto absolute person-image"
				:src="image"
				:alt="name"
			/>
			<div class="h-40 w-full block bg-primary"></div>
		</div>
		<div class="bg-cyan-100 py-4 text-center">
			<strong class="text-primary text-xl">
				{{ name }}
			</strong>
			<div
				class="border-b-2 border-primary w-3/4 mx-auto text-center description-box"
			>
				<p class="text-gray-500 mb-4 mt-3">
					{{ description }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		image: String,
		name: String,
		description: String
	}
};
</script>

<style lang="scss" scoped>
.person-image {
	bottom:0;
}

.description-box {
	max-height: 5rem;
}
</style>
