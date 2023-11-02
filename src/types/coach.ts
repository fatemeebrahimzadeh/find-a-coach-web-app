import type { ComputedRef } from 'vue'
import type { area } from '.'

export interface ICoach {
  id: string
  firstName: string
  lastName: string
  description: string
  hourlyRate: number
  areas: area[]
}

export interface ICoachStore {
  coaches: ICoach[]
  hasCoaches: ComputedRef<boolean>
  addCoach(coach: ICoach): void
}
 