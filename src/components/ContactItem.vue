<template>
	<div class="py-4 text-left px-4">
		<div class="border-b-2 border-primary mx-auto">
			<i :class="icon"></i>
			<p>{{ text }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		text: String,
		icon: String
	}
};
</script>
