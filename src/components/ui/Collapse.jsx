import { useState } from "react";
import chevronDown from "../../assets/chevron-down.svg";

const Collapse = ({ title, children }) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  return (
    <div className="collapse">
      <button className="collapse__button" onClick={toggle}>
        {title}

        <img
          className={`collapse__icon ${open && "collapse__icon--open"}`}
          src={chevronDown}
          alt="chevron"
        />
      </button>
      {open && <div className="collapse--open">{children}</div>}
    </div>
  );
};

export default Collapse;
