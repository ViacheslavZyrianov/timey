<script setup lang="ts">
import useAuthStore from '@/store/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

async function onAuthClick() {
  await authStore.googleAuth()
  router.push('dashboard')
}
</script>

<template>
  <button
    @click="onAuthClick"
  >
    Authorize
  </button>
</template>