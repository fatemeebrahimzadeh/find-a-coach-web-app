<script setup lang="ts">
import { computed } from 'vue'

interface IProps {
  type: string
  title: string
}

const props = defineProps<IProps>()

const text = computed(() => props.title?.toUpperCase())
</script>

<template>
  <span :class="['badge', type]">
    {{ text }}
  </span>
</template>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: #3d008d;
  color: white;
}

.backend {
  background-color: #71008d;
  color: white;
}

.career {
  background-color: #8d006e;
  color: white;
}
</style>
