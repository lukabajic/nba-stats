import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getPlayers } from "../../store/actions/players";

import "./styles.scss";

const Index = ({ players, loading, error, getPlayers }) => {
  useEffect(() => {
    if (!players) {
      getPlayers();
    }
  }, [players, getPlayers]);

  if (loading) return <div>Loading</div>;

  if (error) return <div>Erorr</div>;

  return <div>Index</div>;
};

export default connect(
  (state) => ({
    players: state.players.players,
    loading: state.players.loading,
    error: state.players.error,
  }),
  {
    getPlayers,
  }
)(Index);
