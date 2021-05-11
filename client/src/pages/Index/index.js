import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getPlayers } from "../../store/actions/players";

import Loader from "../../components/Loader";
import Header from "../../components/Header";
import PlayerList from "./PlayerList";

import "./styles.scss";

const Index = ({ players, loading, error, getPlayers }) => {
  useEffect(() => {
    if (!players) {
      getPlayers();
    }
  }, [players, getPlayers]);

  if (loading) return <Loader />;

  if (error) return <div>Erorr</div>;

  return (
    <>
      <Header />
      <main className="Main">
        <PlayerList players={players} />
      </main>
    </>
  );
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
