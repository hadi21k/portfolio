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
  works: {
    cryptoVerse: {
      title: "CryptoVerse",
      description: "A cryptocurrency market tracker",
      sourceLink: "https://github.com/hadi21k/cryptomarket-app",
      liveDemo: "https://coinmarket.vercel.app",
    },
    motion: {
      title: "Motion",
      description: "A Simple landing page for transactional data",
      sourceLink: "https://github.com/hadi21k/Motion-website-Reactjs",
      liveDemo: "https://motionn.netlify.app/",
    },
    dashboard: {
      title: "Dashboard App",
      description: "Clone Dashbaord ",
      sourceLink: "https://github.com/hadi21k/Dashboard-app-react-tailwindcss",
      liveDemo: "https://dashboard-appp.netlify.app/dashboard",
    },
    teslaClone: {
      title: "Tesla Clone",
      description: "Tesla Website clone",
      sourceLink: "https://github.com/hadi21k/Tesla-Website-Clone",
      liveDemo: "https://teslawebsitee-clone.netlify.app/",
    },
    cryptoMarket: {
      title: "Crypto Market",
      description: "Crypto Website for lively prices of coins",
      sourceLink: "https://github.com/hadi21k/crypto-market-app-reactjs",
      liveDemo: "https://cryptomarketappp.netlify.app/",
    },
    pomodoroTimer: {
      title: "Pomodoro Timer",
      description: "Pomodoro App Timer for studying using pomodoro method",
      sourceLink: "https://github.com/hadi21k/pomodoro-timer-app-react",
      liveDemo: "https://pomodoro-timer-appp.netlify.app/",
    },
  },
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
