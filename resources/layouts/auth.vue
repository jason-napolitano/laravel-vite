<template>
  <section class="row">
    <div class="col-4 col-offset-4">
      <div class="card">
        <div class="card-header">Authentication</div>
        <div class="card-body">
          <slot></slot>
        </div>
        <div class="card-footer text-center">
          <ElButtonGroup>
            <Link :href="route('home')" class="el-button no-underline">
              Home
            </Link>
            <Link :href="route('register.index')" class="el-button no-underline">
              Create Account
            </Link>
            <Link :href="route('login.index')" class="el-button no-underline">
              Account Login
            </Link>
          </ElButtonGroup>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* ---------------------------------------------
 * Style imports
 * -------------------------------------------- */
import 'element-plus/theme-chalk/el-button-group.css';
import 'element-plus/theme-chalk/el-button.css';

/* ---------------------------------------------
 * Dependency imports
 * -------------------------------------------- */
import { ElButtonGroup } from 'element-plus'
</script>

<style scoped lang="scss">
// ...
</style>
