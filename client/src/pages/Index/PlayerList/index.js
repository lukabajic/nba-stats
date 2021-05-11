import React, { useState, useEffect, useRef } from "react";

import Player from "./Player";

import "./styles.scss";

const PlayerList = ({ players }) => {
  const [data, setData] = useState(players?.slice(0, 10));
  const playersShown = useRef(10);

  const handleScroll = () => {
    if (
      data.length < players.length &&
      window.scrollY + window.innerHeight ===
        document.documentElement.offsetHeight
    ) {
      playersShown.current++;
      setData(players?.slice(0, playersShown.current));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="PlayersList">
      {data?.map((p) => (
        <Player {...p} key={p.id} />
      ))}
    </div>
  );
};

export default PlayerList;
