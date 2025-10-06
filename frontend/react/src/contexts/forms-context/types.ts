import { type Dispatch, type SetStateAction } from "react";
import type {
  GiftIdeaType,
  WishesFormData,
} from "@components/common/wishes-form/types";
import type { FormData as RoomFormData } from "@components/create-room-page/create-room-form/types";
import type { FormData as DetailsFormData } from "@components/common/details-form/types";

export type UserData = DetailsFormData & WishesFormData;

export interface RoomData {
  room: RoomFormData;
  user: UserData;
}

type UserSubmitData = DetailsFormData &
  Omit<WishesFormData, "wishList"> & {
    wishList: Omit<GiftIdeaType, "id">[];
  };

export type CreateRoomSubmitData = {
  room: RoomFormData;
  adminUser: UserSubmitData;
};

export type FormContextType = {
  currentStep: number;
  onNextStep: () => void;
  onPreviousStep: () => void;
  roomData: RoomData;
  setRoomData: Dispatch<SetStateAction<RoomData>>;
  getCreateRoomData: () => CreateRoomSubmitData;
  getJoinRoomDetailsData: () => UserSubmitData;
};
