<script setup lang="ts">
import CoachForm from '@/components/coaches/CoachForm.vue'
import router from '@/router'
import { useCoachesStore } from '@/stores/Coaches'
import type { ICoach } from '@/types/Coach'

const { addCoach } = useCoachesStore()

const registerCoach = (coach: ICoach) => {
  addCoach(coach)
  router.replace({ name: 'coaches' })
}
</script>

<template>
  <div>
    <section>
      <base-card>
        <h2>Register as a coach now!</h2>
        <coach-form @register-coach="registerCoach" />
      </base-card>
    </section>
  </div>
</template>
