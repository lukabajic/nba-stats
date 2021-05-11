import * as actionTypes from "../actions/actionTypes.js";

const initialState = {
  players: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PLAYERS_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.GET_PLAYERS_SUCCESS:
      return {
        ...state,
        players: action.players,
        error: null,
        loading: false,
      };
    case actionTypes.GET_PLAYERS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
