import { configureStore } from '@reduxjs/toolkit'
import MegaMenu from '../features/megaMenu/megaMenuSlice'

export const store = configureStore({
  reducer: {
    menu: MegaMenu,
  },
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
