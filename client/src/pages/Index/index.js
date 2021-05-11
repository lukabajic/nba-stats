import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getPlayers } from "../../store/actions/players";

import Loader from "../../components/Loader";
import Header from "../../components/Header";

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
        <div className="PlayersList">
          {players?.map((p) => (
            <div>{p.firstName}</div>
          ))}
        </div>
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
