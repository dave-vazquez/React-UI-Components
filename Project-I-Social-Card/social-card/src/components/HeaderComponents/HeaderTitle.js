import React from "react";
import "./Header.css";

import moment from "moment";

const HeaderTitle = () => {
  return (
    <div className="header-title-container">
      <h1 className="header-title">Lambda School</h1>
      <p className="time-stamp">@Lambda School · {moment().format("ll")}</p>
    </div>
  );
};

export default HeaderTitle;
