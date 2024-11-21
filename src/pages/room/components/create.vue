<template>
  <Modal v-bind="$attrs" v-model="show" @submit="handleSubmit">
    <div class="space-y-3">
      <TextInput v-model="model.floorNumber" label="floor number" type="number" min="0"/>
      <TextInput v-model="model.roomNumber" label="room number" type="number" min="0"/>
      <TextInput v-model="model.capacity" label="capacity" type="number" min="0"/>
      <SelectInput v-model="model.status" label="status" :options="options"/>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { Modal, TextInput, SelectInput } from '@components/ui';
import { useRoom } from '@composables/Room';
import { ROOM_STATUS, RootModel } from '@models/Room';
import { ref, useId } from 'vue';

const show = defineModel();
const options = [({label: ROOM_STATUS.READY, value: ROOM_STATUS.READY })]

function modelInitializer(){
  return {
    capacity: 0,
    floorNumber: 0,
    id: useId(),
    roomNumber: 0,
    status: ROOM_STATUS.READY
  }
}
const model = ref<RootModel>(modelInitializer())
function resetModel(){
  model.value = modelInitializer()
}

const { addNewRoom } = useRoom()

function handleSubmit() {
  addNewRoom(model.value);
  resetModel()
  show.value=false
}
</script>