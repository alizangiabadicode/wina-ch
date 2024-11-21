import { useGuestsStore } from "@stores/useGuestsStore";
import { computed } from "vue";

function useGuest() {
  const store = useGuestsStore()
  const guests = computed(() => store.getGuests);
  const getAvailableGuests = computed(() => store.getAvailableGuests);
  
  
  return {
    guests,
    getAvailableGuests,
    addNewGuest: store.addNewGuest,
    editGuestName: store.editGuestName,
    deleteGuest: store.deleteGuest
  }
}

export {
  useGuest
}