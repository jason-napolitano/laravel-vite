<template>
  <form @submit.prevent="formData.post(route('register.store'))">
    <div class="my-2">
      <input
          v-model="formData.name"
          placeholder="Full Name"
          type="text"
          class="w-100 form-control"
      />
      <div class="text-pomegranate">
        {{ errors.name }}
      </div>
    </div>
    <div class="my-2">
      <input
          v-model="formData.username"
          placeholder="Username"
          type="text"
          class="w-100 form-control"
      />
      <div class="text-pomegranate">
        {{ errors.username }}
      </div>
    </div>
    <div class="my-2">
      <input
          v-model="formData.email"
          placeholder="Email Address"
          type="text"
          class="w-100 form-control"
      />
      <div class="text-pomegranate">
        {{ errors.email }}
      </div>
    </div>
    <div class="my-2">
      <input
          v-model="formData.password"
          placeholder="Enter Password"
          type="password"
          class="w-100 form-control"
      />
      <div class="text-pomegranate">
        {{ errors.password }}
      </div>
    </div>
    <div class="my-2">
      <input
          v-model="formData.password_confirmation"
          placeholder="Repeat Password"
          type="password"
          class="w-100 form-control"
      />
      <div class="text-pomegranate">
        {{ errors.password_confirmation }}
      </div>
    </div>
    <div class="my-2">
      <Button classes="btn btn-primary w-100 my-1" :form-data="formData" />
    </div>
  </form>
</template>

<script setup lang="ts">
/* ---------------------------------------------
 * Dependency imports
 * -------------------------------------------- */
import Button from '@/shared/common/buttons/submit.vue'
import { useForm } from '@inertiajs/inertia-vue3'

/* ---------------------------------------------
 * Form data
 * -------------------------------------------- */
const formData = useForm({
  username: '',
  image: '',
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

/* ---------------------------------------------
 * Component props
 * -------------------------------------------- */
defineProps<{
  errors: object
}>()
</script>