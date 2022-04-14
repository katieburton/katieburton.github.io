<template>
  <div class="text-center mb-8">
    <div id="banner" class="z-1000 relative w-screen">
      <div class="track whitespace-nowrap absolute">
        <div class="marquee-text-group">
          <span class="marquee-text"
            >👀 Currently looking for full-time or freelance opportunities.
          </span>
          <span class="marquee-text"
            >👀 Currently looking for full-time or freelance opportunities.
          </span>
          <span class="marquee-text">
            👀 Currently looking for full-time or freelance opportunities.
          </span>
          <span class="marquee-text">
            👀 Currently looking for full-time or freelance opportunities.
          </span>
          <span class="marquee-text">
            👀 Currently looking for full-time or freelance opportunities.
          </span>
          <span class="marquee-text">
            👀 Currently looking for full-time or freelance opportunities.
          </span>
        </div>
      </div>
    </div>
    <nav
      class="z-1000 relative pt-6 pb-4 uppercase flex justify-between px-4 kb-max-w"
    >
      <div class="main-font text-6xl">
        <nuxt-link to="/">KB</nuxt-link>
      </div>
      <ul class="hidden md:flex justify-center font-bold gap-8">
        <li><NuxtLink class="menu-item" to="/">Case Studies</NuxtLink></li>
        <li><NuxtLink class="menu-item" to="/gallery">Gallery</NuxtLink></li>
        <li>
          <NuxtLink class="menu-item" to="/illustration">Illustration</NuxtLink>
        </li>

        <li><NuxtLink class="menu-item" to="/about">About</NuxtLink></li>
        <li>
          <a
            class="menu-item"
            href="https://drive.google.com/file/d/1jIyAHxbtjbMgIPdDfewqiZALMlxH-oTI/view?usp=sharing"
            target="_blank"
            >Resume</a
          >
        </li>
      </ul>
      <div class="hidden md:flex gap-4 items-center">
        <a href="https://www.linkedin.com/in/k-burton/" target="_blank">
          <img class="social-icon" src="~assets/icons/LinkedIn.svg" alt=""
        /></a>
        <a href="mailto:katxburton@gmail.com" target="_blank">
          <img
            style="width: 28px; height: 28px"
            class="social-icon"
            src="~assets/icons/Email.svg"
            alt=""
        /></a>
      </div>
      <div class="flex items-center md:hidden">
        <div @click="toggleNav" class="menu-btn">
          <div class="btn-1"></div>
          <div class="btn-2"></div>
        </div>
      </div>
    </nav>
    <div
      @click="toggleNav"
      class="uppercase mobile-nav flex flex-col items-center justify-center py-8"
    >
      <ul>
        <li class="main-font">
          <nuxt-link to="/">Case Studies</nuxt-link>
        </li>
        <li class="main-font">
          <nuxt-link to="/gallery">Gallery</nuxt-link>
        </li>
        <li class="main-font">
          <nuxt-link to="/illustration">Illustration</nuxt-link>
        </li>
        <li class="main-font">
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li class="main-font">
          <a
            href="https://drive.google.com/file/d/1jIyAHxbtjbMgIPdDfewqiZALMlxH-oTI/view?usp=sharing"
            target="_blank"
            >Resume</a
          >
        </li>
      </ul>
      <div class="flex gap-4 items-center">
        <a href="https://www.linkedin.com/in/k-burton/" target="_blank">
          <img src="~assets/icons/LinkedIn.svg" alt=""
        /></a>
        <a href="mailto:kat.x.burton@gmail.com" target="_blank">
          <img src="~assets/icons/Email.svg" alt=""
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleNav() {
      document.querySelector(".mobile-nav").classList.toggle("show");
      document.querySelector(".btn-1").classList.toggle("open");
      document.querySelector(".btn-2").classList.toggle("open");
    },
  },
};
</script>

<style scoped>
a.menu-item {
  color: #191919;
  opacity: 0.4;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
}

a:hover {
  opacity: 0.8;
}
a.menu-item.nuxt-link-exact-active {
  opacity: 1;
}

#banner {
  max-width: 100%;
  overflow-x: hidden;
  background-color: #886bdb;
  color: white;
  height: 2.25rem;
  padding: 0.3rem 0;
  font-size: 1rem;
}

.marquee-text-group {
  will-change: transform;
  animation: marquee 23s linear infinite;
}

.marquee-text {
  @apply mx-8;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.menu-btn {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: end;
  padding: 10px 0;
}

.btn-1 {
  position: relative;
  top: 0px;
  width: 80%;
  height: 2px;
  background: black;
  border-radius: 5px;
  transition: all 0.5s linear;
}
.btn-2 {
  width: 40%;
  height: 2px;
  background: black;
  border-radius: 5px;
  transition: all 0.5s linear;
}

.btn-1.open {
  top: 8px;
  width: 80%;
  height: 2px;
  background: black;
  border-radius: 5px;
  transform: rotate(-45deg);
}
.btn-2.open {
  width: 80%;
  height: 2px;
  background: black;
  border-radius: 5px;
  transform: rotate(45deg);
}

nav {
  background-color: #f9f9f9;
}

.mobile-nav {
  background-color: #f9f9f9;
  z-index: 999;
  width: 100%;
  position: fixed;
  top: 7.5rem;
  left: 0;
  transform: translate(0, -200%);
  transition: all 0.5s linear;
}

.mobile-nav li {
  font-size: 5rem;
  line-height: 100%;
}

.mobile-nav.show {
  transform: translate(0, 0);
}

.z-1000 {
  z-index: 1000;
}

.social-icon {
  width: 25px;
  height: 25px;
  object-fit: contain;
}
</style>
