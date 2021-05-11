const fetch = require("node-fetch");

const { ListPlayer } = require("./models");

const { catchError, throwError } = require("./utils/errors");

exports.getPlayers = async (req, res) => {
  fetch("http://data.nba.net/data/10s/prod/v1/2019/players.json", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((results) => {
      !results &&
        throwError(
          "Couldn't fetch data from the resource. Please reload the page to try again.",
          404
        );

      const {
        league: { standard },
      } = results;

      const players = standard.map(
        (p) =>
          new ListPlayer({
            id: p.personId,
            firstName: p.firstName,
            lastName: p.lastName,
            teamId: p.teamId,
            number: p.jersey,
            height: p.heightMeters,
            weight: p.weightKilograms,
            country: p.country,
            position: p.pos,
          })
      );

      res.status(200).json({
        statusCode: 200,
        players,
      });
    })
    .catch((err) => catchError(res, err));
};

exports.getPlayerGamelog = async (req, res) => {
  const { id } = req.params;

  fetch(`http://data.nba.net/prod/v1/2019/players/${id}_gamelog.json`)
    .then((res) => res.json())
    .then((data) => {
      const {
        league: { standard },
      } = data;

      res.status(200).json({
        statusCode: 200,
        games: standard,
      });
    })
    .catch((err) => catchError(req, err));
};
