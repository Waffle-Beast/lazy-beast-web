import { infos } from "./info";
import './AppearingInfo.css'

export const AppearingInfo = () => {
  return (
    <div className="appearing__info">

      {createElements()}

    </div>
  )
}

function createElements() {
  return infos.map(obj => (
    <div key={obj.id} className={`info info-${obj.id}`}>
      <h2 className="info-title">{obj.title}</h2>
      <p className="info-p">
        {obj.info}
      </p>
    </div>
  ))
}