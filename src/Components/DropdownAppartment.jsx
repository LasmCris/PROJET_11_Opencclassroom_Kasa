import React from "react";

export default function DropdownAppartment(props) {
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown-container_Location">
      <div className="header" onClick={toggleDropdown}>
        <span>{props.detailAppartment}</span>
        <span className={`arrow ${isDropdownOpen ? "down" : "up"}`}></span>
      </div>
      {isDropdownOpen && (
        <div className="content">
          <p>{props.detailApropos}</p>
        </div>
      )}
    </div>
  );
}
