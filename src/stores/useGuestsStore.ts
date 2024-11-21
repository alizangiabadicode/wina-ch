import { defineStore } from 'pinia'
import { RootModel } from '@models/Guest'
import { useRoomStore } from './useRoomsStore';

export const useGuestsStore = defineStore('guests', {
  state: () => ({
    guests: [] as RootModel[],
  }),
  actions: {
    addNewGuest(data: RootModel) {
      this.guests.push(data)
    },
    editGuestName(id: string, name: string) {
      const g = this.guests.find(g => g.id === id)!;
      g.name = name;
    },
    deleteGuest(id: string){
      const gIdx = this.guests.findIndex(g => g.id === id)!;
      this.guests.splice(gIdx, 1)
    }
  },
  getters: {
    getGuests: (state) => state.guests,
    getAvailableGuests: (state) => {
      const roomStore = useRoomStore();
      return state.guests.filter(g => !roomStore.getCurrentGuests.includes(g.id))
    },
  }
})
