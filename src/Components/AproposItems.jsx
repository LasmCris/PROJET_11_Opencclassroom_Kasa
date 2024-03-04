import React from "react";

export default function DropdownMenu(props) {
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown-container">
      <div className="header" onClick={toggleDropdown}>
        <span>{props.titreApropos}</span>
        <span className={`arrow ${isDropdownOpen ? "down" : "up"}`}></span>
      </div>
      {isDropdownOpen && (
        <div className="content">
          <p>{props.detailApropos}</p>
        </div>
      )}
    </div>
  );
};


