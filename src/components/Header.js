import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <div className="header">
        <FontAwesomeIcon
          icon={["fa", "list-alt"]}
          className="list-alt"
          size="2x"
        />
        <h1 className="header-title">Todo List</h1>
      </div>
    </>
  );
};

export default Header;
