<template>
  <span @click="toggleLightboxOn(image)" :class="`cursor-${cursor}`">
    <Thumbnail
      :src="image"
      :classes="classes"
      :alt="alt"
      :lazy="lazy"
      v-if="thumbnail"
    />
    <Image
      :src="image"
      :classes="classes"
      :alt="alt"
      :lazy="lazy"
      v-else
    >
      <template #placeholder>
        <slot name="placeholder"></slot>
      </template>
      <template #error>
        <slot name="error"></slot>
      </template>
    </Image>
  </span>
  <VueEasyLightbox
    :visible="lightBoxVisible"
    @hide="toggleLightboxOff"
    :imgs="lightboxImages"
    scrollDisabled
    moveDisabled
    escDisabled
  ></VueEasyLightbox>
</template>

<script setup>
/* ---------------------------------------------
 * Dependency imports
 * -------------------------------------------- */
import { ref, defineComponent } from 'vue'
import Thumbnail from './Thumbnail'
import Image from './Image'

/* ---------------------------------------------
 * Component data
 * -------------------------------------------- */
defineComponent({
  name: 'Lightbox'
})

/* ---------------------------------------------
 * Reactive references
 * -------------------------------------------- */
const lightBoxVisible = ref(false)
const lightboxImages = ref(null)

/**
 * Toggle the lightbox on and assign it
 * an image
 *
 * @param data
 *
 * @returns {void}
 */
const toggleLightboxOn = (data) => {
  lightboxImages.value = data
  lightBoxVisible.value = true
}

/**
 * Toggle the lightbox off and reset
 * the image
 *
 * @returns {void}
 */
const toggleLightboxOff = () => {
  lightboxImages.value = null
  lightBoxVisible.value = false
}

/* ---------------------------------------------
 * Component props
 * -------------------------------------------- */
defineProps({
  image: [Object, String, Array],
  alt: String,
  classes: String,
  cursor: {
    type: String,
    default: 'zoom-in',
    validator: (value) => ['pointer', 'default', 'zoom-in'].includes(value),
  },
  fluid: {
    type: Boolean,
    default: true,
  },
  thumbnail: {
    type: Boolean,
    default: true,
  },
  lazy: {
    type: Boolean,
    default: true,
  },
})
</script>
