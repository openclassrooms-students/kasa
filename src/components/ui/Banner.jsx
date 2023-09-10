const Banner = ({ background="", children }) => {
  return <div className="banner" style={{
    backgroundImage: `url(${background})`,
  }}>{children}</div>;
};

export default Banner