<template>
  <div class="text-center uppercase my-8">
    <nav>
      <ul class="flex justify-center">
        <li><NuxtLink to="/">Work</NuxtLink></li>
        <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
li {
  @apply mx-4;
}

a {
  color: #191919;
  opacity: 0.4;
  transition: all 0.2s ease-in-out;
}

a:hover {
  opacity: 0.8;
}
a.nuxt-link-exact-active {
  opacity: 1;
}
</style>
