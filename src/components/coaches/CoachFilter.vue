<script setup lang="ts">
import type { FiltersType } from '@/types'
import { defineEmits, defineProps } from 'vue'

interface IProps {
  filters: FiltersType
}
type IEvents = {
  (e: 'update-filters', updatedFilters: Partial<FiltersType>): void
}

const { filters } = defineProps<IProps>()
const emit = defineEmits<IEvents>()

const setFilter = (event: MouseEvent) => {
  if (event.target instanceof HTMLInputElement) {
    const { id, checked } = event.target
    const updatedFilter: Partial<FiltersType> = {
      [id]: checked
    }
    emit('update-filters', updatedFilter)
  } else {
    throw new Error('type is incorrect')
  }
}
</script>

<template>
  <base-card>
    <h2>Find Your Cach</h2>
    <span class="filter-option">
      <input
        type="checkbox"
        name="frontend"
        id="frontend"
        :checked="filters.frontend"
        @click="setFilter"
      />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input
        type="checkbox"
        name="backend"
        id="backend"
        :checked="filters.backend"
        @click="setFilter"
      />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input
        type="checkbox"
        name="career"
        id="career"
        :checked="filters.career"
        @click="setFilter"
      />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
