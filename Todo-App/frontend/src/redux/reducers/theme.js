import { createReducer } from "@reduxjs/toolkit"
import { setTheme } from "../actions/theme"
import { loadThemeState } from "../../utils/storages/themeStorage";

export const theme = createReducer(loadThemeState(), builder => {
  builder.addCase(setTheme, (state) => {
    if(state == 'light'){
      return 'dark'
    } else {
      return 'light'
    }
  })
})