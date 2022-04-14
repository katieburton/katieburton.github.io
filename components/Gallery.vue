<template>
	<div>
		<div v-for="(gal, index) in gallery" :key="index">
			<div :id="gal.name" v-if="gal.link != null" class="work-group">
				<ImageLightbox :img="gal.link" />
			</div>
			<div
				:id="gal.name"
				v-if="gal.links != null"
				class="overflow-auto inline-block whitespace-nowrap w-full h-full"
			>
				<div
					v-for="(link, index) in gal.links"
					:key="index"
					class="inline-block align-middle h-full mx-12"
				>
					<ImageLightbox :img="link" />
				</div>
			</div>
			<p class="uppercase text-center">
				{{ gal.description }}
			</p>
		</div>
	</div>
</template>

<script>
	import ImageLightbox from "./ImageLightbox.vue";
	import { gallery } from "../data";

	export default {
		components: { ImageLightbox },
		data() {
			return {
				currentImg: null,
				gallery: gallery,
			};
		},
	};
</script>

<style scoped>
	p {
		@apply uppercase mt-4;
	}

	.work-group {
		@apply text-center my-12 mx-auto;
	}
</style>