<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue'
import BaseSpinner from '@/components/ui/BaseSpinner.vue'
import { provide, ref } from 'vue'
import { LOADING_VISIBILITY } from '@/constants/provide-keys.ts'

const isShowLoading = ref(false)

function updateLoadingVisibility(loadingState = false) {
  isShowLoading.value = loadingState
}

provide(LOADING_VISIBILITY, { isShowLoading, updateLoadingVisibility })
</script>

<template>
  <the-header />
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component" />
    </transition>
  </router-view>
  <base-spinner v-if="isShowLoading" />
</template>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
