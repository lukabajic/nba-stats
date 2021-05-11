import React from "react";
import cn from "classnames";

import "./styles.scss";

export const Spinner = ({ blue }) => (
  <div
    className={cn("Loader", {
      "Loader--blue": blue,
    })}
  >
    Loading...
  </div>
);

const Loader = () => (
  <div className="Overlay">
    <Spinner />
  </div>
);

export default Loader;
