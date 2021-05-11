import React, { useState, useEffect } from "react";

import { Spinner } from "../../../components/Loader";
import Stat from "../../../components/Stat";

import "./styles.scss";

const PlayerInfo = ({ id }) => {
  // no need to  store this in a reducer
  // will not be using this data anywhere else
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/player-profile/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data.stats.stats.latest);
          setLoading(false);
        })
        .catch((err) => setError(err));
    }
  }, [id]);

  if (loading || !data)
    return (
      <div className="PlayerInfo__loading">
        <Spinner blue />
      </div>
    );

  if (error) return <div className="PlayerInfo__error">{error}</div>;

  return (
    <div className="PlayerInfo">
      <Stat name="Games Played" amount={data.gamesPlayed} />
      <Stat name="Field Goals Attempted" amount={data.fgm} />
      <Stat name="Field Goals Made" amount={data.fga} />
      <Stat name="Points" amount={data.points} pp={data.ppg} />
      <Stat name="Free Throw %" amount={`${data.points} %`} />
      <Stat name="Rebounds" amount={data.totReb} pp={data.rpg} />
      <Stat name="Assists" amount={data.assists} pp={data.apg} />
      <Stat name="Steals" amount={data.steals} pp={data.spg} />
      <Stat name="Blocks" amount={data.blocks} pp={data.bpg} />
      <Stat name="Turnovers" amount={data.turnovers} pp={data.topg} />
    </div>
  );
};

export default PlayerInfo;
