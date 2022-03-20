<template>
  <div class="relative mb-40">
    <div class="flex justify-center items-center relative z-50">
      <h1 class="uppercase">Katie Burton</h1>
    </div>
    <img
      class="sticker"
      id="sticker-uxr"
      src="~/assets/images/sticker-uxr.png"
      alt=""
    />
    <img
      class="sticker"
      id="sticker-visual"
      src="~/assets/images/sticker-visual.png"
      alt=""
    />
    <img
      class="sticker"
      id="sticker-3d"
      src="~/assets/images/sticker-3d.png"
      alt=""
    />
    <img
      class="sticker"
      id="sticker-usability"
      src="~/assets/images/sticker-usability.png"
      alt=""
    />
    <img
      class="sticker"
      id="sticker-ui"
      src="~/assets/images/sticker-ui.png"
      alt=""
    />
    <img
      class="sticker"
      id="sticker-motion"
      src="~/assets/images/sticker-motion.png"
      alt=""
    />
    <img
      class="sticker"
      id="sticker-branding"
      src="~/assets/images/sticker-branding.png"
      alt=""
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-size: 10rem;
}

.sticker {
  max-width: 250px;
  max-height: 150px;
  object-fit: contain;
  @apply absolute;
  transition: all 0.1s ease-in-out;
}

.sticker:hover {
  transform: rotate(8deg) scale(1.1) !important;
}

@screen md {
  h1 {
    font-size: 20rem;
    line-height: 15rem;
    text-align: center;
  }
}

@screen lg {
  #sticker-uxr {
    top: -6rem;
    left: -4rem;
    transform: rotate(-15deg);
  }

  #sticker-visual {
    top: -8rem;
    right: -6rem;
    transform: rotate(4deg);
    z-index: 100;
  }
  #sticker-3d {
    bottom: 2rem;
    left: -7rem;
    transform: rotate(-15deg);
    z-index: 10;
    max-width: 150px;
  }
  #sticker-usability {
    bottom: -5rem;
    left: -8rem;
    transform: rotate(-15deg);
    z-index: 10;
    max-width: 120px;
  }
  #sticker-ui {
    bottom: -2rem;
    left: -0.5rem;
    transform: rotate(-10deg);
    z-index: 100;
    max-width: 160px;
  }
  #sticker-motion {
    bottom: 1rem;
    right: -10rem;
    transform: rotate(4deg);
    z-index: 10;
    max-width: 160px;
  }
  #sticker-branding {
    bottom: -1rem;
    right: -6rem;
    z-index: 10;
    max-width: 180px;
  }
}
</style>
