import "./styles.scss";

const Stat = ({ name, amount, pp }) => (
  <div className="Stat">
    <p className="Stat__name">
      {name}
      {pp ? " (per game)" : ""}
    </p>
    <p className="Stat__amount">
      {amount}
      {pp ? <span>({pp})</span> : ""}
    </p>
  </div>
);

export default Stat;
