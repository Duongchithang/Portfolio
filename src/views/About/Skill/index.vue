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
      <div class="grid grid-rows-2 gap-[20px] text-[#a8a7a7]" >
         <div class="flex flex-col">
            <span>Front-End : ReactJs, VueJs, TailwindCss, Bootstrap</span>
         </div>
         <div class="flex flex-col">
            <span>Back-End : .NET core, Nodejs, Mysql, Mssql</span>
         </div>
      </div>
   </div>
</template>