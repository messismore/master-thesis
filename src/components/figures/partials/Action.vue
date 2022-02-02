<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FigurePartialAction',
  props: { name },
  inject: ['theme'],
})
</script>

<style scoped>
foreignObject {
  width: 100%;
  height: 100%;
  fill: white;
}
div {
  background: white;
  border: solid v-bind('theme.space(-10)') v-bind('theme.colours.primary');
  border-radius: v-bind('theme.space(-2)');
  color: v-bind('theme.colours.primary');
  font-size: v-bind('theme.fontSizes(0)');
  display: flex;
  font-family: v-bind('theme.fonts.heading');
  max-width: 12ch;
  min-width: 10ch;
  min-height: v-bind('theme.space(4)');
  padding: v-bind('theme.space(-10)') v-bind('theme.space(1)');
  text-align: center;
  padding: auto;
  place-content: center;
  place-items: center;
}
</style>

<template>
  <foreignObject>
    <div xmlns="http://www.w3.org/1999/xhtml">{{ name }}</div>
  </foreignObject>
</template>
