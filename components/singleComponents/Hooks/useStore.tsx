import { SpringValue } from "react-spring";
import create from "zustand";

interface globalStore {
  GPUTier: number;
  setGPUTier: (GPU: number) => void;
  scroll: SpringValue | null;
  setScrollY: (y: SpringValue) => void;
}

const useStore = create<globalStore>((set) => ({
  GPUTier: 0,
  setGPUTier: (GPU: number) => set({ GPUTier: GPU }),
  scroll: null,
  setScrollY: (y: SpringValue) => set({ scroll: y }),
}));

export default useStore;
