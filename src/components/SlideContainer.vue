<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SlideContainer',
  props: { title: { type: String, required: false } },
  inject: ['theme'],
})
</script>

<style scoped lang="scss">
.slide-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;

  header {
    place-self: start;
  }

  main {
    margin-block: auto;
  }
}
</style>

<style scoped lang="css">
.slide-container {
  color: v-bind('theme.colours.text');
  font-family: v-bind('theme.fonts.body');
  font-size: v-bind('theme.fontSizes(1)');
  font-weight: v-bind('theme.fontWeights.body');
  min-height: calc(
    100% - 2 * v-bind('theme.space(1)')
  ); /* box-sizing content-box is wrong here I suppose */
  min-width: calc(100% - 2 * v-bind('theme.space(1)'));
  padding: v-bind('theme.space(1)');
}

.slide-container header h2 {
  margin: 0;
  font-family: v-bind('theme.fonts.heading');
  font-size: v-bind('theme.fontSizes');
}
</style>

<template>
  <section class="slide-container">
    <header v-if="title">
      <h2>{{ title }}</h2>
    </header>
    <main>
      <slot />
    </main>
  </section>
</template>
