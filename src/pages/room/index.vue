<template>
  <div class="flex space-x-4">
    <h1>
    Rooms
  </h1>
  <Button @click="openCreateModal">
    add new room
  </Button>
  </div>
  <Create v-model="showCreateModal" />
  <List />
</template>

<script setup lang="ts">
import { Button } from '@components/ui';
import List from './components/list.vue';
import Create from './components/create.vue';
import { ref } from 'vue';

const showCreateModal = ref(false)
function openCreateModal() {
  showCreateModal.value = true;
}

</script>