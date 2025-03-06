const Nav = () => {
  return (
    <div style={{ display: "flex", padding: "2px" }}>
      <div>
        <img src="logo.png" alt="#" width="27px" height="100%" />
      </div>
      <div style={{ marginLeft: "5px"}}>
        <h2 style={{ fontSize: "20px" }} className="app-name">
          YouTube
        </h2>
      </div>
    </div>
  );
};

export default Nav;
