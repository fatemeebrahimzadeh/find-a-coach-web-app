<script setup lang="ts">
import { computed, ref, defineEmits } from 'vue'
import type { ICoach } from './CoachItem.vue'

type IEvents = {
  (e: 'register-coach', coach: ICoach): void
}

const emit = defineEmits<IEvents>()

type area = 'frontend' | 'backend' | 'career'

const firstname = ref<string>('')
const lastname = ref<string>('')
const description = ref<string>('')
const rate = ref<number>()
const areas = ref<Array<area>>([])
const isFrontendCoach = computed(() => !!areas.value.find((area) => area === 'frontend'))
const isBackendCoach = computed(() => !!areas.value.find((area) => area === 'backend'))
const isCareerCoach = computed(() => !!areas.value.find((area) => area === 'career'))

const setArea = (event) => {
  const inputId: area = event.target.id
  const isActive: boolean = event.target.checked
  if (isActive) {
    !areas.value.includes(inputId) && areas.value.push(inputId)
  } else {
    areas.value = areas.value.filter((area) => area !== inputId)
  }
}

const isFormValid = (): boolean => {
  if (firstname.value === '') return false
  if (lastname.value === '') return false
  if (description.value === '') return false
  if (rate.value === undefined) return false
  if (areas.value.length === 0) return false
  return true
}

const submitForm = () => {
  if (!isFormValid()) return
  const coach: ICoach = {
    id: Math.random().toString(),
    firstName: firstname.value,
    lastName: lastname.value,
    areas: areas.value,
    description: description.value,
    hourlyRate: rate.value!
  }
  emit('register-coach', coach)
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstname">Firstname</label>
      <input type="text" name="firstname" id="firstname" v-model.trim="firstname" />
    </div>
    <div class="form-control">
      <label for="lastname">Lastname</label>
      <input type="text" name="lastname" id="lastname" v-model.trim="lastname" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea name="description" id="description" rows="5" v-model.trim="description"></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input type="number" name="rate" id="rate" v-model.number="rate" />
    </div>
    <div class="form-control">
      <input
        type="checkbox"
        name="frontend"
        id="frontend"
        :checked="isFrontendCoach"
        @click="setArea"
      />
      <label for="frontend">Frontend Development</label>
      <input
        type="checkbox"
        name="backend"
        id="backend"
        :checked="isBackendCoach"
        @click="setArea"
      />
      <label for="backend">Backend Development</label>
      <input type="checkbox" name="career" id="career" :checked="isCareerCoach" @click="setArea" />
      <label for="career">Career Advisory</label>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
