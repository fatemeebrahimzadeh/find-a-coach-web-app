<script setup lang="ts">
import CoachItem from '@/components/coaches/CoachItem.vue'
import { useCoachesStore } from '@/stores/Coaches'
import { storeToRefs } from 'pinia'

const store = useCoachesStore()
const { coaches, hasCoaches } = storeToRefs(store)
</script>

<template>
  <section>FILTER</section>
  <section>
    <div>
      <button>Refresh</button>
      <router-link :to="{ name: 'register-coaches' }">Register as Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <coach-item v-for="coach in coaches" :key="coach.id" :coach="coach" />
    </ul>
    <h3 v-else>No Coaches Found.</h3>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
