<script lang="ts" setup>
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
      <li v-for="coach in coaches" :key="coach.id">
        {{ coach.firstName }}
      </li>
    </ul>
    <h3 v-else>No Coaches Found.</h3>
  </section>
</template>
