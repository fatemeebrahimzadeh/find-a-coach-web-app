<script setup lang="ts">
import RequestItem from '@/components/requests/RequestItem.vue'
import { useRequestsStore } from '@/stores/Requests'
import { storeToRefs } from 'pinia'

const store = useRequestsStore()
const { requests, hasRequests } = storeToRefs(store)
</script>

<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Reactived</h2>
      </header>
      <ul v-if="hasRequests">
        <request-item v-for="request in requests" :key="request.id" :request="request" />
      </ul>
      <h3 v-else>You haven't recieved any requests yet!</h3>
    </base-card>
  </section>
</template>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
