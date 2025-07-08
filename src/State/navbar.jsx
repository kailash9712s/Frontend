import { createContext, useContext, useReducer } from "react";

const globalContext = createContext();

// initialState
const initialState = {
    currentPoint: "Home"
}

// its some kind of function use to change state
const reducer = (state, payload) => {
    switch (payload.action) {
        case 'update-point':
            return { ...state, currentPoint: payload.data };
        default:
            return state;
    }
}

// set global provider

const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (<globalContext.Provider value={{ state, dispatch }}>
        {children}
    </globalContext.Provider>
    )
}

// return context
const getContext = () => {
    const context = useContext(globalContext);

    if (!context) {
        throw new Error("use context with in provider");
    }

    return context;
}

export { GlobalStateProvider, getContext };