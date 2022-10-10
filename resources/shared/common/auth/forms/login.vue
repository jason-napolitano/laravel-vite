<template>
  <form @submit.prevent="formData.post(route('login.store'))">
    <div class="my-2">
      <input
        v-model="formData.email"
        class="form-control"
        placeholder="Email"
        id="email"
        type="email"
      />
      <small class="text-pomegranate">
        {{ errors.email }}
      </small>
    </div>
    <div class="my-2">
      <input
        v-model="formData.password"
        placeholder="Password"
        class="form-control"
        type="password"
      />
      <small class="text-pomegranate">
        {{ errors.password }}
      </small>
    </div>

    <div class="text-center my-2">
      <ElSwitch
        v-model="formData.remember"
        label="Remember Me"
        size="large"
        active-text="Remember Me"
        inactive-text="Forget Me"
      />
    </div>

    <div class="my-2">
      <Button
        classes="btn w-100 bg-gradient btn-primary col-10"
        :form-data="formData"
      />
    </div>
  </form>
</template>

<script setup>
/* ---------------------------------------------
 * Dependency imports
 * -------------------------------------------- */
import Button from '@/shared/common/buttons/submit.vue'
import 'element-plus/es/components/switch/style/css'
import { useForm } from '@inertiajs/inertia-vue3'
import { ElSwitch } from 'element-plus'

/* ---------------------------------------------
 * Form data
 * -------------------------------------------- */
const formData = useForm({
  email: '',
  password: '',
  remember: false,
})

/* ---------------------------------------------
 * Component props
 * -------------------------------------------- */
defineProps({
  errors: Object,
})
</script>
