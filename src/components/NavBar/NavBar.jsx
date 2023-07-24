import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

  function string() {
    const words = [];

    for (let i = 0; i < 25; i++) {
      words.push('BEAST');
    }
    const wordsStr = words.join(', ').replace(/,/g, "");;
    return wordsStr;
  }

  return (
    <header>
      <nav className="nav">
        <div className="container">
          <div className="container-secondary">
            <nav className="navigation">
              <ul className="nav__list">
                <NavLink to={'/'} className="nav__list__item nav__btn">Main Page</NavLink>
                <NavLink to={'/AboutMe'} className="nav__list__item nav__btn">About Me</NavLink>
                <NavLink className="nav__list__item nav__btn">Goals</NavLink>
                <NavLink className="nav__list__item nav__btn">Useful Links</NavLink>
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
  )
}

export default NavBar;