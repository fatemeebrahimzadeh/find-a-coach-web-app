<script setup lang="ts">
import { computed, defineProps } from 'vue'

// TODO: seperate this
export type area = 'frontend' | 'backend' | 'career'

export interface ICoach {
  id: string
  firstName: string
  lastName: string
  areas: area[]
  description: string
  hourlyRate: number
}

interface IProps {
  coach: ICoach
}
const props = defineProps<IProps>()

const { id, firstName, lastName, areas, description, hourlyRate: rate } = props.coach

const fullname = computed(() => `${firstName} ${lastName}`)
</script>

<template>
  <li>
    <h3>{{ fullname }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <span v-for="area in areas" :key="area">{{ area }}</span>
    </div>
    <div class="actions">
      <router-link :to="{ name: 'contact-coach', params: { id } }">Contact</router-link>
      <router-link :to="{ name: 'coach', params: { id } }">View Details</router-link>
    </div>
  </li>
</template>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
