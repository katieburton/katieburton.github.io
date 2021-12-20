<template>
	<div class="text-center uppercase my-8">
		<h1 class="text-8xl">Katie Burton</h1>
		<nav>
			<ul class="flex justify-center">
				<li><NuxtLink to="/">Gallery</NuxtLink></li>
				<li><NuxtLink to="/about">About</NuxtLink></li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {}
</script>

<style scoped>
	li {
		@apply mx-4;
	}

	a.nuxt-link-exact-active {
		border-bottom: 2px solid grey;
		padding-bottom: 0.1rem;
	}
</style>