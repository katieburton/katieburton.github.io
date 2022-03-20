<template>
  <div class="pt-12">
    <section>
      <h2>Hello! I’m Katie (she/her)</h2>
    </section>
    <section>
      <p>
        I’m a UX designer based in Toronto and new Interaction Design grad from
        Sheridan College. I am an advocate for change and transformation.
        Something I find rewarding through design.
      </p>
      <p>
        I help <strong>creatives</strong> and
        <strong> business leaders </strong> design innovative experiences and
        products by utilizing eye-catching aesthetics and quality research.
      </p>
    </section>
    <section><h2>My Design Philosophies</h2></section>
    <section>
      <p>
        I believe in playing where possible, being open to exploration, and
        reconnecting with the imagination.
      </p>
    </section>
    <!-- <section>
      <p>
        Outside the design world, I am a self-proclaimed cartoon enthusiast,
        musician, drawer, and home chef.
      </p>
    </section> -->
    <section>
      <p>
        Want to learn more?
        <NuxtLink class="underline" to="/">Check out my resume</NuxtLink> or

        <a class="underline" href="mailto:katxburton@gmail.com">
          send me an email.</a
        >
      </p>
    </section>
    <section>
      <p>
        If you’re interested in my skills, want to discuss an opportunity, or
        get feedback on your work, I’m always down to chat.
      </p>
      <button>Book a meeting</button>
    </section>
  </div>
</template>

<script></script>

<style scoped>
section {
  margin: auto;
  width: 100%;
  max-width: 1024px;
  /* height: 70vh; */

  @apply w-full flex flex-col justify-start items-start px-4 py-8;
}

p {
  @apply text-3xl my-4;
}

h2 {
  @apply font-bold text-3xl;
}
</style>
