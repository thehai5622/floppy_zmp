import { atom } from "recoil";

export interface IUserInfo {
  id: string
  name: string
  avatar: string
}

export const userState = atom<IUserInfo>({
  key: "user",
  default: {
    id: '12345678',
    name: 'Zalo',
    avatar: 'ZA',
  }
})
