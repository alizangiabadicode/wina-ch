import { computed } from "vue";
import { useRoomStore } from "../../stores/useRoomsStore";

function useRoom() {
  const store = useRoomStore()
  const rooms = computed(() => store.getRooms);
  
  return {
    rooms,
    addNewRoom: store.addNewRoom,
    setRoomReady: store.setRoomReady,
    unAssignRoom: store.unAssignRoom,
    assignRoom: store.assignRoom
  }
}

export {
  useRoom
}