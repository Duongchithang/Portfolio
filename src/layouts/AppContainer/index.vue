<script setup>
   import Intro from '../../views/Intro/index.vue'
   import About from '../../views/About/index.vue'
   import Services from '../../views/Services/index.vue'
   import Projects from '../../views/Projects/index.vue'
   import Testimonials from '../../views/Testimonials/index.vue'
   import Contact from '../../views/Contact/index.vue'
</script>

<template>
   <main class="
      container mx-auto px-5 md:px-9 
      lg:px-16 xl:px-36 2xl:px-52
   ">
      <!-- All sections -->
      <intro />
      <about />
      <services />
     
      <projects />
      <testimonials />
      <contact />
   </main>
</template>