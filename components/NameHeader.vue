<template>
  <div class="relative mb-40 kb-max-w ctr">
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
  font-size: 7rem;
  /* line-height: 7rem; */
}

.sticker {
  max-width: 200px;
  max-height: 100px;
  object-fit: contain;
  @apply absolute;
  transform: scale(0.8);
  transition: all 0.1s ease-in-out;
}

.sticker:hover {
  transform: rotate(8deg) scale(1) !important;
}

#sticker-uxr {
  top: -1rem;
  left: -2rem;
  transform: rotate(-15deg) scale(0.8);
}

#sticker-visual {
  top: -4rem;
  right: -1rem;
  transform: rotate(4deg) scale(0.8);
  z-index: 100;
}
#sticker-3d {
  bottom: -1rem;
  left: -4rem;
  transform: rotate(-15deg) scale(0.8);
  z-index: 10;
  max-width: 150px;
}
#sticker-usability {
  bottom: -5rem;
  left: -3rem;
  transform: rotate(-15deg) scale(0.8);
  z-index: 10;
  max-width: 120px;
}
#sticker-ui {
  bottom: -1.5rem;
  left: 0.5rem;
  transform: rotate(-10deg) scale(0.8);
  z-index: 100;
  max-width: 160px;
}
#sticker-motion {
  bottom: 0rem;
  right: -3rem;
  transform: rotate(4deg) scale(0.8);
  z-index: 10;
  max-width: 160px;
}
#sticker-branding {
  bottom: -1rem;
  right: 0rem;
  z-index: 10;
  max-width: 180px;
  transform: rotate(4deg) scale(0.8);
}

@screen md {
  .ctr {
    transform: scale(1.5);
  }
}

@screen lg {
  .ctr {
    transform: scale(1);
  }

  .sticker {
    max-width: 250px;
    max-height: 150px;
    transform: scale(1);
  }
  .sticker:hover {
    transform: rotate(8deg) scale(1.1) !important;
  }
  h1 {
    font-size: 20rem;
    line-height: 15rem;
    text-align: center;
  }

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
