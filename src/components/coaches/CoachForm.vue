<script setup lang="ts">
import { computed, ref, defineEmits, reactive } from 'vue'
import type { area } from '@/types'
import type { ICoach, ValidatedCoachDataMap } from '@/types/Coach'

type IEvents = {
  (e: 'register-coach', coach: ICoach): void
}
type ValidateCoach = ValidatedCoachDataMap<
  ICoach,
  'firstName' | 'lastName' | 'hourlyRate' | 'description' | 'areas'
>

const emit = defineEmits<IEvents>()

const validatedCoach = reactive<ValidateCoach>({
  firstName: {
    value: '',
    isValid: true
  },
  lastName: {
    value: '',
    isValid: true
  },
  areas: {
    value: [],
    isValid: true
  },
  description: {
    value: ''
  },
  hourlyRate: {
    value: 0,
    isValid: true
  }
})

const isFrontendCoach = computed(
  () => !!validatedCoach.areas.value.find((area) => area === 'frontend')
)
const isBackendCoach = computed(
  () => !!validatedCoach.areas.value.find((area) => area === 'backend')
)
const isCareerCoach = computed(() => !!validatedCoach.areas.value.find((area) => area === 'career'))

const setArea = (event: MouseEvent) => {
  const { id: inputId, checked: isActive } = event.target as HTMLInputElement
  if (isActive) {
    !validatedCoach.areas.value.includes(inputId as area) &&
      validatedCoach.areas.value.push(inputId as area)
  } else {
    validatedCoach.areas.value = validatedCoach.areas.value.filter(
      (area) => area !== (inputId as area)
    )
  }
}

// //#region validation

const isFirstNameValid = () => {
  if (validatedCoach.firstName.value === '') {
    validatedCoach.firstName.isValid = false
    return false
  }
  return true
}

const isLastNameValid = () => {
  if (validatedCoach.lastName.value === '') {
    validatedCoach.lastName.isValid = false
    return false
  }
  return true
}

const isRateValid = () => {
  if (validatedCoach.hourlyRate.value <= 0) {
    validatedCoach.hourlyRate.isValid = false
    return false
  }
  return true
}

const isAreasValid = () => {
  if (validatedCoach.areas.value.length === 0) {
    validatedCoach.areas.isValid = false
    return false
  }
  return true
}

const clearValidity = (input: keyof ValidateCoach) => {
  validatedCoach[input].isValid = true
}

// //#endregion validation

const isFormValid = (): boolean => {
  isFirstNameValid()
  isLastNameValid()
  isRateValid()
  isAreasValid()
  return isFirstNameValid() && isLastNameValid() && isRateValid() && isAreasValid()
}

const submitForm = () => {
  if (!isFormValid()) return
  const coach: ICoach = {
    id: Math.random().toString(),
    firstName: validatedCoach.firstName.value,
    lastName: validatedCoach.lastName.value,
    areas: validatedCoach.areas.value,
    description: validatedCoach.description.value,
    hourlyRate: validatedCoach.hourlyRate.value!
  }
  emit('register-coach', coach)
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <div :class="['form-control', { invalid: !validatedCoach.firstName.isValid }]">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        v-model.trim="validatedCoach.firstName.value"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!validatedCoach.firstName.isValid">Firstname must not be empty.</p>
    </div>
    <div :class="['form-control', { invalid: !validatedCoach.lastName.isValid }]">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        v-model.trim="validatedCoach.lastName.value"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!validatedCoach.lastName.isValid">Lastname must not be empty.</p>
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        name="description"
        id="description"
        rows="5"
        v-model.trim="validatedCoach.description.value"
      ></textarea>
      <p v-if="!validatedCoach.description.isValid">Description must not be empty.</p>
    </div>
    <div :class="['form-control', { invalid: !validatedCoach.hourlyRate.isValid }]">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        name="rate"
        id="rate"
        v-model.number="validatedCoach.hourlyRate.value"
        @blur="clearValidity('hourlyRate')"
      />
      <p v-if="!validatedCoach.hourlyRate.isValid">Rate must be greater than 0.</p>
    </div>
    <div :class="['form-control', { invalid: !validatedCoach.areas.isValid }]">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          name="frontend"
          id="frontend"
          :checked="isFrontendCoach"
          @click="setArea"
          @blur="clearValidity('areas')"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="backend"
          id="backend"
          :checked="isBackendCoach"
          @click="setArea"
          @blur="clearValidity('areas')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="career"
          id="career"
          :checked="isCareerCoach"
          @click="setArea"
          @blur="clearValidity('areas')"
        />
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!validatedCoach.areas.isValid">At least one expertise must be selected.</p>

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
