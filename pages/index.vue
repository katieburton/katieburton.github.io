<template>
  <div class="p-4 w-full">
    <div class="hero flex flex-col justify-center items-center w-full">
      <NameHeader />
      <div
        class="flex justify-between items-start md:items-center w-full flex-col md:flex-row gap-6"
      >
        <div class="flex-1">
          Interaction Designer based in Toronto.<br />Looking for full-time or
          freelance opportunities.
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
</style>
