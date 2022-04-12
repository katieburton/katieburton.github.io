<template>
  <footer class="text-center py-8">
    <div class="my-32">
      <div class="text-4xl font-normal">Want to know more?</div>
      <button>Let's Chat</button>
    </div>
    <ul class="hidden md:flex justify-center font-bold gap-8 uppercase my-8">
      <li><NuxtLink to="/">Case Studies</NuxtLink></li>
      <li><NuxtLink to="/illustration">Illustration</NuxtLink></li>
      <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
    </ul>
    <div class="credits">
      Katie Burton © 2022<br />Dev by
      <a class="underline" href="https://www.roneilla.com" target="_blank"
        >Roneilla Bumanlag</a
      >
    </div>
  </footer>
</template>

<script>
import Nav from "./Nav.vue";
export default {
  props: ["showCTA"],
  components: { Nav },
};
</script>

<style scoped>
a {
  color: #191919;
  opacity: 0.4;
  transition: all 0.2s ease-in-out;
}

a:hover {
  opacity: 0.8;
}
.credits {
  font-size: 1rem;
  color: #333;
}
button {
  background: black;
  color: white;
  padding: 0.5rem 1rem;
  margin: 2rem 0;
}
</style>
