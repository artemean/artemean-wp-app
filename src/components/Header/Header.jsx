import React from "react";

function Header(props) {
  return (
    <header className="main-header">
      <div class="site-branding-text">
          <h1 class="site-title"><a href="/" rel="home">{props.sitename}</a></h1>
  
          <p class="site-description">{props.description}</p>
      </div>
    </header>
  )
}

export default Header;
