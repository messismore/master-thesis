<script lang="ts">
import { defineComponent } from 'vue'
import BaseFigure from '@/components/base/BaseFigure.vue'
import BaseImage from '@/components/base/BaseImage.vue'

export default defineComponent({
  name: 'RhinoEllipse',
  components: { BaseFigure, BaseImage },
  inject: ['theme'],
})
</script>

<template>
  <BaseFigure>
    <template v-slot:figure>
      <BaseImage src="rhino-ellipse-bw.png" />
    </template>
    <template v-slot:caption>
      Computer software encapsulates mathematical knowledge.
    </template>
  </BaseFigure>
</template>
