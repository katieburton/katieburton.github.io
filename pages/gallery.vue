<template>
  <div class="p-4 w-full">
    <ImageLightbox class="my-6" img="hackademics.gif" description="Hackademics 2019" />
    <ImageLightbox class="my-6" img="goliath.png" description="Goliath Branding" />
    <ImageLightbox class="my-6" img="kineticType.gif" description="Kinetic Typography" />
    <ImageLightbox
      class="my-6"
      img="leoMarin.png"
      description="Leo Marin Business Card"
    />
    <ImageLightbox
      class="my-6"
      img="workCulture.png"
      description="Work Culture in Japan Infographic"
    />
    <ImageLightbox
      class="my-6"
      img="touchDesigner-1.gif"
      description="TouchDesigner experiment"
    />
    <ImageLightbox
      class="my-6"
      img="touchDesigner-2.gif"
      description="TouchDesigner experiment"
    />
  </div>
</template>

<script>
import ImageLightbox from "../components/ImageLightbox.vue";
export default {
  components: { ImageLightbox },
};
</script>

<style></style>
