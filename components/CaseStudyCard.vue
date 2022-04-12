<template>
  <div class="w-full my-16">
    <NuxtLink :to="link">
      <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <div class="block md:hidden">
          <div class="text-8xl main-font uppercase leading-none">
            {{ title }}
          </div>
          <div class="flex gap-2 w-full justify-center my-2">
            <div
              class="uppercase tag"
              v-for="(tag, index) in tags"
              :key="index"
            >
              {{ tag }}
            </div>
          </div>
        </div>
        <div class="md:w-5/12">
          <img
            class="w-full h-3/6 md:h-auto object-cover"
            :src="require('~/assets/images/' + name + '-t-1.png')"
            alt=""
          />
        </div>
        <div class="flex-1 text-left">
          <div class="md:w-9/12 mx-auto">
            <div class="hidden md:block">
              <div class="text-8xl main-font uppercase">
                {{ title }}
              </div>
              <div>
                {{ description }}
              </div>
              <div class="flex gap-2 w-full justify-start my-4">
                <div
                  class="uppercase tag"
                  v-for="(tag, index) in tags"
                  :key="index"
                >
                  {{ tag }}
                </div>
              </div>
            </div>

            <div class="purple font-bold my-2 md:my-16 text-right md:text-left">
              View case study &rarr;
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="card-outer-container">
        <div
          class="card-inner-container kb-border-top kb-border-bottom"
          :id="idName"
        >
          <div class="text-8xl main-font uppercase">
            {{ description }}
          </div>
          <div class="case-card-tags text-center flex w-full justify-center">
            <div
              class="uppercase px-2"
              v-for="(tag, index) in tags"
              :key="index"
            >
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
      </div> -->
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: [
    "idName",
    "name",
    "title",
    "description",
    "link",
    "thumbnail",
    "tags",
  ],
};
</script>

<style scoped>
@screen md {
  img {
    height: 80vh;
  }
}

.card-outer-container {
  width: 100%;
}

.card-inner-container {
  max-width: 400px;

  @apply py-6 w-full mx-auto;
}

#case-4 {
  border-bottom: 1px solid black;
}

.thumbnail-left,
.thumbnail-right {
  position: absolute;
  max-height: 50vh;
  max-width: 50vw;
  object-fit: contain;
  opacity: 0;
  z-index: -1;
  transition: all 0.2s ease-in-out;
}

.card-outer-container:hover .thumbnail-left,
.card-outer-container:hover .thumbnail-right {
  opacity: 1;
}

.thumbnail-left {
  top: 25%;
  left: 2rem;
  transform: rotate(-15deg);
}
.thumbnail-right {
  top: 0;
  right: 2rem;
  transform: rotate(15deg);
}
</style>
