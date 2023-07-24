import { goalList } from "./goalList";
import './Goals.css';

function Goals() {
  return (
    <div className="goals">
      <div className="goals__block">
        <h2 className="goals__title">
          Goals for this page:
        </h2>
        <div className="goals__content">
          <ul className="goals__list">
            {goalList.map(item => (
              <li 
                key={item.id} 
                className={item.isDone ? 'done' : '' || item.isNext ? `next` : ''}
              >
                {item.goal}
              </li>
            ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Goals;