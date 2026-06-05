<script lang="ts">
import { defineComponent } from 'vue'
import BaseFigure from '@/components/base/BaseFigure.vue'
import BaseImage from '@/components/base/BaseImage.vue'

export default defineComponent({
  name: 'BrunelleschiMirror',
  components: { BaseFigure, BaseImage },
  inject: ['theme'],
})
</script>

<template>
  <BaseFigure>
    <template v-slot:figure>
      <BaseImage src="brunelleschi-perspective-mirror.jpg" />
    </template>
    <template v-slot:caption>
      Instrument to demonstrate linear perspective, after Filippo Brunelleschi
      <a
        href="maitaly.wordpress.com/2011/04/28/brunelleschi-and-the-re-discovery-of-linear-perspective/"
      >
        Source
      </a>
    </template>
  </BaseFigure>
</template>
