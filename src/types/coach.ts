export type area = 'frontend' | 'backend' | 'career'

export interface ICoach {
  id: string
  firstName: string
  lastName: string
  areas: area[]
  description: string
  hourlyRate: number
}
