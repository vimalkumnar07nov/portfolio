import { useContext, useReducer } from "react";
import React from "react";
import reducer from "./Reducer";

// creat context
// provider
// consummer / usecontext

const AppContext = React.createContext();

const initialState = {
    name: '',
    image: '',
};


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateHome = () => {
        return dispatch(
            {
                type: 'HOME_UPDATE',
                payload: {
                    name: 'vimal kumar',
                    image: './images/mypic.jpg',
                    desc : 'I am ReactJs developer. I am looking for job in front-end developer.',
                }
            },
        );
    };

    const updateAbout = () => {
        return dispatch(
            {
                type: 'ABOUT_UPDATE',
                payload: {
                    name: 'Know About Me',
                    image: './images/aboutus.svg',
                    desc : 'I am ReactJs developer. I am looking for job in front-end developer.',
                }
            },
        );
    };

    // const updateMybio = () => {
    //     return dispatch(
    //         {
    //             type: 'MYBIO_UPDATE',
    //             payload: {
    //                 name: 'This is my bio Page',
    //                 image: './images/logo.png',
    //             }
    //         },
    //     );
    // };

    return <AppContext.Provider value={{ ...state, updateHome, updateAbout}}>{children}</AppContext.Provider>
};

// global custom hooks

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };