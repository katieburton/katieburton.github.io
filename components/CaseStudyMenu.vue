<template>
  <div class="text-center">
    <h2 class="uppercase">Case Studies</h2>
    <div class="card-wrapper my-6">
      <CaseStudyCard
        v-for="(gal, index) in gallery"
        :key="index"
        class="case-card"
        :thumbnail="gal.thumbnail"
        :title="gal.title"
        :description="gal.description"
        :link="'/' + gal.name"
        :tags="gal.tags"
        :idName="'case-' + index"
        :name="gal.name"
      />
    </div>
  </div>
</template>

<script>
import { gallery } from "../data";
import CaseStudyCard from "./CaseStudyCard.vue";

export default {
  components: { CaseStudyCard },
  data() {
    return {
      gallery: gallery,
    };
  },
  mounted() {
    const cards = document.querySelectorAll(".case-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.25,
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });
  },
};
</script>

<style scoped>
/* .card-wrapper {
  transition: opacity 0.2s ease-in-out;
}

.card-wrapper:hover > * {
  opacity: 0.2;
}

.card-wrapper:hover > *:hover {
  opacity: 1;
} */

.case-card {
  transform: translateY(100px);
  opacity: 0;
  transition: 250ms ease-in;
}

.case-card.show {
  transform: translateY(0px);
  opacity: 1;
}
</style>
