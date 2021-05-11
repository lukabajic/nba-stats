import * as actionTypes from "./actionTypes";

const getPlayersStart = () => ({ type: actionTypes.GET_PLAYERS_START });

const getPlayersSuccess = (players) => ({
  type: actionTypes.GET_PLAYERS_SUCCESS,
  players,
});

const getPlayersFail = (error) => ({
  type: actionTypes.GET_PLAYERS_FAIL,
  error,
});

export const getPlayers = () => async (dispatch) => {
  dispatch(getPlayersStart());

  try {
    const res = await fetch("/api/players", { method: "GET" });
    const data = await res.json();

    if (!data.error) {
      dispatch(getPlayersSuccess(data.players));
    } else {
      dispatch(getPlayersFail(data.error));
    }
  } catch (err) {
    dispatch(getPlayersFail(err.message || err));
  }
};
