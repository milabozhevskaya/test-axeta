import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { UserState } from "shared";

const initialState: UserState = {
  name: "John Smith",
  location: "123 Main St, Anytown USA",
  avatar: "https://example.com/avatar.jpg",
  language: "English",
  portfolio: [
    { text: "Bootstrap 4 Material Design (Sample Link)", link: "" },
    { text: "Modern JavaScript stack", link: "" },
    { text: "Datepicker for twitter bootstrap", link: "" },
    { text: "Fast and reliable Bootstrap widgets in Angular", link: "" },
  ],
  experience: [
    { name: "PHP", year: 6 },
    { name: "Ruby", year: 2 },
    { name: "JavaScript", year: 4.5 },
  ],
  availability: {
    time: "Full time",
    prefered: "GitHub, Mac OSX",
  },
  code: `<div class='golden-grid'>
    <div style='grid-area: 11 / 1 / span 10 / span 12;'>
    </div>
</div>`,
  phrase: {
    amazing: "The only true wisdom is in knowing you know nothing...",
    lookingFor: "There is only one good, knowledge, and one evil, ignorance.",
  },
  error: "",
  loading: false,
};

const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
    },
    setAvatar(state, action: PayloadAction<string>) {
      state.avatar = action.payload;
    },
    setExperience(
      state,
      action: PayloadAction<Array<{ name: string; year: number }>>
    ) {
      if (!state.error) {
        state.experience = action.payload;
      }
    },
  },
  extraReducers: () => {},
});

export const userReducer = userSlice.reducer;
export const { setName, setLocation, setAvatar, setExperience } =
  userSlice.actions;
