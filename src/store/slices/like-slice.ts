import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface LikeState {
    likedProducts: number[]
}

const initialState: LikeState = {
    likedProducts: []
}

export const likeSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        toggleLike: (state, action: PayloadAction<number>) => {
            const productId = action.payload
            if (state.likedProducts.includes(productId)) {
                state.likedProducts = state.likedProducts.filter(id => id !== productId)
            } else {
                state.likedProducts.push(productId)
            }
        }
    }
})

export const { toggleLike } = likeSlice.actions
export default likeSlice.reducer