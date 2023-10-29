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

const { id, firstName, lastName, areas, hourlyRate: rate } = props.coach

const fullName = computed(() => `${firstName} ${lastName}`)
</script>

<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"/>
    </div>
    <div class="actions">
      <base-button link :to="{ name: 'contact-coach', params: { id } }">Contact</base-button>
      <base-button link :to="{ name: 'coach', params: { id } }">View Details</base-button>
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
