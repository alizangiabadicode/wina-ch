<template>
  <Modal v-bind="$attrs" v-model="show" @submit="handleSubmit">
    <div class="space-y-3">
      <TextInput v-model="guest.name" label="name"/>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { Modal, TextInput } from '@components/ui';
import { useGuest } from '@composables/Guest';
import { RootModel } from '@models/Guest';

const show = defineModel();
const guest = defineModel<RootModel>('guest', {
  required: true
});

const emits = defineEmits(['submit'])

const { editGuestName } = useGuest()

function handleSubmit() {
  editGuestName(guest.value!.id, guest.value!.name)
  show.value=false
}
</script>