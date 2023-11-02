<script setup lang="ts">
import CoachItem from '@/components/coaches/CoachItem.vue'
import CoachFilter from '@/components/coaches/CoachFilter.vue'
import { useCoachesStore } from '@/stores/Coaches'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import type { FiltersType } from '@/types'

const store = useCoachesStore()
const { coaches, hasCoaches } = storeToRefs(store)

const activeFilters = ref<FiltersType>({
  frontend: true,
  backend: true,
  career: true
})

const setFilters = (updatedFilters: Partial<FiltersType>) => {
  activeFilters.value = {
    ...activeFilters.value,
    ...updatedFilters
  }
}

const filterCoaches = computed(() => {
  return coaches.value.filter((coach) => {
    if (activeFilters.value.frontend && coach.areas.includes('frontend')) return true
    if (activeFilters.value.backend && coach.areas.includes('backend')) return true
    if (activeFilters.value.career && coach.areas.includes('career')) return true
    return false
  })
})
</script>

<template>
  <div>
    <section>
      <CoachFilter @update-filters="setFilters" :filters="activeFilters"></CoachFilter>
    </section>
    <section>
      <base-card>
        <div>
          <base-button mode="outline">Refresh</base-button>
          <base-button link :to="{ name: 'register-coaches' }">Register as Coach</base-button>
        </div>
        <ul v-if="hasCoaches">
          <coach-item v-for="coach in filterCoaches" :key="coach.id" :coach="coach" />
        </ul>
        <h3 v-else>No Coaches Found.</h3>
      </base-card>
    </section>
  </div>
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
