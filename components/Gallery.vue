<template>
	<div>
		<div id="modal">
			<img :src="currentImg" alt="" />
		</div>
		<!-- <div v-for="(galler, index) in gallery" :key="index">
			{{ galler.description }}
		</div> -->

		<div data-aos="fade-up" data-aos-delay="300" id="spark" class="work-group">
			<img src="~/assets/images/SparkApp.png" alt="" />
			<p class="description">spark app ui designs, 2021.</p>
		</div>
		<div
			data-aos="fade-up"
			data-aos-delay="300"
			id="sweetDelights"
			class="work-group"
		>
			<img src="~/assets/images/SweetDelights.png" alt="" />
			<p class="description">sweet delights bakery branding, 2021.</p>
		</div>
		<div
			data-aos="fade-up"
			data-aos-delay="300"
			id="leoMarin"
			class="work-group"
		>
			<img src="~/assets/images/LeoMarin.png" alt="" />
			<p class="description">LEO MARIN branding, 2021.</p>
		</div>
		<div
			data-aos="fade-up"
			data-aos-delay="300"
			id="milesJoseph"
			class="work-group"
		>
			<img src="~/assets/images/MilesJoseph.png" alt="" />
			<p class="description">miles joseph photography branding, 2021.</p>
		</div>
		<div data-aos="fade-up" data-aos-delay="300" id="nob" class="work-group">
			<div class="flex">
				<div class="w-6/12">
					<img src="~/assets/images/NoB-1.png" alt="" />
				</div>
				<div class="w-6/12 flex flex-col">
					<img class="img-cover" src="~/assets/images/NoB-2.png" alt="" />
					<img class="img-cover" src="~/assets/images/NoB-3.png" alt="" />
				</div>
			</div>
			<p class="description">north of brooklyn rebrand, 2020.</p>
		</div>
		<div
			data-aos="fade-up"
			data-aos-delay="300"
			id="goliath"
			class="work-group"
		>
			<img src="~/assets/images/Goliath.png" alt="" />
			<p class="description">goliath skateboard deck designs, 2020.</p>
		</div>
		<div
			data-aos="fade-up"
			data-aos-delay="300"
			id="hackville"
			class="work-group"
		>
			<div class="flex flex-col">
				<div>
					<img src="~/assets/images/Hackville-1.png" alt="" />
				</div>
				<div class="flex">
					<div>
						<img src="~/assets/images/Hackville-2.png" alt="" />
					</div>
					<div>
						<img src="~/assets/images/Hackville-3.png" alt="" />
					</div>
				</div>
			</div>
			<p class="description">hackville 2019 branding assets, 2019.</p>
		</div>
		<div
			data-aos="fade-up"
			data-aos-delay="300"
			id="hackademics"
			class="work-group"
		>
			<img src="~/assets/images/Hackademics.gif" alt="" />
			<p class="description">
				hackademics club motion graphics instagram promo, 2019.
			</p>
		</div>
		<div
			data-aos="fade-up"
			data-aos-delay="300"
			id="workCulture"
			class="work-group"
		>
			<img src="~/assets/images/WorkCulture.png" alt="" />
			<p class="description">
				megamap Infographic about work culture in japan, 2019.
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currentImg: null,
			}
		},
	}
</script>

<style scoped>
	p {
		@apply uppercase mt-4;
	}

	.work-group {
		max-width: 1024px;

		@apply text-center my-12 mx-auto;
	}

	img {
		max-height: 80vh;

		@apply object-contain w-full h-full;
	}

	.img-cover {
		object-fit: cover !important;
	}
</style>