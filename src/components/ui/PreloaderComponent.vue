<template>
  <loader
    v-if="show"
    object="#66fff5"
    color1="#ffffff"
    color2="#17fd3d"
    size="3"
    speed="2"
    bg="#343a40"
    objectbg="#999793"
    opacity="80"
    disableScrolling="false"
    name="circular"
  ></loader>
</template>


<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  
 
};
</script>