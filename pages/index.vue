<template>
  <div class="p-4 w-full">
    <div
      class="hero flex flex-col md:justify-center items-center w-full kb-max-w"
    >
      <NameHeader />
      <div
        class="flex justify-between items-center w-full flex-col md:flex-row gap-6"
      >
        <div class="flex-1 text-center">
          <div>
            <strong>Visual and UX Designer </strong> based in
            <strong> Toronto </strong>passionate about exploring bold aesthetics
            and intuitive experiences.
          </div>
          <div class="line-container">
            <div class="hscroll-line"></div>
          </div>
        </div>

        <!-- <div class="flex-initial text-center">VIEW WORK BELOW</div> -->
      </div>
    </div>

    <div>
      <CaseStudyMenu />
    </div>

    <!-- <Gallery /> -->
  </div>
</template>

<script>
import CaseStudyMenu from "../components/CaseStudyMenu.vue";
import NameHeader from "../components/NameHeader.vue";
export default {
  components: { CaseStudyMenu, NameHeader },
  name: "IndexPage",
};
</script>

<style scoped>
.hero {
  height: 100vh;
}

.line-container {
  width: 1px;
  margin: 2rem auto 0 auto;
  height: 100px;
  position: relative;
  padding: 0;
  background-color: #ccc;
}

.hscroll-line {
  width: 100%;
  height: 50%;
  position: absolute;
  overflow: hidden;
  background-color: #000;
  transform: translateY(0);

  animation: move 1s infinite;
}

@keyframes move {
  0% {
    transform: translateY(0);
    height: 0;
  }

  30% {
    height: 50%;
  }

  80% {
    transform: translateY(50px);
    height: 50%;
  }

  100% {
    height: 0;
    transform: translateY(100px);
  }
}
</style>
