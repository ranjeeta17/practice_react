import React, { useContext } from "react";

const UseName= React.createContext()

const ContextProvider=UseName.Provider
const ContextConsumer=UseName.Consumer

export {ContextProvider,ContextConsumer,UseName}


