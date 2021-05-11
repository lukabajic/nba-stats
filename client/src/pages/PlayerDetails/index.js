import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import cn from "classnames";

import ChevronLeft from "./ChevronLeft";
import RecentGames from "./RecentGames";

import "./styles.scss";

const Head = ({ id, firstName, lastName }) => (
  <div className="PlayerDetails__header">
    <div className="PlayerDetails__image">
      <img
        src={`https://cdn.nba.com/headshots/nba/latest/260x190/${id}.png`}
        alt="Player"
      />
    </div>
    <h2 className="PlayerDetails__name">
      <span className="PlayerDetails__name--first">{firstName}</span>{" "}
      <span className="PlayerDetails__name--last">{lastName}</span>
    </h2>
  </div>
);

const PlayerInfo = ({ ...all }) => {
  return <div></div>;
};

const Body = ({ player, ...rest }) => {
  const [activeTab, setActiveTab] = useState("games");

  return (
    <div className="PlayerDetails__body">
      <div className="PlayerDetails__tabs">
        <p
          onClick={() => setActiveTab("games")}
          className={cn("PlayerDetails__tab", {
            "PlayerDetails__tab--active": activeTab === "games",
          })}
        >
          Recent Games
        </p>
        <p
          onClick={() => setActiveTab("info")}
          className={cn("PlayerDetails__tab", {
            "PlayerDetails__tab--active": activeTab === "info",
          })}
        >
          Player Info
        </p>
      </div>
      {activeTab === "games" && <RecentGames {...rest} />}
      {activeTab === "info" && <PlayerInfo {...player} />}
    </div>
  );
};

const PlayerDetails = ({ history, match, players }) => {
  // no need to  store this in a reducer
  // will not be using this data anywhere else
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const page = useRef(null);

  const { id } = match.params;
  const player = players?.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (player && id) {
      fetch(`/api/player-gamelog/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data.games);
          setLoading(false);
        })
        .catch((err) => setError(err));
    }
  }, [player, id]);

  // a user might type out the url with a non existant id
  if (!player) return <Redirect to="/" />;

  const goBack = () => {
    // this adds slide right animation
    page.current.classList.add("PlayerDetails--close");

    // wait for animation to finish before going back
    setTimeout(() => {
      history.goBack();
    }, 300);
  };

  return (
    <div className="PlayerDetails" ref={page}>
      <button className="PlayerDetails__go-back" onClick={goBack}>
        <ChevronLeft />
      </button>
      <Head id={id} firstName={player.firstName} lastName={player.lastName} />
      <Body data={data} loading={loading} error={error} player={player} />
    </div>
  );
};

export default connect((state) => ({ players: state.players.players }))(
  PlayerDetails
);
