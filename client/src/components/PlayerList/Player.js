import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import teams from "../../utls/teams";

import "./styles.scss";

const Info = ({
  top,
  bottom,
  hideOnMobile,
  hideOnSmallDevices,
  showOnLargeDevices,
  large,
  xl,
}) => (
  <div
    className={cn("Player__info", {
      "hide-on-mobile": hideOnMobile,
      "hide-on-small-devices": hideOnSmallDevices,
      "show-on-large-devices": showOnLargeDevices,
      "Player__info--large": large,
      "Player__info--xl": xl,
    })}
  >
    <p className="Player__info-top">{top}</p>
    <p className="Player__info-bottom">{bottom}</p>
  </div>
);

const Player = ({
  id,
  firstName,
  lastName,
  teamId,
  number,
  position,
  height,
  weight,
  country,
}) => {
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
        <Info
          hideOnSmallDevices
          large
          top="height"
          bottom={`${(height * 100).toFixed(0)} cm`}
        />
        <Info
          hideOnSmallDevices
          large
          top="weight"
          bottom={`${Number(weight).toFixed(0)} kg`}
        />
        <Info showOnLargeDevices xl top="country" bottom={country} />
      </div>
    </Link>
  );
};

export default Player;
