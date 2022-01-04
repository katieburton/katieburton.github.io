<template>
  <div class="p-4 w-full text-center">
    <ImageLightbox img="sweetDelights-1.png" description="Business card design." />
    <div class="text-left mw-800 mx-auto my-8">
      <h2 class="main-font text-9xl uppercase">Sweet Delights</h2>
      <p>
        Sweet Delights is a home bakery offering custom treats for any occasion owned.
        <br />
        <br />
        With the branding, I wanted to create a fun, friendly, and elegant aesthetic that
        matched the look of their desserts.
      </p>
    </div>

    <ImageLightbox img="sweetDelights-2.png" description="Pages from Brand Guide." />
    <ImageLightbox
      img="sweetDelights-3.png"
      description="Designs for social media highlights."
    />
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
