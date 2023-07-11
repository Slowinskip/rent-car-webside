import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  car: [
    {
      model: "Mercedes",
      mark: "E Class",
      year: "2020",
      transmission: "Automatic",
      cost: "200",
      id: 0,
    },
    {
      model: "Peugeoth",
      mark: "3008",
      year: "2018",
      transmission: "Automatic",
      cost: "150",
      id: 1,
    },
    {
      model: "Skoda",
      mark: "Kamiq",
      year: "2021",
      transmission: "Manual",
      cost: "210",
      id: 2,
    },
    {
      model: "Hyundai",
      mark: "Elantra",
      year: "2022",
      transmission: "Automatic",
      cost: "250",
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
