import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import type { IRequest, IRequestStore } from './../types/Request'

export const useRequestsStore = defineStore<string, IRequestStore>('requests', () => {
  const requests = reactive<IRequest[]>([])

  const hasRequests = computed<boolean>(() => requests && requests.length > 0)

  const addRequest = (request: IRequest): void => {
    requests.push(request)
  }

  return { requests, hasRequests, addRequest }
})
