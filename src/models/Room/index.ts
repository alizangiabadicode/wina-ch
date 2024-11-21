import { RootModel as GuestRoomModel } from "@models/Guest";

export enum ROOM_STATUS {
  READY="READY",
  TAKEN = "TAKEN",
  MAINTENANCE="MAINTENANCE"
}

export interface RootModel {
  id: string;
  floorNumber: number;
  roomNumber: number;
  capacity: number;
  status: ROOM_STATUS;
  guest?: GuestRoomModel;
}