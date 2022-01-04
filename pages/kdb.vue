<template>
  <div class="p-4 w-full text-center">
    <ImageLightbox img="kdb-1.png" description="All UI designs." />
    <div class="text-left mw-800 mx-auto my-8">
      <h2 class="main-font text-9xl uppercase">Katja De Bourbon</h2>
      <p>
        With
        <a
          class="underline"
          href="https://www.katjadebourbon.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Katja de Bourbon</a
        >
        , I designed and developed a portfolio that showcases her creativity and vision.
      </p>
    </div>

    <ImageLightbox img="kdb-2.png" description="About page." />
    <ImageLightbox img="kdb-3.png" description="Lightbox page." />
    <ImageLightbox img="kdb-4.png" description="Contact page." />
  </div>
</template>

<script>
import ImageLightbox from "../components/ImageLightbox.vue";
export default {
  components: { ImageLightbox },
};
</script>

<style scoped>
.mw-800 {
  max-width: 800px;
}
</style>
