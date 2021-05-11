class ListPlayer {
  constructor({ id, firstName, lastName, number, height, weight, country }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.number = number;
    this.height = height;
    this.weight = weight;
    this.country = country;
  }
}

module.exports = { ListPlayer };
