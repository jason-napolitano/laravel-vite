<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <Navbar />
      </div>
    </div>
  </section>
  <section class="container">
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
/* ---------------------------------------------
 * Dependency imports
 * -------------------------------------------- */
import Navbar from '@/shared/common/navbar.vue'
import { flashNotification } from '@/utils'
import { onMounted } from 'vue'

/* ---------------------------------------------
 * Component mounting
 * -------------------------------------------- */
onMounted(() => {
  flashNotification()
})
</script>