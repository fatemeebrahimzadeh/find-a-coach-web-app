import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'

// TODO: add ts
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
  return { coaches, hasCoaches }
})
