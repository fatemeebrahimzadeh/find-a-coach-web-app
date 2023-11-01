import type { area } from "."

export interface ICoach {
  id: string
  firstName: string
  lastName: string
  description: string
  hourlyRate: number
  areas: area[]
}
