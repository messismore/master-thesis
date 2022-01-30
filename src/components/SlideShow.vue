<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SlideShow',
  props: {},
  inject: ['theme'],
})
</script>
<style scoped lang="scss">
.slide-show {
  height: 100%;
  overflow-block: scroll;
  scroll-snap-type: block mandatory;
  width: 100%;
}
</style>
<template>
  <div class="slide-show"><slot></slot></div>
</template>
