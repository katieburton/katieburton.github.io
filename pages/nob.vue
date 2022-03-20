<template>
  <div class="p-4 w-full text-center">
    <ImageLightbox img="NoB-1.png" description="UI Home page design." />
    <div class="text-left mw-800 mx-auto my-8">
      <h2 class="main-font text-9xl uppercase">North of Brooklyn</h2>
      <p>
        I did a rebrand for the Toronto pizzeria, North of Brooklyn with the
        goal of creating a loud, industrial, and unique personality for the
        brand.
        <br /><br />
        This was a personal project, not affiliated with North of Brooklyn.
      </p>
    </div>

    <ImageLightbox img="NoB-2.png" description="Menu page." />
    <ImageLightbox img="nob-3.png" description="About page." />
    <ImageLightbox img="nob-4.png" description="Jobs page." />
    <div class="flex justify-center items-center gap-10">
      <ImageLightbox img="nob-5.png" description="Final mark." />
      <ImageLightbox img="nob-6.png" description="Final logotype." />
    </div>
    <ImageLightbox img="nob-7.png" description="Other concepts." />
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
