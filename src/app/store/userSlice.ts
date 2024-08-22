import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";

import type { UserState } from "shared";

const initialState: UserState = {
  name: "John Smith",
  location: { address: "Москва", coords: [55.751244, 37.618423] },
  address: "Москва",
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

const setError = (
  state: UserState,
  action?: PayloadAction<string | undefined>
) => {
  const errorMessage = action?.payload ?? "unknown error";
  if (!state.error) {
    state.loading = false;
    state.error = errorMessage;
  }
};

const resetStateError = (state: UserState) => {
  state.loading = true;
  state.error = "";
};

export const setUserLocation = createAsyncThunk<
  { address: string; coords: Array<number> },
  () => Promise<{ address: string; coords: Array<number> }>,
  { rejectValue: string }
>(
  "userReducer/setUserLocation",
  async (callback, { rejectWithValue }) => {
    try {
      const result = await callback();

      return result;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(`Произошла ошибка при поиске адреса: ${error.message}`);
      }

      return rejectWithValue("Произошла ошибка при поиске адреса: unknown error");
    }
  }
);


const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setAvatar(state, action: PayloadAction<string>) {
      state.avatar = action.payload;
    },
    setAddress(state, action: PayloadAction<string>) {
      state.address = action.payload;
    },
    setExperience(
      state,
      action: PayloadAction<Array<{ name: string; year: number }>>
    ) {
      state.experience = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(setUserLocation.pending, resetStateError);
    builder.addCase(setUserLocation.rejected, setError);
    builder.addCase(setUserLocation.fulfilled, (state, action) => {
      state.location = action.payload;
      state.loading = false;
    });
  },
});

export const userReducer = userSlice.reducer;
export const { setName, setAvatar, setAddress, setExperience } =
  userSlice.actions;
