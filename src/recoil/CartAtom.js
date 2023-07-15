import { atom, selector } from "recoil";

export const CartAtom = atom({
  key: "CartAtom",
  default: [],
});

export const TotalQuantitySelector = selector({
  key: "TotalQuantitySelector",
  get: ({ get }) => {
    const CartItem = get(CartAtom);
    return CartItem.length;
  },
});

export const TotalPriceSelector = selector({
  key: "TotalPriceSelector",
  get: ({ get }) => {
    const CartItem = get(CartAtom);
    return CartItem.reduce((누적값, 현재값) => 누적값 + 현재값.price, 0);
  },
});
