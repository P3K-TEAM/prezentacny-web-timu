<template>
	<div class="w-1/4 flex flex-col justify-end mt-48">
		<div class="flex relative items-end">
			<img
				class="w-auto absolute person-image"
				:src="image"
				:alt="name"
			/>
			<div class="h-32 w-full bg-primary"></div>
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
	bottom: 0;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	height: 18rem;
}

.description-box {
	height: 4rem;
}
</style>
