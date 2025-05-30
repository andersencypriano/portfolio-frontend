import { create } from 'zustand'

type Drawer = {
  drawerOpen: boolean
  changeDrawer: () => void
}

export const useDrawer = create<Drawer>()((set) => ({
  drawerOpen: false,
  changeDrawer: () => set((state) => ({ drawerOpen: !state.drawerOpen })),
}))