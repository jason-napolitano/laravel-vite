<template>
  <ElImage :src="src" :class="classes" :alt="alt" :fit="fill" :lazy="lazy">
    <template #placeholder>
      <slot name="placeholder">
        <div class="image-slot">
          <ElIcon>
            <Loading />
          </ElIcon>
        </div>
      </slot>
    </template>
    <template #error>
      <slot name="error">
        <div class="image-slot">
          <ElIcon>
            <Picture />
          </ElIcon>
        </div>
      </slot>
    </template>
  </ElImage>
</template>

<script setup lang="ts">
/* ---------------------------------------------
 * Style imports
 * -------------------------------------------- */
import 'element-plus/es/components/image/style/css'

/* ---------------------------------------------
 * Dependency imports
 * -------------------------------------------- */
import { Picture, Loading } from '@element-plus/icons-vue'
import { ElImage } from 'element-plus'
import { defineComponent } from 'vue'

/* ---------------------------------------------
 * Component data
 * -------------------------------------------- */
defineComponent({
  name: 'Image'
})

/* ---------------------------------------------
 * Component props
 * -------------------------------------------- */
defineProps({
  fill: {
    type: String,
    default: 'cover',
    validator: (value) =>
      ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(value),
  },
  alt: {
    type: String,
    default: '',
  },
  src: {
    type: String,
    default: '',
  },
  classes: {
    type: String,
    default: '',
  },
  lazy: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped lang="scss">
.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 2rem;
}
.image-slot .el-icon {
  font-size: 2rem;
}
</style>
