import { createContext, useState } from 'react';

export const StatsContext = createContext();

export const StatsProvider = (props) => {
    const [timeCards, setTimeCard] = useState([]);
    return(
        <StatsContext.Provider value={[timeCards, setTimeCard]}>
            {props.children}
        </StatsContext.Provider>
    );
}