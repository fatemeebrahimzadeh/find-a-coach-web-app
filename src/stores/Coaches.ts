import type { ICoach } from '@/types/Coach'
import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'

export const useCoachesStore = defineStore('coaches', () => {
  const coaches = reactive<ICoach[]>([
    {
      id: 'c1',
      firstName: 'Maximilian',
      lastName: 'Schwarzmüller',
      areas: ['frontend', 'backend', 'career'],
      description:
        "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
      hourlyRate: 30
    },
    {
      id: 'c2',
      firstName: 'Julie',
      lastName: 'Jones',
      areas: ['frontend', 'career'],
      description:
        'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
      hourlyRate: 30
    }
  ])

  const hasCoaches = computed<boolean>(() => coaches && coaches.length > 0)

  const addCoach = (coach: ICoach): void => {
    coaches.push(coach)
  }

  return { coaches, hasCoaches, addCoach }
})
