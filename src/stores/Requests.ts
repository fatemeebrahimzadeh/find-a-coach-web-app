import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { IContact } from './../types/Contact'

export const useContactsStore = defineStore('contacts', () => {
  const contacts = reactive<IContact[]>([])

  const addContact = (contact: IContact): void => {
    contacts.push(contact)
  }

  return { contacts, addContact }
})
