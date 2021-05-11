import React from "react";
import cn from "classnames";

import teams from "../../utls/teams";
import { Spinner } from "../../components/Loader";

import "./styles.scss";

const Stat = ({ name, amount }) => (
  <div className="RecentGames__stat">
    <p className="RecentGames__stat-name">{name}</p>
    <p className="RecentGames__stat-amount">{amount}</p>
  </div>
);

const RecentGames = ({ data: games, loading, error }) => {
  if (loading)
    return (
      <div className="RecentGames__loading">
        <Spinner />
      </div>
    );

  if (error) return <div className="RecentGames__error">{error}</div>;

  return (
    <div className="RecentGames">
      {games?.map((g) => {
        const opponents = !g.isHomeGame ? g.hTeam : g.vTeam;

        return (
          <div key={g.gameId} className="RecentGames__game">
            <div className="RecentGames__game-head">
              <p className="RecentGames__game-date">
                {new Date(g.gameDateUTC).toDateString()}
              </p>
              <p className="RecentGames__game-opponent">
                {g.isHomeGame ? "vs" : "@"}{" "}
                {teams[opponents.teamId].abbreviation}
              </p>
            </div>

            <div className="RecentGames__game-score">
              <p
                className={cn("RecentGames__game-team", {
                  "RecentGames__game-score--winner": g.hTeam.isWinner,
                })}
              >
                {teams[g.hTeam.teamId].simpleName}
              </p>
              <p
                className={cn("RecentGames__game-team", {
                  "RecentGames__game-score--winner": g.vTeam.isWinner,
                })}
              >
                {teams[g.vTeam.teamId].simpleName}
              </p>
              <p
                className={cn("RecentGames__game-points", {
                  "RecentGames__game-score--winner": g.hTeam.isWinner,
                })}
              >
                {g.hTeam.score}
              </p>
              <p
                className={cn("RecentGames__game-points", {
                  "RecentGames__game-score--winner": g.vTeam.isWinner,
                })}
              >
                {g.vTeam.score}
              </p>
            </div>

            <div className="RcentGames__stats">
              <Stat name="Points" amount={g.stats.points} />
              <Stat name="Offensive Rebounds" amount={g.stats.offReb} />
              <Stat name="Defensive Rebounds" amount={g.stats.defReb} />
              <Stat name="Total Rebounds" amount={g.stats.totReb} />
              <Stat name="Assists" amount={g.stats.assists} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentGames;
