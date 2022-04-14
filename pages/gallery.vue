<template>
  <div class="p-4 w-full">
    <ImageLightbox
      class="my-6"
      img="Hackademics.gif"
      description="Hackademics, 2019."
      tag="Motion Graphics"
    />
    <ImageLightbox
      class="my-6"
      img="sweetDelights-1.png"
      description="Sweet Delights Bakery Business Card, 2021."
      tag="Branding"
    />
    <ImageLightbox
      class="my-6"
      img="sweetDelights-2.png"
      description="Sweet Delights Bakery Brand Guide, 2021."
      tag="Branding"
    /><ImageLightbox
      class="my-6"
      img="NOB_Branding.png"
      description="North of Brooklyn (Personal Project), 2020."
      tag="Branding"
    />

    <div class="my-6 gallery-max-w mx-auto text-center">
      <div class="video-container mx-auto">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eVHkGlZmBBM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p class="my-2 uppercase text-center">
        North of Brooklyn (Personal Project), 2020.
      </p>
      <div class="tag inline-block">UI Design</div>
    </div>
    <ImageLightbox
      class="my-6"
      img="Goliath.png"
      description="goliath skateboard deck designs, 2020."
      tag="Branding"
    />
    <ImageLightbox
      class="my-6"
      img="kineticType.gif"
      description="Kinetic typography, 2018."
      tag="motion graphics"
    />
    <ImageLightbox
      class="my-6"
      img="Leo_Marin_Business_Cards.png"
      description="LEO MARIN private Bartending, 2021."
      tag="Branding"
    />
    <ImageLightbox
      class="my-6"
      img="WorkCulture.png"
      description="megamap Infographic about work culture in japan, 2019."
      tag="visual design"
    />
    <ImageLightbox img="touchDesigner-1.gif" />
    <ImageLightbox img="touchDesigner-2.gif" />
    <ImageLightbox img="TD_SwirlParticles.gif" />
    <ImageLightbox
      class="mt-2 mb-6"
      img="TD_GenerativeLiquidPainting.gif"
      description="Touchdesigner experiments, 2021."
      tag="Experiments"
    />
    <ImageLightbox
      class="my-6"
      img="grinch.gif"
      description="Blender visuals, 2022"
      tag="3d Modelling"
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
.gallery-max-w {
  max-width: 1024px;
}
</style>
