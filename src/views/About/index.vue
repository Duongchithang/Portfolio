<script setup>
import { inject } from "@vue/runtime-core";
import Skill from "./Skill/index.vue";

/* 
      extract the about section from the "sections" key in the json file
      containing the data
   */
const {
  sections: { intro },
} = inject("infos");
let skillArray = intro.about.skills;
var music = document.querySelector('.music');
console.log(music);
</script>

<template>
  <section id="about">
    <section-content title="About me" order="1">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- Personal information -->
        <div>
          <h2 class="text-main-color font-bold mb-5">My biography</h2>

          <!-- Bigraphy -->
          <p
            data-aos="fade-left"
            class="leading-relaxed mb-4 last:mb-0 text-gray-500 dark:text-gray-400"
            v-for="(bio, k) in intro.about.bio"
            :key="`bio-${k}`"
          >
            {{ bio }}
          </p>
          <!-- End Bigraphy -->
        </div>

        <!-- Skills -->
        <div class="relative">
          <circle-pattern size="w-24 h-24" position="-left-12 -top-12" />

          <h2 class="text-main-color font-bold mb-5">My Skills</h2>
          <div class="">
            <Skill :skillArray="skillArray" />
          </div>
        </div>
        <div class="relative">
          <circle-pattern size="w-24 h-24" position="-left-12 -top-12" />

          <h2 class="text-main-color font-bold mb-5">My Favorite Song</h2>
          <div class="background-[#111827]">
            <audio class="music" controls>
              <source src="horse.ogg" type="audio/ogg" />
              <source src="../../../public/assets/IDO.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </section-content>
  </section>
</template>