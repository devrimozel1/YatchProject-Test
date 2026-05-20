import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RegisterState {
    value: number
    users: any[]
}

const initialState: RegisterState = {
    value: 0,
    users: []
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        register: (state, action: PayloadAction<any>) => {
            state.users.push(action.payload)
        }
     
    },
})

export const { increment, register } = registerSlice.actions

export default registerSlice.reducer