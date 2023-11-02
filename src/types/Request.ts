import type { ComputedRef } from 'vue'

export interface IRequest {
  id: string
  email: string
  message: string
}

export interface IRequestStore {
  requests: IRequest[]
  hasRequests: ComputedRef<boolean>
  addRequest(request: IRequest): void
}
