<script setup lang="ts">
import {cx} from "@emotion/css";

definePageMeta({
  layout: 'default',

});
</script>
<template>
  <button
      :class='cx(`
      bg-blue w-200px shadow-lg rounded-lg p-12px
      hover:bg-warmGray
      cursor-pointer outline-none border-none text-white
      `)'>
    ashdjsa
  </button>
</template>
