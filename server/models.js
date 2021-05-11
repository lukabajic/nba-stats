class ListPlayer {
  constructor({
    id,
    firstName,
    lastName,
    teamId,
    number,
    height,
    weight,
    country,
    position,
  }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.teamId = teamId;
    this.number = number;
    this.height = height;
    this.weight = weight;
    this.country = country;
    this.position = position;
  }
}

module.exports = { ListPlayer };
