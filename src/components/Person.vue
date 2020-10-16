<template>
	<div class="w-64">
		<img :src="image" alt="" />
		<div class="bg-green-200 py-4">
			<strong class="text-green-500">
				{{ name }}
			</strong>
			<div class="border-b-2 border-green-500 ">
				<p class="text-gray-500 mb-3">
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
