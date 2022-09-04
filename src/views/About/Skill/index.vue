<script setup>
	const props = defineProps({
		skillArray : Array
	});
   const skills = props.skillArray;
   const ArrayLogo = [
      {
         id : 1,
         img : 'https://e7.pngegg.com/pngimages/232/745/png-clipart-vue-js-javascript-library-react-angularjs-js-template-angle-thumbnail.png'
      }
   ];
   // const URL = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNfoFfxmCCZr7fxP-nMKcr5SBWRBT8wnnHA&usqp=CAU`;
</script>

<template>
   <div data-aos="fade-right">
      <div class="grid grid-cols-3 grid-rows-2 gap-[20px]" >
         <div class="flex flex-col items-center">
            <div>
              <img class="w-[120px] h-[120px] object-cover" src="../../../../public/assets/technologies/IMG_SKILL/Vuejs.jpg" alt=""> 
            </div>
            <span>
                Vuejs
            </span>
         </div>
         <div class="flex flex-col items-center">
            <div>
              <img class="w-[120px] h-[120px] object-cover" src="../../../../public/assets/technologies/IMG_SKILL/Reactjs.png" alt=""> 
            </div>
            <span>
               Reactjs
            </span>
         </div>
         <div class="flex flex-col items-center">
            <div>
              <img class="w-[120px] h-[120px] object-cover" src="../../../../public/assets/technologies/IMG_SKILL/Tailwind_CSS_Logo.svg.png" alt=""> 
            </div>
            <span>
               TailwindCSS
            </span>
         </div>
         <div class="flex flex-col items-center">
            <div>
              <img class="object-cover" src="../../../../public/assets/technologies/IMG_SKILL/node-js-gff6699d2f_640.png" alt=""> 
            </div>
            <span>
              Nodejs
            </span>
         </div>
        
         <div class="flex flex-col items-center">
            <div>
              <img class="object-cover" src="../../../../public/assets/technologies/IMG_SKILL/PHP-logo.svg.png" alt=""> 
            </div>
            <span>
              PHP
            </span>
         </div>
         <div class="flex flex-col items-center">
            <div>
              <img class="h-[70px] object-cover" src="../../../../public/assets/technologies/IMG_SKILL/MySQL-Logo.wine.png" alt=""> 
            </div>
            <span>
              Mysql
            </span>
         </div>
      </div>
   </div>
</template>