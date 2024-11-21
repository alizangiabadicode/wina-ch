<template>
  <Card>
    <h3>
      guest: {{ name }}
    </h3>
    <div class="flex space-x-2">
      <Button @click="onClickEdit">
        edit
      </Button>
      <Button :disabled="!canDelete" @click="deleteGuest(id)">
        delete
      </Button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { Card, Button } from '@components/ui';
import { useGuest } from '@composables/Guest';
import { computed } from 'vue';

interface IProps {
  id: string;
  name: string;
}
const props = defineProps<IProps>()

const emits = defineEmits(['edit'])
function onClickEdit() {
  emits('edit')
}

const { deleteGuest, getAvailableGuests } = useGuest()

const canDelete = computed(() => getAvailableGuests.value.find(g => g.id=== props.id))

</script>
