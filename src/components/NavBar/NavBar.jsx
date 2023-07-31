import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import { pages } from "./pages";

const NavBar = () => {
  const [active, setActive] = useState(0);

  function string() {
    const words = [];

    for (let i = 0; i < 25; i++) {
      words.push("BEAST");
    }
    const wordsStr = words.join(", ").replace(/,/g, "");
    return wordsStr;
  }

  return (
    <header>
      <nav className="nav">
        <div className="container">
          <div className="container-secondary">
            <nav className="navigation">
              <ul className="nav__list">
                {pages.map((page, index) => {
                  return (
                    <NavLink
                      to={page.to}
                      key={`${page.title}|${index}`}
                      onClick={() => setActive(index)}
                      className={
                        active === index
                          ? "nav__btn nav__btn-active"
                          : "nav__btn"
                      }>
                      {page.title}
                    </NavLink>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="adaptive-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      <marquee scrollamount="18" className="marquee-top">
        {string()}
      </marquee>
      <marquee scrollamount="15" className="marquee">
        {string()}
      </marquee>
      <marquee scrollamount="17" className="marquee-bottom">
        {string()}
      </marquee>
    </header>
  );
};

export default NavBar;
