<template>
  <Card>
    <h3>
      Room: F{{ floorNumber }}, R{{ roomNumber }}
    </h3>

    <p>
      Capacity: {{capacity}}
    </p>
    <p>
      Status: {{ status }}
    </p>
    
    <template v-if="!guestState.show">
      <Button @click="getButtonProps.handler">
        {{ getButtonProps.text }}
      </Button>
    </template>
    <div v-else class="flex space-x-2">
      <SelectInput :options="guestOptions" v-model="guestState.selectedGuest" />
      <Button 
      :disabled="!guestState.selectedGuest"
        @click="onClickAssign"
        >
        submit
      </Button>
      <Button @click="guestState.show = false">
        cancel
      </Button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { Card, Button, SelectInput } from '@components/ui';
import { useGuest } from '@composables/Guest';
import { useRoom } from '@composables/Room';
import { ROOM_STATUS } from '@models/Room';
import { computed, ref } from 'vue';

interface IProps {
  id: string;
  floorNumber: number;
  roomNumber: number;
  capacity: number;
  status: ROOM_STATUS
}
const props = defineProps<IProps>()
const emits = defineEmits(['assignGuest'])

const guestState = ref({
  show: false,
  selectedGuest: null as null | string
});
const { setRoomReady, unAssignRoom, assignRoom } = useRoom()
const { getAvailableGuests } = useGuest()
const guestOptions = computed(() => getAvailableGuests.value.map((g) => {
  return {
    label: g.name,
    value: g.id
  }
}))
function assignGuest() {
  guestState.value.show=true
}
function onClickAssign() {
  assignRoom(props.id, guestState.value.selectedGuest!); 
  guestState.value.show = false
  guestState.value.selectedGuest = null
}



const getButtonProps = computed(() => {
  switch(props.status) {
    case ROOM_STATUS.READY:
      return {
        text: 'assign guest',
        handler: assignGuest,
      }
    case ROOM_STATUS.MAINTENANCE:
      return {
        text: 'set as ready',
        handler: () => setRoomReady(props.id),
      }
    case ROOM_STATUS.TAKEN: 
      return {
        text: 'empty room',
        handler: () => unAssignRoom(props.id)
      }
    default: 
      return {
        text: '',
        handler: undefined
      }
  }
})
</script>
