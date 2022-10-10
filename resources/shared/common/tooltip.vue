<template>
  <ElTooltip
    :class="classes"
    :effect="effect"
    :content="content"
    :placement="position"
    :raw-content="html"
  >
    <slot></slot>
  </ElTooltip>
</template>

<script setup>
/* ---------------------------------------------
 * Style imports
 * -------------------------------------------- */
import 'element-plus/es/components/tooltip/style/css'

/* ---------------------------------------------
 * Dependency imports
 * -------------------------------------------- */
import { ElTooltip } from 'element-plus'
import { defineComponent } from 'vue'

/* ---------------------------------------------
 * Component data
 * -------------------------------------------- */
defineComponent({
  name: 'Tooltip',
})

/* ---------------------------------------------
 * Component props
 * -------------------------------------------- */
defineProps({
  position: {
    type: String,
    default: 'left',
    required: false,
    validator: (value) =>
        [
          'bottom-start',
          'right-start',
          'left-start',
          'bottom-end',
          'top-start',
          'right-end',
          'left-end',
          'top-end',
          'bottom',
          'right',
          'left',
          'top',
        ].includes(value),
  },
  classes: {
    type: String,
    default: 'box-item',
    required: false,
  },
  effect: {
    type: String,
    default: 'dark',
    required: false,
    validator: (value) => ['dark', 'light'].includes(value),
  },
  content: {
    type: String,
    required: true,
  },
  html: {
    type: Boolean,
    required: false,
  },
})
</script>