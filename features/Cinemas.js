import { createSlice } from "@reduxjs/toolkit";

export const cinemaSlice = createSlice({
    name: 'cinema',
    initialState: { value: [
        {
            mall:"SM CDO Downtown",
            src: require("../assets/SMDT.png"),
            isCheked: false,
        },
        {
            mall:"Centrio Ayala Mall",
            src: require("../assets/centrio.png"),
            isCheked: false,
        },
        {
            mall:"SM City CDO",
            src: require("../assets/smuptown.png"),
            isCheked: false,
        },
    ]},
    reducers: {
      checked: (state,action) => {
        state.value = state.value.map(mall => {
            if (mall.mall === action.payload.mall) {
                return {...mall, isCheked:true};
            }
        return mall;
        })
      }
    },
});

export const { checked } = cinemaSlice.actions;
export default cinemaSlice.reducer;