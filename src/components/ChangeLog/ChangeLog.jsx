import changes from './changes';
import './ChangeLog.css';

const ChangeLog = () => {

  return (
    <div className="log">
      <div className="log__title">
        Change Log
      </div>
      <div className="log__inner">
        <div className="log__content">
          {changes.map(item => (
            <p key={item.id}>{item.change}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChangeLog;