<template>
  <div class="grid grid-cols-3 gap-4">
    <RoomCard v-for="r in rooms" :key="r.id" v-bind="{
      floorNumber: r.floorNumber,
      capacity: r.capacity, 
      roomNumber: r.roomNumber,
      status: r.status,
      id: r.id,
    }" />
  </div>
</template>

<script setup lang="ts">
import { useRoom } from '@composables/Room';
import RoomCard from './roomCard.vue';

const { rooms } = useRoom()
</script>