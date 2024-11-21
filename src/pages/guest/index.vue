<template>
  <div class="flex space-x-3">
    <h1>
      Guest
    </h1>
    <Button @click="openCreateModal">
    add new room
    </Button>
  <Create v-model="showCreateModal" />
</div>
<List />

</template>

<script setup lang="ts">
import { Button } from '@components/ui';
import Create from './components/create.vue';
import { ref } from 'vue';
import List from './components/list.vue';

const showCreateModal = ref(false)
function openCreateModal() {
  showCreateModal.value = true;
}
</script>