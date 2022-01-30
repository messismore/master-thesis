<script lang="ts">
import { defineComponent } from 'vue'
import OrganisationalKnowledge from '/src/components/figures/OrganisationalKnowledge.vue'

export default defineComponent({
  name: 'Playground',
  components: { OrganisationalKnowledge },
  props: {},
  inject: ['theme'],
})
</script>
<style scoped lang="css"></style>

<template>
  <OrganisationalKnowledge />
</template>
