import { createContext, useReducer } from 'react';
import statsReducer from '../store/reducers/stats.reducer';
import {
    ADD_TIME_CARD,
    DELETE_TIME_CARD, 
    SAVE_TIME_CARD
}from '../store/actions/stats.action';

export const StatsContext = createContext();

export const StatsProvider = (props) => {
    
    const initialState = {
        timeCards: []
    };

    const [state, dispatch] = useReducer(statsReducer, initialState);

    const addTimeCard = (timeCard) => 
    dispatch({
        type: ADD_TIME_CARD, 
        playload: timeCard 
    });

    const deleteTimeCard = (timeCardId) => 
    dispatch({ 
        type: DELETE_TIME_CARD,
        playload: timeCardId 
    });

    const saveTimeCard = (timeCardId) => 
    dispatch({ 
        type: SAVE_TIME_CARD, 
        playload: timeCardId 
    });
    

    return(
        <StatsContext.Provider value={{
            timeCards: state.timeCards,
            addTimeCard,
            deleteTimeCard,
            saveTimeCard
        }}>
            {props.children}
        </StatsContext.Provider>
    );
}