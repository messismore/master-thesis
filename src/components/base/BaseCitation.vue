<template>
  <span
    :title="`${work.author.surname}, ${work.author.firstName} ${work.year}: ${work.title}`"
  >
    <q v-if="this.hasSlotContent"><slot /></q><span>#</span>
  </span>
  <em>{{ work.author.surname }} {{ work.year }}: {{ page }}</em>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseCitation',
  props: {
    work: {
      type: Object,
      default: () => ({
        author: {
          firstName: '',
          surname: 'Citation needed',
        },
      }),
    },
    page: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      hasSlotContent: Object.keys(this.$slots).length > 0,
    }
  },
  inject: ['theme'],
})
</script>

<style scoped lang="css">
q + span {
  vertical-align: super;
  font-size: v-bind(
    'theme.fontSizes(-2)'
  ); /* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters */
}
em {
  position: absolute;
  left: calc(v-bind('theme.space(15)') + v-bind('theme.space(8)'));
  font-size: v-bind('theme.fontSizes(-1)');
}
</style>
