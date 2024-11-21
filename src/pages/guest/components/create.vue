<template>
  <Modal v-bind="$attrs" v-model="show" @submit="handleSubmit">
    <div class="space-y-3">
      <TextInput v-model="model.name" label="name"/>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { Modal, TextInput } from '@components/ui';
import { useGuest } from '@composables/Guest';
import { RootModel } from '@models/Guest';
import { ref, useId } from 'vue';

const show = defineModel();

function modelInitializer(){
  return {
    name: "",
    id: useId(),
  }
}
const model = ref<RootModel>(modelInitializer())
function resetModel(){
  model.value = modelInitializer()
}

const { addNewGuest } = useGuest()

function handleSubmit() {
  addNewGuest(model.value);
  resetModel()
  show.value=false
}
</script>