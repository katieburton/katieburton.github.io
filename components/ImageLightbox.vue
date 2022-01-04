<template>
  <div class="py-6">
    <img :src="require('~/assets/images/' + img)" alt="" @click="toggle" />
    <p class="my-2 text-center">
      {{ description }}
    </p>

    <div class="lightbox text-right" :class="{ active: active }" @click="toggleOutside">
      <p class="underline uppercase" @click="toggle">Close</p>
      <img :src="require('~/assets/images/' + img)" alt="" />
      <p class="text-center w-full">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "description"],
  data() {
    return {
      active: false,
    };
  },
  mounted() {},
  methods: {
    toggle() {
      this.active = !this.active;
    },
    toggleOutside(e) {
      if (e.target == e.currentTarget) this.active = !this.active;
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
  backdrop-filter: blur(6px);
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
