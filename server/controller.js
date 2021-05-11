const fetch = require("node-fetch");

const { catchError, throwError } = require("./utils/errors");

exports.getPlayers = async (req, res) => {
  fetch("http://data.nba.net/data/10s/prod/v1/2020/players.json", {
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
        league: { standard: players },
      } = results;

      res.status(200).json({
        statusCode: 200,
        players,
      });
    })
    .catch((err) => catchError(res, err));
};
