<script setup lang="ts">
import type { IRequest } from '@/types/Request'
import { computed } from 'vue'

interface IProps {
  request: IRequest
}

const props = defineProps<IProps>()
const { email, message } = props.request

const emailLink = computed(() => `mailto:${email}`)
</script>

<template>
  <li>
    <div>
      <a :href="emailLink">{{ email }}</a>
    </div>
    <p>{{ message }}</p>
  </li>
</template>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>
