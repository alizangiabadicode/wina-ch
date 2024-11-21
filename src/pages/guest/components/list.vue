<template>
  <div class="grid grid-cols-3 gap-4">
    <GuestCard v-for="g in guests" :key="g.id" v-bind="{
      id: g.id,
      name: g.name
    }" @edit="onEdit(g)" />
  </div>
  <Edit v-model="editNameState.show" :guest="editNameState.guest!" />
</template>

<script setup lang="ts">
import Edit from './edit.vue';
import { RootModel } from '@models/Guest';
import { ref } from 'vue';
import GuestCard from './guestCard.vue';
import { useGuest } from '@composables/Guest';

const { guests } = useGuest()

const editNameState = ref({
  show: false,
  guest: null as null | RootModel
})
function onEdit(guest: RootModel) {
  editNameState.value.guest = ({...guest});
  editNameState.value.show = true;
  
}
</script>