<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseFigure',
  inject: ['theme'],
})
</script>

<template>
  <figure>
    <slot name="figure"> </slot>
    <figcaption><slot name="caption"></slot></figcaption>
  </figure>
</template>

<style scoped lang="css">
a {
  color: v-bind('theme.colours.secondary');
}

figure {
  margin-block: v-bind('theme.space(5)');
  margin-inline: auto;
}

figcaption {
  font-size: v-bind('theme.fontSizes(-1)');
}
</style>
