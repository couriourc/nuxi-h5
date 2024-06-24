<script setup lang="ts">

const {data: navigation} = await useAsyncData('navigation', () => fetchContentNavigation());
import {Swiper, SwiperSlide,} from "swiper/vue";
import {Virtual} from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
</script>
<template>
  <Swiper
      :modules="[Virtual]"
  >
    <SwiperSlide
        v-for="(item,index) in navigation"
        class="shadow-lg px-12px rounded-lg flex items-center justify-center
         shadow-md box-border h-90vh bg-blue w-100vw h-100%"
        :key="index"
        :virtualIndex="index"
    >
      <ContentDoc :path="item._path"></ContentDoc>
    </SwiperSlide>
  </Swiper>
</template>


