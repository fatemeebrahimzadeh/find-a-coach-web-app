<script setup lang="ts">
import CoachForm from '@/components/coaches/CoachForm.vue'
import router from '@/router'
import { useCoachesStore, type ICoach } from '@/stores/Coaches'

const { addCoach } = useCoachesStore()

const registerCoach = (coach: ICoach) => {
  addCoach(coach)
  router.replace({ name: 'coaches' })
}
</script>

<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @register-coach="registerCoach" />
    </base-card>
  </section>
</template>
