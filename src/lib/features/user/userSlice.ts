"use client"

import { createSlice } from "@reduxjs/toolkit"
import { type User } from "../../../utils/types"

type userState = {
  user: User | null
}

const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem("user")
  if (!user) return null

  return JSON.parse(user)
}

const initialUserState: userState = {
  user: getUserFromLocalStorage(),
}

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (state, action) => {
      const loggedUser = action.payload
      localStorage.setItem("user", JSON.stringify(loggedUser))

      state.user = loggedUser
    },
  },
})

export const userReducer = userSlice.reducer
