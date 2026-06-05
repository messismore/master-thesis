<script lang="ts">
import { defineComponent } from 'vue'
import BaseFigure from '@/components/base/BaseFigure.vue'
import BaseImage from '@/components/base/BaseImage.vue'

export default defineComponent({
  name: 'Ellipsographs',
  components: { BaseFigure, BaseImage },
  inject: ['theme'],
})
</script>

<template>
  <BaseFigure>
    <template v-slot:figure>
      <BaseImage src="adams-geometrical-and-graphical-essays.png" />
    </template>
    <template v-slot:caption>
      Drawing instruments as Encapsulated Knowledge and the Instrumentation of
      Design. George Adams: Geometrical and Graphical Essays (1791)
      <a
        href="http://www.candidejournal.net/wp-content/uploads/downloads/2012/02/CAN03_Essay_Witt.pdf"
      >
        Source
      </a>
    </template>
  </BaseFigure>
</template>
