<script setup lang="ts">
import { computed } from 'vue'
import { useCoachesStore } from '@/stores/Coaches'
import type { ICoach } from '@/types/Coach'

interface IProps {
  id: string
}

const { id } = defineProps<IProps>()
const { coaches } = useCoachesStore()

const selectedCoach: ICoach = coaches.find((coach) => coach.id === id)!

const { firstName, lastName, description, hourlyRate: rate, areas } = selectedCoach
const fullName = computed(() => `${firstName} ${lastName}`)
</script>

<template>
  <div>
    <section>
      <base-card>
        <h1>
          {{ fullName }}
        </h1>
        <h2>${{ rate }}/hour</h2>
      </base-card>
    </section>
    <section>
      <base-card>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="{ name: 'contact-coach' }">Contact</base-button>
        <router-view />
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge v-for="area in areas" :key="area" :type="area" :title="area" />
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>
