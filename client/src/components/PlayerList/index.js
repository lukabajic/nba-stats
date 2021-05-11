import React from "react";
import { Link } from "react-router-dom";

import teams from "../../utls/teams";

import "./styles.scss";

const Player = ({ id, firstName, lastName, teamId, position }) => {
  return (
    <Link className="Player" to={`/player/${id}`} key={id + teamId}>
      <img
        src={`https://cdn.nba.com/headshots/nba/latest/260x190/${id}.png`}
        alt=""
        className="Player__image"
      />
      <div className="Player__display-name">
        <p className="Player__first-name">{firstName}</p>
        <p className="Player__last-name">{lastName}</p>
      </div>
      <div className="Player__info">
        <p className="Player__team">{teams[teamId]?.abbreviation}</p>
        <p className="Player__position">{position}</p>
      </div>
    </Link>
  );
};

const PlayerList = ({ players }) => (
  <div className="PlayersList">
    {players?.map((p) => (
      <Player {...p} />
    ))}
  </div>
);

export default PlayerList;
