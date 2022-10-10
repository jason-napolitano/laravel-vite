<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-marina rounded">
    <div class="container">
      <Link class="navbar-brand" :href="route('home')">Company Name</Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <Link class="nav-item nav-link" :href="route('home')"> Home </Link>
          <Link
            v-if="can('view_all_users')"
            class="nav-item nav-link"
            :href="route('users')"
          >
            Users
          </Link>
          <div class="navbar-item">
            <Link v-if="user == null" :href="route('login.index')" class="nav-link cursor-pointer">
              Login
            </Link>
            <div v-else @click="logoutAction" class="nav-link cursor-pointer">
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
/* ---------------------------------------------
 * Dependency imports
 * -------------------------------------------- */
import { user, logoutAction, can } from '@/utils'
import { defineComponent } from 'vue'

/* ---------------------------------------------
 * Component data
 * -------------------------------------------- */
defineComponent({
  name: 'Navbar'
})
</script>