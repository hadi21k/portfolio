import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: true,
  timelineItemContent: [
    { year: "2003", description: "Born in Beirut" },
    { year: "2020,2021", description: "Start Front End Development" },
    { year: "2022", description: "Learn Back End Development" },
    { year: "2023", description: "Part Time Full Stack Development" },
    { year: "2024", description: "Finish Computer sceince degree" },
  ],
};

const dataSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { setDarkMode } = dataSlice.actions;
export default dataSlice.reducer;
