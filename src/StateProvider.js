/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer, useContext, createContext } from "react";

const CreateKontext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <CreateKontext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </CreateKontext.Provider>
);
export const stateValueProvider = () => useContext(CreateKontext);
