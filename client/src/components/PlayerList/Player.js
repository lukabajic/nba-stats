import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import teams from "../../utls/teams";

import "./styles.scss";

const Info = ({ top, bottom, hideOnMobile }) => (
  <div
    className={cn("Player__info", {
      "hide-on-mobile": hideOnMobile,
    })}
  >
    <p className="Player__info-top">{top}</p>
    <p className="Player__info-bottom">{bottom}</p>
  </div>
);

const Player = ({ id, firstName, lastName, teamId, number, position }) => {
  return (
    <Link className="Player" to={`/player/${id}`}>
      <img
        src={`https://cdn.nba.com/headshots/nba/latest/260x190/${id}.png`}
        alt=""
        className="Player__image"
      />
      <div className="Player__display-name">
        <p className="Player__first-name">{firstName}</p>
        <p className="Player__last-name">{lastName}</p>
      </div>
      <div className="Player__rest">
        <Info hideOnMobile top="num" bottom={number} />
        <Info hideOnMobile top="pos" bottom={position} />
        <Info top="team" bottom={teams[teamId]?.abbreviation} />
      </div>
    </Link>
  );
};

export default Player;
