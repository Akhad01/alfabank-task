import { createSlice } from '@reduxjs/toolkit'


interface LikeState {
    showLikedOnly: boolean
}

const initialState: LikeState = {
    showLikedOnly: false
}

export const likeSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        toggleFilter: (state) => {
            state.showLikedOnly = !state.showLikedOnly
        }
    }
})

export const { toggleFilter } = likeSlice.actions
export default likeSlice.reducer