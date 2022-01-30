<template>
  <SlideContainer title="Why now?">
    <video class="background-video" autoplay loop muted>
      <source src="../../assets/speckle-loop.mp4" type="video/mp4" />
    </video>
    <div><img src="../../assets/speckle-logo.png" /></div>
  </SlideContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SlideContainer from '/src/components/SlideContainer.vue'

export default defineComponent({
  name: 'SlideSpeckle',
  components: { SlideContainer },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped lang="css">
:deep main {
  display: grid;
  grid-template-areas: 'a';
}
.background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
.background-video,
div {
  grid-area: a;
  display: flex;
  flex-direction: column;
  align-items: center;
}
div * {
  place-self: end start;
}
img {
  height: 150px;
}
</style>
