import { createSlice } from "@reduxjs/toolkit";
import React from 'react'


const moviesSlice = createSlice({
    name: 'movies',
    initialState: { value: [
    {
      title : "Aqua Man and The Lost Kingdom",
      genre: ["Action", "Adventure","Fantasy"],
      descriptions: "lorem ipsum dolor sit amet, consectetur lorem",
      sypnosis: "",
      src:"", 
    },
    {
        title : "The Rain",
        genre: ["Action", "Adventure","Fantasy"],
        descriptions: "",
        sypnosis: "",
        src:"", 
      },
    ]},
    
    reducers: {
        enter: (state, action) => {
            state.value = action.payload;
        },

    },
});
export const {enter} = moviesSlice.actions;

export default moviesSlice.reducer;