<template>
  <div class="p-4 w-full text-center">
    <ImageLightbox img="hackville-1.png" description="UI Home page design." />
    <div class="text-left mw-800 mx-auto my-8">
      <h2 class="main-font text-9xl uppercase">Hackville 2020</h2>
      <p>
        Hackville is Sheridan College’s student-led hackathon run by the Hackademics Club.
        Hackville welcomes all, from first-time hackers to seasoned pros to take part in
        social good challenges hosted by various sponsors.
        <br /><br />
        With this project, I mobilized a small team of designers to create visual assets
        and promotional content for the event. To help uphold visual consistency I
        designed a brand and illustration guide.
      </p>
    </div>

    <ImageLightbox img="hackville-2.png" description="Pages from Brand Guide." />
    <ImageLightbox img="hackville-3.png" description="Pages from Illustration Guide." />
    <ImageLightbox img="hackville-4.png" description="Event banner." />
    <ImageLightbox img="hackville-5.png" description="Event schedule." />
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
