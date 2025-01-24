const Hamburger = ({ clickOpt }) => {
  return (
    <div className="menu-icon" onClick={clickOpt}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export { Hamburger };
