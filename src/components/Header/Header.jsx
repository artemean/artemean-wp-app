import React from "react";

function Header(props) {
  return (
    <header className="main-header">
      <div className="site-branding-text">
        <h1 className="site-title">
          <a href="/" rel="home">
            {props.sitename}
          </a>
        </h1>

        <p className="site-description">{props.description}</p>
      </div>
    </header>
  );
}

export default Header;
