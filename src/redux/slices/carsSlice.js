import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  car: [
    {
      model: "Mercedes",
      mark: "E Class",
      year: "2020",
      transmission: "Automatic",
      cost: "200",
      image: "./image/mb-e-class-4d-blue-2021_preview_rev_1.png",
      id: 0,
    },
    {
      model: "Peugeoth",
      mark: "3008",
      year: "2018",
      transmission: "Automatic",
      cost: "150",
      image: "./image/peugeot-3008-suv-blue-2021.png",
      id: 1,
    },
    {
      model: "Skoda",
      mark: "Kamiq",
      year: "2021",
      transmission: "Manual",
      cost: "210",
      image: "./image/skoda-kamiq-suv-black-2021.png",
      id: 2,
    },
    {
      model: "Hyundai",
      mark: "Elantra",
      year: "2022",
      transmission: "Automatic",
      cost: "250",
      image: "./image/hyundai-elantra-4d-schwarz-2017_preview_rev_1.png",

      id: 3,
    },
  ],
};

export const carsSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = carsSlice.actions;

export default carsSlice.reducer;
