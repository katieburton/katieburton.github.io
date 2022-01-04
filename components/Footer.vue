<template>
  <footer class="text-center py-8">
    <div class="my-32">
      <div class="text-4xl font-normal">Want to know more?</div>
      <button>Let's Chat</button>
    </div>
    <Nav />
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
  components: { Nav },
};
</script>

<style scoped>
.credits {
  font-size: 1rem;
  color: #666;
}
button {
  background: black;
  color: white;
  padding: 0.5rem 1rem;
  margin: 2rem 0;
}
</style>
