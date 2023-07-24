import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { Resume } from '../../components/Resume/Resume';
import Card from '../../components/Card/Card';
import Goals from '../../components/Goals/Goals.jsx';
import ChangeLog from '../../components/ChangeLog/ChangeLog';
import './MainPage.css';

const MainPage = () => {
  return (
    <>
      <section className="title">
        <div className="container">
          <h1 className="title__title">Hello! I'm Beast</h1>
          <h3 className="title__text">Welcome to my personal page!</h3>
        </div>
      </section>

      <section className="main">
        <div className="container">
          <div className="main__block">

            <div className="container__block">

              <div className="block__resume-goals">
                <Resume />

                <Goals />

              </div>

              <Card />

            </div>

            <ChangeLog />

          </div>
        </div>
      </section>
    </>
  )
}

export default MainPage;