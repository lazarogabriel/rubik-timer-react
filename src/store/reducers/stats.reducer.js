import { 
    ADD_TIME_CARD, 
    DELETE_TIME_CARD,
    SAVE_TIME_CARD 
} from "../actions/stats.action";

export default function(state, action){
    switch (action.type) {
        case ADD_TIME_CARD: 
            return {
                ...state,
                timeCards: [...state.timeCards, action.playload]
            };
        case DELETE_TIME_CARD:
            return {
                ...state,
                timeCards: state.timeCards.filter(t => t.Id !== action.playload)
            };
        case SAVE_TIME_CARD:
            alert("Para poder guardar time cards tenes que logearte.");
            return state;
    
        default:
            return state;
    }
}