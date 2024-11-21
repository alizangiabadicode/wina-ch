import { defineStore } from 'pinia'
import { ROOM_STATUS, RootModel } from '@models/Room'
import { useGuestsStore } from '@stores/useGuestsStore'

export const useRoomStore = defineStore('rooms', {
  state: () => ({
    rooms: [] as RootModel[],
  }),
  actions: {
    addNewRoom(data: RootModel): void {
      this.rooms.push(data)
    },
    deleteRoom(id: string) {
      this.rooms.splice(this.rooms.findIndex(r => r.id === id), 1)
    },
    assignRoom(roomId: string, guestId: string) {
      const guestStore = useGuestsStore();
      const guest = guestStore.getGuests.find(g => g.id === guestId)!
      const room = this.rooms.find(r => r.id === roomId)!;

      room.guest = guest;
      room.status = ROOM_STATUS.TAKEN;
    },
    unAssignRoom(roomId: string) {
      const room = this.rooms.find(r => r.id === roomId)!;
      room.guest = undefined;
      room.status = ROOM_STATUS.MAINTENANCE;
    },
    setRoomReady(roomId: string) {
      const room = this.rooms.find(r => r.id === roomId)!;
      room.status = ROOM_STATUS.READY;
    }
  },
  getters: {
    getRooms: (state) => state.rooms,
    getCurrentGuests: (state) => state.rooms.map(r => r.guest?.id).flat()
  }
})
