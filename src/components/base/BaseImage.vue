<template>
  <picture> <img :src="require('@/assets/' + src)" /> </picture>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseImage',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  inject: ['theme'],
})
</script>

<style scoped lang="css">
img {
  max-width: 100%;
  mix-blend-mode: screen;
  display: block;
}

picture {
  background: v-bind('theme.colours.primary');
  display: block;
  width: auto;
  height: auto;
}
</style>
