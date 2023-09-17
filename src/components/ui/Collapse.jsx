import { useState } from "react";

const Collapse = ({ title, children }) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  return (
    <div className="collapse">
      <button className="collapse__button" onClick={toggle}>
        {title}
        {open ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
      </button>
      {open && <div className="collapse--open">{children}</div>}
    </div>
  );
};

export default Collapse;
