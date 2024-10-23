import React, { createContext, useReducer } from "react";
import { doctors } from "../data/data";

// Create context
export const AppointmentContext = createContext();

// Define the initial state
const initialState = {
  patientName: "",
  doctorName: "",
  doctors: doctors,
  selectTime: "",
  number: "",

};

// Define reducer
const appointmentReducer = (state, action) => {
  switch (action.type) {
    case "SET_PATIENT_NAME":
      return { ...state, patientName: action.payload };
    case "SET_DOCTOR_NAME":
      return { ...state, doctorName: action.payload };
    case "SET_TIME":
      return { ...state, selectTime: action.payload };
      case "SET_NUMBER":
        return {...state, number: action.payload};
    case "RESET_APPOINTMENT":
      return initialState;
    default:
      return state;
  }
};

// Create the provider
export const AppointmentProvider = ({ children }) => {
  const [state, dispatch] = useReducer( appointmentReducer, initialState);

  return (
    <AppointmentContext.Provider value={{ state, dispatch }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentContext;
