<template>
  <div class="text-center mb-8">
    <div id="banner" class="relative w-screen">
      <div class="track whitespace-nowrap absolute">
        <div class="marquee-text-group">
          <span class="marquee-text">
            Currently looking for full-time or freelance opportunities.
          </span>
          <span class="marquee-text">
            Currently looking for full-time or freelance opportunities.
          </span>
          <span class="marquee-text">
            Currently looking for full-time or freelance opportunities.
          </span>
          <span class="marquee-text">
            Currently looking for full-time or freelance opportunities.
          </span>
          <span class="marquee-text">
            Currently looking for full-time or freelance opportunities.
          </span>
          <span class="marquee-text">
            Currently looking for full-time or freelance opportunities.
          </span>
        </div>
      </div>
    </div>
    <nav class="mt-8 uppercase">
      <ul class="flex justify-center font-bold">
        <li><NuxtLink to="/">Work</NuxtLink></li>
        <li><NuxtLink to="/illustration">Illustration</NuxtLink></li>
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

#banner {
  max-width: 100%;
  overflow-x: hidden;
  background-color: #886bdb;
  color: white;
  height: 2.25rem;
  padding: 0.3rem 0;
  font-size: 1rem;
}

.marquee-text-group {
  will-change: transform;
  animation: marquee 23s linear infinite;
}

.marquee-text {
  @apply mx-8;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
