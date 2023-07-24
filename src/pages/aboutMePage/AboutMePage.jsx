import { AppearingInfo } from '../../components/ChoiceButtons/AppearingInfo/ApperingInfo';
import { ChoiceButtons } from '../../components/ChoiceButtons/ChoiceButtons';
import './AboutMePage.css';

export const AboutMePage = () => {
  return (
    <>
    <section className="title">
      <div className="container">
        <h1 className="title__main">About Beast</h1>
        <h3 className="title__description">There is some basic info about me here!</h3>
      </div>
    </section>

    <section className="choice">
      <div className="container">
        <div className="choice__block">

          <ChoiceButtons />

          <AppearingInfo />

        </div>
      </div> 
    </section>
    </>
  )
}