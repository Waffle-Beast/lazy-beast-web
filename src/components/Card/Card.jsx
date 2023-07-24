import image from './img/lazy.jpg';
import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <a className="card-link" href="https://github.com/Lazy-Beast" target="_blank">
        <div className="image">
          <img className="img" src={image} alt="My photo" />
          <p className="card-title">
            <span>My GitHub!</span>
            (Follow for a free cookie!)
          </p>
        </div>
      </a>
    </div>
  )
}

export default Card;