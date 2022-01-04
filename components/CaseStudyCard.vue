<template>
  <div class="text-center relative">
    <NuxtLink :to="link">
      <div class="card-inner-container kb-border-top kb-border-bottom" :id="idName">
        <div class="text-8xl main-font uppercase">
          {{ description }}
        </div>
        <div class="case-card-tags text-center flex w-full justify-center">
          <div class="uppercase px-2" v-for="(tag, index) in tags" :key="index">
            {{ tag }}
          </div>
        </div>
        <img
          :src="require('~/assets/images/' + name + '-t-1.png')"
          alt=""
          class="thumbnail-left"
        />
        <img
          :src="require('~/assets/images/' + name + '-t-2.png')"
          alt=""
          class="thumbnail-right"
        />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["idName", "name", "description", "link", "thumbnail", "tags"],
};
</script>

<style scoped>
.card-inner-container {
  max-width: 400px;

  @apply py-6 w-full mx-auto;
}

#case-4 {
  border-bottom: 1px solid black;
}

.case-card-tags {
  display: none;
}

.thumbnail-left,
.thumbnail-right {
  position: absolute;
  max-height: 300px;
  max-width: 300px;
  object-fit: contain;
  opacity: 0;
  z-index: -1;
  transition: all 0.2s ease-in-out;
}

.card-inner-container:hover .thumbnail-left,
.card-inner-container:hover .thumbnail-right {
  opacity: 1;
}

.card-inner-container:hover .case-card-tags {
  display: flex;
}

.thumbnail-left {
  top: 0;
  left: 2rem;
  transform: rotate(-15deg);
}
.thumbnail-right {
  bottom: 0;
  right: 2rem;
  transform: rotate(15deg);
}
</style>
