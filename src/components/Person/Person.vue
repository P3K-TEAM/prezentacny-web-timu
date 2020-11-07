<template>
	<div
		class="flex flex-col w-full sm:w-1/2 lg:w-1/4 justify-end px-10 sm:px-0 mt-20 sm:mt-48"
		data-e2e-id="person"
	>
		<div class="flex relative items-end">
			<img
				class="w-auto absolute person-image"
				:src="image"
				:alt="name"
			>
			<div class="h-64 sm:h-32 w-full bg-primary" />
		</div>
		<div class="bg-cyan-100 py-4 text-center">
			<strong
				class="text-primary text-xl"
				data-e2e-id="personName"
			>
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

<style scoped>
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
