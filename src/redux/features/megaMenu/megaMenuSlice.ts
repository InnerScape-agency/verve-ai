import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

// define a type for the slice state
interface MenuState {
  isFeaturesOpen: boolean
  isResourcesOpen: boolean
}

// define the initial state using that type
const initialState: MenuState = {
  isFeaturesOpen: false,
  isResourcesOpen: false,
}

// create the slice
export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleOpen: (state, action: PayloadAction<'features' | 'resources'>) => {
      const menuName = action.payload // toggle the corresponding menu based on the payload

      switch (menuName) {
        case 'features':
          state.isFeaturesOpen = !state.isFeaturesOpen
          break
        case 'resources':
          state.isResourcesOpen = !state.isResourcesOpen
          break
        default:
          break
      }
    },
  },
})

// selector
export const selectMenuState = (state: RootState) => state.menu
export const { toggleOpen } = menuSlice.actions
export default menuSlice.reducer
