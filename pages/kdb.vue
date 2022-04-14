<template>
  <div class="w-full">
    <img
      class="kb-img-max-h object-cover w-full"
      src="~assets/images/KatjaHeroMockup.png"
      alt=""
    />
    <div class="p-4 flex flex-col items-center text-center mx-auto my-8">
      <h1 class="main-font text-9xl uppercase">Katja De Bourbon</h1>
      <p>
        An artistic <strong>portfolio site</strong> for an emotion-driven
        cinematographer.
      </p>
      <div class="flex gap-4 py-4">
        <p class="tag">UI Design</p>
        <p class="tag">Usability</p>
      </div>
    </div>

    <div class="p-4 kb-max-w my-16">
      <h2 class="overline mb-8">Project Info</h2>
      <div class="flex flex-col md:flex-row gap-16 md:gap-4">
        <div class="flex-1 flex gap-8 flex-col">
          <div class="flex gap-4">
            <div class="flex-1">
              <p>
                <strong>Project Type</strong> <br />
                Freelance
              </p>
              <br />
              <p>
                <strong>Timeline</strong> <br />
                1 month
              </p>
              <br />
              <p>
                <strong>Tools</strong> <br />
                Webflow
                <br />
                Figma <br />
                Procreate
              </p>
            </div>
            <div class="flex-1">
              <p>
                <strong>Team</strong> <br />
                Solo
              </p>
              <br />
              <p>
                <strong>My Role</strong> <br />
                UI Designer
              </p>
            </div>
          </div>
        </div>
        <div class="flex-1">
          With cinematographer Katja de Bourbon, I designed and developed a
          portfolio that showcases her creativity and vision.
        </div>
      </div>
    </div>

    <div class="p-4 my-16 kb-max-w">
      <h2 class="overline mb-8">Overview</h2>
      <div class="flex flex-col md:flex-row gap-8">
        <h3 class="flex-1 heading">Showcasing artistic talent.</h3>
        <p class="flex-1">
          The main goal of this project was to help the client stand out among
          the sea of other portfolio and help her gain more job opportunities.
          When concepting, I was sure to capture her style in a way that would
          be unique to her while still being easy to navigate for potential
          employers or collaborators.
        </p>
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-16 items-center my-16">
      <div class="flex-1">
        <img
          class="kb-img-max-h object-contain"
          src="~assets/images/KatjaProblem.png"
          alt=""
        />
      </div>
      <div class="flex-1 p-4">
        <h2 class="overline mb-4">The Problem</h2>
        <p class="subheading-2" style="max-width: 620px">
          How might we showcase the clients talent and creativity in a way that
          stands out against the sea of other portfolios?
        </p>
      </div>
    </div>

    <div class="p-4 kb-mw-800">
      <div class="subheading mb-4">Competitive Analysis</div>
      <p>
        Before designing, I looked at numerous film portfolios to get a lay of
        the land. Many looked minimalistic and clean; almost like a museum
        gallery. There was a great opportunity to express my client's creativity
        and personality with the design.
      </p>
    </div>

    <div class="p-4 kb-max-w my-16">
      <div class="subheading mb-4 text-center">Moodboard</div>
      <img
        class="kb-img-max-h my-6"
        src="~assets/images/KatjaMoodboard.png"
        alt=""
      />
      <p class="kb-mw-800 mt-8">
        During the initial consult call, I worked with Katja to better
        understand her vision and what she wanted for her portfolio. She created
        this moodboard with a wide variety of inspiration. She loved the
        aesthetic of having film reel and collage and heavily drifted towards
        mixed media, which I used as a running visual theme going into
        development.
      </p>
    </div>

    <div class="my-16 p-4 kb-max-w">
      <h2 class="overline mb-8">Wireframes</h2>
      <h3 class="heading">Blocking out the content.</h3>
      <img
        class="kb-img-max-h my-6"
        src="~assets/images/KatjaWireframes.png"
        alt=""
      />
    </div>

    <div class="my-16 p-4 kb-max-w">
      <h2 class="overline mb-8">Usability Testing</h2>

      <div class="flex flex-col md:flex-row gap-16">
        <div class="flex-1">
          <h3 class="heading">Blocking out the content.</h3>
        </div>
        <div class="flex-1">
          <p>
            I created a prototype using Figma and conducted usability tests with
            four film industry professionals, asking them to complete various
            tasks and give feedback to help improve the design.
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-16 my-32">
        <div class="flex-1">
          <img
            class="kb-img-max-h"
            src="~assets/images/KatjaUserTest.png"
            alt=""
          />
        </div>
        <div class="flex-1">
          <div class="subheading mb-4">Key User Insights</div>
          <p class="leading-8 my-4">
            01
            <br />
            <strong>The CV should have its own tab</strong>
            <br />
            The CV is an essential document to those hiring. It felt hidden on
            the bottom of the About page.
          </p>
          <p class="leading-8 my-4">
            02
            <br />
            <strong>Typographic hierarchy on CV needs improvement</strong>
            <br />
            Need differentiation between film titles and rest of text to make it
            easier to scan.
          </p>
          <p class="leading-8 my-4">
            03
            <br />
            <strong>Looks pretty and is easy to use</strong>
            <br />
            All participants expressed positive feedback towards the entire
            site's aesthetic.
          </p>
        </div>
      </div>
    </div>

    <div class="my-16 p-4 kb-max-w">
      <h2 class="overline mb-8">Design System</h2>
      <h3 class="heading">Utilizing systems to reduce build time.</h3>
      <img
        id="featured-photo"
        class="kb-img-max-h my-6"
        src="~assets/images/Katja De Bourbon Design System 1.png"
        alt=""
      />
      <div id="feature-carousel" class="flex gap-4 justify-center items-center">
        <img
          class="carousel-photo"
          src="~assets/images/Katja De Bourbon Design System 1.png"
          alt=""
        />
        <img
          class="carousel-photo"
          src="~assets/images/Katja De Bourbon Design System 2.png"
          alt=""
        />
        <img
          class="carousel-photo"
          src="~assets/images/Katja De Bourbon Design System 3.png"
          alt=""
        />
        <img
          class="carousel-photo"
          src="~assets/images/Katja De Bourbon Design System 4.png"
          alt=""
        />
        <img
          class="carousel-photo"
          src="~assets/images/Katja De Bourbon Design System 5.png"
          alt=""
        />
        <img
          class="carousel-photo"
          src="~assets/images/Katja De Bourbon Design System 6.png"
          alt=""
        />
      </div>
      <div class="subheading my-16 text-center">Doodle System</div>
      <div class="md:w-6/12 my-8 p-4 mx-auto">
        <p>
          <strong>Crafty details to bring out personality</strong> <br />I
          created a series of doodles using Procreate to add a personalized
          touch to the pages and emphasize the collage quality desired by the
          client.
        </p>
      </div>
      <img
        class="kb-img-max-h w-full object-contain my-8"
        src="~assets/images/KatjaDoodleSystem.png"
        alt=""
      />
      <p class="text-center grey mt-2">Doodles</p>

      <div class="flex flex-wrap gap-4 justify-between items-center">
        <div class="doodle-item">
          <img
            class="kb-img-max-h my-6"
            src="~assets/images/KatjaSignature.png"
            alt=""
          />
          <p class="text-center grey mt-2">Client's signature</p>
        </div>
        <div class="doodle-item">
          <p>
            <strong>Adding the clients personal touch</strong> <br />To push the
            collage theme even further, I added the clients signature and their
            own scanned pressed flowers to the pages about them.
          </p>
        </div>
        <div class="w-full text-center">
          <img
            class="kb-img-max-h w-full object-contain my-6"
            src="~assets/images/KatjaFlowers.png"
            alt=""
          />
          <p class="text-center grey mt-2">Scans of handpressed flowers</p>
        </div>
      </div>
    </div>

    <div class="my-16 p-4 kb-max-w">
      <h2 class="overline mb-8">Final Design</h2>

      <div class="flex flex-col md:flex-row gap-16">
        <div class="flex-1">
          <h3 class="heading">A fully functional portfolio.</h3>
        </div>
        <div class="flex-1">
          <p>
            I delivered a fully functional Webflow portfolio site for my client,
            along with a maintenance guide to allow them to make updates and
            changes easily without my guidance after the project was complete.
          </p>
        </div>
      </div>

      <div class="my-16">
        <div class="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/r_hpw8gjbD0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <img
        src="~assets/images/KatjaSpreadMockup1.png"
        alt=""
        class="kb-img-max-h object-cover w-full my-8"
      />
      <img
        src="~assets/images/KatjaSpreadMockup2.png"
        alt=""
        class="object-cover w-full my-8"
      />
    </div>
    <div class="my-16 p-4 kb-max-w">
      <h2 class="overline mb-8">Reflection</h2>
      <h3 class="heading">Systems can help push exploration forward.</h3>
      <p class="mt-8">
        I loved incorporating traditional media into the site. I wish I had
        explored further with the visual assets the client gave me to create a
        diverse set of concepts—it feels like a missed opportunity.
      </p>
      <p class="mt-8">
        Start with visual exploration and iterating concepts, then move to
        creating a design system instead of doing it after the design was
        created in high-fidelity. It would've allowed me to iterate much faster
        and identify issues with hierarchy (for typography and buttons) quickly.
      </p>
      <p class="mt-8">
        I have been interested in design systems for the past couple of years.
        However, upon reflecting on this particular project, I don't think I
        understood how to use design systems effectively. Seeing them more as a
        way to document styling for development and for myself to refer to when
        designing, I was not taking advantage of its capabilities to speed up
        prototype iteration and its usefulness to the client after the project
        has ended.
      </p>
    </div>
    <nuxt-link to="/hackville">
      <div class="flex justify-end text-right flex-col p-4">
        <div class="text-lg">Next Project</div>
        <div class="text-8xl main-font uppercase">Hackville 2020</div>
      </div></nuxt-link
    >
  </div>
</template>

<script>
import ImageLightbox from "../components/ImageLightbox.vue";
export default {
  components: { ImageLightbox },
  mounted() {
    const carouselPhotos = document.querySelectorAll(".carousel-photo");

    carouselPhotos.forEach((photo) => {
      photo.addEventListener("click", (e) => {
        document.getElementById("featured-photo").src = e.target.src;
      });
    });
  },
  methods: {},
};
</script>

<style scoped>
.mw-800 {
  max-width: 800px;
}

#feature-carousel {
  width: 100%;
}

.carousel-photo {
  max-width: 40px;
  @apply flex-1;
}

@screen md {
  .carousel-photo {
    max-width: 80px;
    @apply flex-1;
  }
}

.carousel-photo:hover {
  border: #886bdb 1px solid;
}

.doodle-item {
  @apply self-center p-4;
}

@screen sm {
  .doodle-item {
    width: 48%;
  }
}
</style>
