import type { area } from '.'

export interface ICoach {
  id: string
  firstName: string
  lastName: string
  description: string
  hourlyRate: number
  areas: area[]
}

export type ValidatedCoachDataMap<T, K extends keyof T> = {
  [P in K]: {
    value: T[P]
    isValid?: boolean
  }
}
