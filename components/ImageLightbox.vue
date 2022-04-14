<template>
  <div class="py-6 text-center">
    <img :src="require('~/assets/images/' + img)" alt="" @click="toggle" />
    <p v-if="description" class="my-2 uppercase text-center">
      {{ description }}
    </p>
    <div v-if="tag" class="tag inline-block">{{ tag }}</div>

    <div
      class="lightbox text-right"
      :class="{ active: active }"
      @click="toggleOutside"
    >
      <p class="underline uppercase" @click="toggle">Close</p>
      <img :src="require('~/assets/images/' + img)" alt="" />
      <p class="text-center uppercase w-full">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "description", "tag"],
  data() {
    return {
      active: false,
    };
  },
  mounted() {},
  methods: {
    toggle() {
      this.active = !this.active;

      if (this.active) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
    toggleOutside(e) {
      // if (e.target == e.currentTarget)
      this.active = !this.active;

      if (this.active) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  },
};
</script>

<style scoped>
img {
  max-width: 1024px;
  max-height: 80vh;
  cursor: pointer;

  @apply object-contain w-full h-full mx-auto;
}

.lightbox {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  backdrop-filter: blur(10px) grayscale(100%) brightness(0.2);
  padding: 1rem;
}

.lightbox.active {
  display: flex;
}

.lightbox img {
  max-width: 90%;
  max-height: 90%;
  padding: 0 1rem;
  object-fit: contain;
  margin: 1rem auto;
}

.lightbox p {
  color: white;
}
</style>
