<template>
  <div class="p-4 w-full">
    <div class="hero flex flex-col justify-center items-center w-full">
      <div class="flex justify-center items-center">
        <h1 class="uppercase">Katie Burton</h1>
      </div>

      <div
        class="flex justify-between items-start md:items-center w-full flex-col md:flex-row gap-6"
      >
        <div class="flex-1">
          Interaction Designer based in Toronto.<br />Looking for full-time or freelance
          opportunities.
        </div>
        <!-- <div class="flex-initial text-center">VIEW WORK BELOW</div> -->
        <div class="flex-1">
          <ul class="text-left md:text-right">
            <li>EMAIL</li>
            <li>LINKEDIN</li>
            <li>INSTAGRAM</li>
          </ul>
        </div>
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
export default {
  components: { CaseStudyMenu },
  name: "IndexPage",
};
</script>

<style scoped>
h1 {
  font-size: 10rem;
}
@screen md {
  h1 {
    font-size: 20rem;
    line-height: 15rem;
    text-align: center;
  }
}

.hero {
  height: 80vh;
}
</style>
