import { atom } from "recoil";

export const userState = atom({
  key: "userState", // システム全体でこのstateを参照できる一意のキー（ファイル名など）
  default: { isAdmin: false } //初期値
});
