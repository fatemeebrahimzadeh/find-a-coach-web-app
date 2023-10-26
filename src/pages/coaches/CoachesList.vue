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
    <base-card>
      <div>
        <base-button mode="outline">Refresh</base-button>
        <base-button link :to="{ name: 'register-coaches' }">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item v-for="coach in coaches" :key="coach.id" :coach="coach" />
      </ul>
      <h3 v-else>No Coaches Found.</h3>
    </base-card>
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
